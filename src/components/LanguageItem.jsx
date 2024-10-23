import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLanguage } from "../api/http";

const LanguageItem = ({ language }) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteLanguage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["languages"] });
    },
  });

  return (
    <li className="flex justify-between items-center p-2">
      <span>{language}</span>
      {isPending && <p className="px-4 py-2">Deleting...</p>}
      {!isPending && (
        <button
          className="px-4 py-2 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-600"
          onClick={() => mutate(language)}
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default LanguageItem;
