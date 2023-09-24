import { useForm } from "react-hook-form";
import { User, UserDefaultValue } from "../models/UserModel";
import { useMutation } from "@tanstack/react-query";
import { api } from "../services/api";

interface IFormEditUserProps {
  userSelected: UserDefaultValue;
}

export default function FormEditUser({ userSelected }: IFormEditUserProps) {

  const {} = useMutation(() => api.updateUserName(userSelected.?id, userSelected.name));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = (data: User) => {
    let result;
    if (data.birthdate) {
      result = new Date(data.birthdate);
      console.log("Data de aniversário", result.toISOString());
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h4 className="text-white font-semibold ">
          Edite as informações do usuário
        </h4>
        <h5 className="text-white">Obs: O email é obrigatório</h5>
      </div>

      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2">Nome</label>
        <input
          type="text"
          placeholder="Seu nome"
          className={`shadow appearance-none bg-[#51378a] border-[#842FEA] border focus:border-[#F925D7] rounded w-full py-2 px-3 
          text-white leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-200
          `}
          {...register("name")}
        />
      </div>

      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          defaultValue={userSelected?.email}
          placeholder="Confirme seu email"
          className={`shadow appearance-none bg-[#51378a] border focus:border-[#F925D7] rounded w-full py-2 px-3 
          text-white leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-200
          ${errors?.email ? "border-[#f97325]" : "border-[#842FEA]"}
          `}
          {...register("email", { required: true })}
        />
        {errors?.email?.type === "required" && (
          <span className="text-xs text-white">*Esse campo é obrigatório</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2">
          Data de aniversário
        </label>
        <input
          type="date"
          placeholder="Data de aniversário"
          className={`shadow appearance-none bg-[#51378a] border-[#842FEA] border focus:border-[#F925D7] rounded w-full py-2 px-3 
          text-white leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-200
          `}
          {...register("birthdate")}
        />
      </div>

      <button
        type="submit"
        onClick={() => handleSubmit(onSubmit)()}
        className="bg-[#f97325] w-full p-2 text-white cursor-pointer"
      >
        Atualizar usuário
      </button>
    </div>
  );
}
