import { useRef } from "react";
import Input from "./Input";

const LanguageForm = ({ onSubmit, onCancel }) => {
  const languageRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const value = languageRef.current.value.trim();
    if (value === "") {
      return;
    }

    console.log(value);
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit} className="w-80">
      <Input ref={languageRef} text="text" name="language" label="Language" />
      <div className="flex justify-end gap-3">
        <button
          type="button"
          className="px-3 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
          onClick={onCancel}
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
    </form>
  );
};

export default LanguageForm;
