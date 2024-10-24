import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteLanguageByUser, getLanguagesByUser } from "../api/http";
import LanguageItem from "./LanguageItem";
import AddLanguageBar from "./AddLanguageBar";

const UserLanguagePanel = ({ user, setViewUserLang }) => {
  const queryClient = useQueryClient();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["user_languages", user.id],
    queryFn: () => getLanguagesByUser(user.id),
  });

  const { mutate } = useMutation({
    mutationFn: deleteLanguageByUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user_languages", user.id] });
    },
  });

  return (
    <>
      <section className="max-w-screen-xl mx-auto p-2">
        <div className="flex justify-between items-center my-2 p-2">
          <h1 className="text-2xl font-bold text-gray-900">{`${user.name}'s Languages`}</h1>
          <button
            className="px-4 py-2 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-600"
            onClick={() => setViewUserLang(null)}
          >
            Back
          </button>
        </div>

        <AddLanguageBar userId={user.id} />

        {isPending && <p>Loading...</p>}
        {isError && <p>{error.message}</p>}
        {data && (
          <ul className="divide-y divide-gray-200">
            {data.map((language, index) => (
              <LanguageItem
                key={index}
                language={language}
                onDelete={() => mutate({ userId: user.id, language: language })}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default UserLanguagePanel;
