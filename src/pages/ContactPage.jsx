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





Nuevo
20:01
{/* Empresa / Compañía */}
      <div>
        <label className="block font-medium">Empresa / Compañía u Organización</label>
        <input
          type="text"
          className="w-full border p-2 rounded-md"
          {...register("empresa", {
            required: "El nombre de la empresa es obligatorio",
            minLength: {
              value: 2,
              message: "Debe tener al menos 2 caracteres",
            },
          })}
        />
        {errors.empresa && (
          <p className="text-red-500 text-sm">{errors.empresa.message}</p>
        )}
      </div>
      {/* Mensaje */}
      <div>
        <label className="block font-medium">Mensaje</label>
        <textarea
          className="w-full border p-2 rounded-md"
          rows="5"
          {...register("mensaje", {
            required: "El mensaje es obligatorio",
            minLength: {
              value: 10,
              message: "El mensaje debe tener al menos 10 caracteres",
            },
          })}
        ></textarea>
        {errors.mensaje && (
          <p className="text-red-500 text-sm">{errors.mensaje.message}</p>
        )}
      </div>
      {/* Botón */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}

export default Contactpage;
