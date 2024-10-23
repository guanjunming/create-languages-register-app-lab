import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/http";

const UserRow = ({ user, onUpdate }) => {
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
      <td className="p-3">{user.age || "Unknown"}</td>
      <td className="p-3">{user.country || "Unknown"}</td>
      <td className="flex justify-end p-3">
        {isPending && <p className="px-4 py-2">Deleting...</p>}
        {!isPending && (
          <div className="flex gap-2">
            <button
              className="px-4 py-2 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-600"
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
          </div>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
