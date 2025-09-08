import React from "react";
import { useForm } from "react-hook-form";

const Contactpage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("datos del formulario:", data);
    reset(); // limpia el form despues de enviar
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4"
    >
      {/* Nombre */}
      <div>
        <label className="block font-medium" htmlFor="">
          nombre
        </label>
        <input
          type="text"
          className="w-full border p-2 rounded-md"
          {...register("nombre", {
            required: "El nombre es obligatorio",
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
          })}
        />
        {errors.nombre && (
          <p className="text-red-500 text-sm">{errors.nombre.message}</p>
        )}
      </div>
      {/* Email */}
      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          className="w-full border p-2 rounded-md"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Formato de email inválido",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
    </form>
  );
};

export default Contactpage;
