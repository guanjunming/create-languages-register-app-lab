import { forwardRef } from "react";

const Input = forwardRef(function Input({ name, label, ...props }, ref) {
  return (
    <div className="flex flex-col gap-2 my-4">
      <label htmlFor={name} className="font-medium text-gray-900">
        {label}
      </label>
      <input
        ref={ref}
        id={name}
        name={name}
        className="w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        {...props}
      />
    </div>
  );
});

export default Input;
