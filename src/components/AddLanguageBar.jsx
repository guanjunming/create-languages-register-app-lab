import { useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addLanguageByUser, getLanguages } from "../api/http";

const AddLanguageBar = ({ userId }) => {
  const queryClient = useQueryClient();
  const selectRef = useRef();

  const { data } = useQuery({
    queryKey: ["languages"],
    queryFn: getLanguages,
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addLanguageByUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user_languages", userId] });
    },
  });

  const handleAddLanguage = () => {
    mutate({ userId: userId, language: selectRef.current.value });
  };

  return (
    <div className="flex items-center gap-4 p-2">
      <p className="text-lg font-medium">Add Language: </p>
      <select
        ref={selectRef}
        className="p-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      >
        {data &&
          data.map((entry, index) => (
            <option key={index} value={entry.language}>
              {entry.language}
            </option>
          ))}
      </select>
      <button
        className="px-4 py-1 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
        onClick={handleAddLanguage}
      >
        Add
      </button>
      {isPending && <p>Submitting...</p>}
      {isError && <p>{error.message}</p>}
    </div>
  );
};

export default AddLanguageBar;
