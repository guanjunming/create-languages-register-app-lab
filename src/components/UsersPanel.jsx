import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllUsers } from "../api/http";
import Modal from "./Modal";
import UserForm from "./UserForm";
import UserRow from "./UserRow";
import UserLanguagePanel from "./UserLanguagePanel";

const UsersPanel = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [viewUserLang, setViewUserLang] = useState(null);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const onModalClose = () => {
    setModalOpen(false);
    if (selectedUser) {
      setSelectedUser(null);
    }
  };

  const onUpdateUser = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  return (
    <>
      {modalOpen && (
        <Modal>
          <h2 className="text-xl font-bold text-gray-900 mt-2">
            {selectedUser ? "Edit User" : "Add New User"}
          </h2>
          <UserForm user={selectedUser} onModalClose={onModalClose} />
        </Modal>
      )}

      {viewUserLang ? (
        <UserLanguagePanel
          user={viewUserLang}
          setViewUserLang={setViewUserLang}
        />
      ) : (
        <section className="max-w-screen-xl mx-auto p-2">
          <div className="flex justify-between items-center my-2 p-2">
            <h1 className="text-2xl font-bold text-gray-900">Users</h1>
            <button
              className="px-3 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
              onClick={() => setModalOpen(true)}
            >
              Add User
            </button>
          </div>

          {isPending && <p>Loading...</p>}
          {isError && <p>{error.message}</p>}
          <table className="min-w-full table-auto border-collapse divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Age</th>
                <th className="text-left p-3">Country</th>
                <th className="w-80"></th>
              </tr>
            </thead>
            {data && (
              <tbody className="divide-y divide-gray-200">
                {data.map((user) => (
                  <UserRow
                    key={user.id}
                    user={user}
                    onUpdate={onUpdateUser}
                    setViewUserLang={setViewUserLang}
                  />
                ))}
              </tbody>
            )}
          </table>
        </section>
      )}
    </>
  );
};
export default UsersPanel;
