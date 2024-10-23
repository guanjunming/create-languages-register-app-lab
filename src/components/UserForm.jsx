import { useRef } from "react";
import Input from "./Input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser, updateUser } from "../api/http";

const UserForm = ({ user, onModalClose }) => {
  const queryClient = useQueryClient();
  const nameRef = useRef();
  const ageRef = useRef();
  const countryRef = useRef();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: user ? updateUser : addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      onModalClose();
    },
  });

  function handleSubmit(event) {
    event.preventDefault();

    const name = nameRef.current.value.trim();
    const age = ageRef.current.value;
    const country = countryRef.current.value.trim();

    const userData = {
      name: name,
      age: age,
      country: country,
    };

    mutate(user ? { ...userData, id: user.id } : userData);
  }

  return (
    <form onSubmit={handleSubmit} className="w-96">
      <Input
        ref={nameRef}
        type="text"
        name="name"
        label="Name"
        defaultValue={user?.name || ""}
        required
      />
      <Input
        ref={ageRef}
        type="number"
        name="age"
        label="Age"
        defaultValue={user?.age || ""}
      />
      <Input
        ref={countryRef}
        type="text"
        name="country"
        label="Country"
        defaultValue={user?.country || ""}
      />
      <div className="flex justify-end gap-3">
        <button
          type="button"
          className="px-3 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
          onClick={onModalClose}
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

export default UserForm;