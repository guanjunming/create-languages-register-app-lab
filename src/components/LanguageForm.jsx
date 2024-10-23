import { useRef } from "react";
import Input from "./Input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLanguage } from "../api/http";

const LanguageForm = ({ setModalOpen }) => {
  const queryClient = useQueryClient();
  const languageRef = useRef();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addLanguage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["languages"] });
      setModalOpen(false);
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    const value = languageRef.current.value.trim();
    if (value === "") {
      return;
    }
    mutate(value);
  }

  return (
    <form onSubmit={handleSubmit} className="w-96">
      <Input ref={languageRef} text="text" name="language" label="Language" />
      <div className="flex justify-end gap-3">
        <button
          type="button"
          className="px-3 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
          onClick={() => setModalOpen(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-3 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
        >
          Save
        </button>
      </div>
      {isPending && <p>Submitting...</p>}
      {isError && <p>{error.message}</p>}
    </form>
  );
};

export default LanguageForm;
