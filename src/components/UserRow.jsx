import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/http";

const UserRow = ({ user, onUpdate, setViewUserLang }) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return (
    <tr>
      <td className="p-3">{user.name}</td>
      <td className="p-3">{user.age}</td>
      <td className="p-3">{user.country}</td>
      <td className="flex justify-end p-3">
        {isPending && <p className="px-4 py-2">Deleting...</p>}
        {!isPending && (
          <div className="flex gap-2">
            <button
              className="px-4 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
              onClick={() => onUpdate(user)}
            >
              Update
            </button>
            <button
              className="px-4 py-2 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-600"
              onClick={() => mutate(user.id)}
            >
              Delete
            </button>
            <button
              className="px-4 py-2 rounded-md bg-indigo-100 text-indigo-900 font-semibold shadow-sm hover:bg-indigo-200"
              onClick={() => setViewUserLang(user)}
            >
              Languages
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
