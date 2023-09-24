import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IInputFormProps {
  type: string;
  placeholder: string;
  registerProps: UseFormRegister<FieldValues>;
}

export const InputForm: React.FC<IInputFormProps> = ({
  type,
  placeholder,
  registerProps,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="shadow appearance-none bg-[#51378a] border border-[] rounded w-full py-2 px-3 
    text-white leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-200"
    />
  );
};
