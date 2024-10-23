const LanguageItem = ({ language, onDelete }) => {
  return (
    <li className="flex justify-between items-center p-2">
      <span>{language}</span>
      <button
        className="px-4 py-2 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-600"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default LanguageItem;
