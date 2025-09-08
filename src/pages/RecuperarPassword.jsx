import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";
import { buscarUsuarioPorEmail } from "../services/userServices";

const RecuperarPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const usuario = buscarUsuarioPorEmail(data.email);
    if (!usuario) {
      toast.error("No existe ninguna cuenta con ese email.");
      return;
    }

    // 👉 En un backend real acá mandarías un mail con token
    toast.success("Se envió un correo con instrucciones para recuperar tu contraseña.");
  };

  return (
    <div className="container my-4 glass-dark p-4 rounded">
      <h2 className="text-light">Recuperar contraseña</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formRecoverEmail">
          <Form.Label>Email registrado</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            isInvalid={errors.email}
            {...register("email", { required: "El email es requerido" })}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="warning">
          Recuperar
        </Button>
      </Form>
    </div>
  );
};

export default RecuperarPassword;
