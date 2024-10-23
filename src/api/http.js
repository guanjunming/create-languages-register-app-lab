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

export const getAllUsers = async () => {
  const res = await fetch(import.meta.env.VITE_SERVER + "/lab/users");

  if (!res.ok) {
    throw new Error("Error fetching users");
  }

  return await res.json();
};

export const addUser = async (userData) => {
  const res = await fetch(import.meta.env.VITE_SERVER + "/lab/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error("Error adding user");
  }
};

export const deleteUser = async (userId) => {
  const res = await fetch(import.meta.env.VITE_SERVER + "/lab/users/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: userId,
    }),
  });

  if (!res.ok) {
    throw new Error("Error deleting user");
  }
};

export const updateUser = async (userData) => {
  const res = await fetch(import.meta.env.VITE_SERVER + "/lab/users/", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: userData.id,
      name: userData.name,
      age: userData.age,
      country: userData.country,
    }),
  });

  if (!res.ok) {
    throw new Error("Error updating user");
  }
};
