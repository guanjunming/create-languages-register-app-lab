import { useState } from "react";
import LanguageForm from "./LanguageForm";
import Modal from "./Modal";

const LanguagesPanel = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddLanguage = () => {
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <Modal>
          <h2 className="text-xl font-bold text-gray-900 mt-2">
            Add new language
          </h2>
          <LanguageForm onCancel={handleCancel} onSubmit={handleSubmit} />
        </Modal>
      )}

      <section className="max-w-screen-xl mx-auto p-2">
        <div className="flex justify-between items-center my-2 p-2">
          <h1 className="text-2xl font-bold text-gray-900">Languages</h1>
          <button
            className="px-3 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
            onClick={handleAddLanguage}
          >
            Add Language
          </button>
        </div>
        <ul className="divide-y divide-gray-200">
          <li className="flex justify-between items-center p-2">
            <span>C#</span>
            <button className="px-4 py-2 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-600">
              Delete
            </button>
          </li>
          <li className="flex justify-between items-center p-2">
            <span>C#</span>
            <button className="px-4 py-2 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-600">
              Delete
            </button>
          </li>
          <li className="flex justify-between items-center p-2">
            <span>C#</span>
            <button className="px-4 py-2 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-600">
              Delete
            </button>
          </li>
        </ul>
      </section>
    </>
  );
};
export default LanguagesPanel;
