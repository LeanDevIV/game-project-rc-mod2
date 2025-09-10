import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("datos del formulario:", data);
    toast.success("Mensaje enviado con éxito!");
    reset();
  };

  return (
    <Card className="shadow-lg p-4 rounded-3 bg-dark text-light">
      <h2 className="text-center mb-4">Contáctanos</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Nombre */}
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tu nombre"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres",
              },
            })}
            isInvalid={!!errors.nombre}
          />
          <Form.Control.Feedback type="invalid">
            {errors.nombre?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="ejemplo@mail.com"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Formato de email inválido",
              },
            })}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Empresa */}
        <Form.Group className="mb-3" controlId="empresa">
          <Form.Label>Empresa / Compañía u Organización</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de tu empresa"
            {...register("empresa", {
              required: "El nombre de la empresa es obligatorio",
              minLength: {
                value: 2,
                message: "Debe tener al menos 2 caracteres",
              },
            })}
            isInvalid={!!errors.empresa}
          />
          <Form.Control.Feedback type="invalid">
            {errors.empresa?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Mensaje */}
        <Form.Group className="mb-3" controlId="mensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Escribe tu mensaje aquí..."
            {...register("mensaje", {
              required: "El mensaje es obligatorio",
              minLength: {
                value: 10,
                message: "Debe tener al menos 10 caracteres",
              },
            })}
            isInvalid={!!errors.mensaje}
          />
          <Form.Control.Feedback type="invalid">
            {errors.mensaje?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Botón */}
        <div className="text-center">
          <Button variant="primary" type="submit" className="px-4">
            Enviar
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default ContactForm;
