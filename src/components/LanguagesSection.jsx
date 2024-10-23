import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteLanguage, getLanguages } from "../api/http";
import Modal from "./Modal";
import LanguageForm from "./LanguageForm";
import LanguageItem from "./LanguageItem";

const LanguagesPanel = () => {
  const queryClient = useQueryClient();
  const [modalOpen, setModalOpen] = useState(false);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["languages"],
    queryFn: getLanguages,
  });

  const { mutate } = useMutation({
    mutationFn: deleteLanguage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["languages"] });
    },
  });

  return (
    <>
      {modalOpen && (
        <Modal>
          <h2 className="text-xl font-bold text-gray-900 mt-2">
            Add New Language
          </h2>
          <LanguageForm setModalOpen={setModalOpen} />
        </Modal>
      )}

      <section className="max-w-screen-xl mx-auto p-2">
        <div className="flex justify-between items-center my-2 p-2">
          <h1 className="text-2xl font-bold text-gray-900">Languages</h1>
          <button
            className="px-3 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
            onClick={() => setModalOpen(true)}
          >
            Add Language
          </button>
        </div>

        {isPending && <p>Loading...</p>}
        {isError && <p>{error.message}</p>}
        {data && (
          <ul className="divide-y divide-gray-200">
            {data.map((entry) => (
              <LanguageItem
                key={entry.language}
                language={entry.language}
                onDelete={() => mutate(entry.language)}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default LanguagesPanel;
