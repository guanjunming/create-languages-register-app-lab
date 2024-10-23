export const getLanguages = async () => {
  const res = await fetch(import.meta.env.VITE_SERVER + "/lab/languages");

  if (!res.ok) {
    throw new Error("Error fetching languages");
  }

  return await res.json();
};

export const addLanguage = async (language) => {
  const res = await fetch(import.meta.env.VITE_SERVER + "/lab/languages", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      language,
    }),
  });

  if (!res.ok) {
    throw new Error("Error adding language");
  }
};

export const deleteLanguage = async (language) => {
  const res = await fetch(
    import.meta.env.VITE_SERVER + "/lab/languages/" + language,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Error deleting language");
  }
};
