import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  obtenerUsuarios,
  guardarUsuarios,
  buscarUsuarioPorEmail,
} from "../../services/userServices";
import ROLES from "../../constants/roles";

function FormRegister() {
  //  Configuración del hook useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nombreUsuario: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  //  Función que maneja el submit del formulario

  function onSubmit(data) {
    try {
      if (data.password !== data.confirmPassword) {
        toast.error("Las contraseñas no coinciden");
        return;
      }

      const nuevoUsuario = {
        id: Date.now(),
        nombreUsuario: data.nombreUsuario.trim(),
        rol: ROLES.USUARIO,
        email: data.email.trim(),
        password: data.password,
        createdAt: new Date().toISOString(),
      };

      //  Validar email duplicado
      if (buscarUsuarioPorEmail(nuevoUsuario.email)) {
        toast.error("Este usuario ya existe");
        return;
      }

      // Guardar usuario
      const user = obtenerUsuarios();
      guardarUsuarios([...user, nuevoUsuario]);

      reset();
      toast.success("Usuario Creado!");
      navigate("/");
    } catch (error) {
      toast.error("Error al crear usuario");
      console.error(error);
    }
  }

  //  Renderizado del formulario
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="px-4">
      {/* Nombre de usuario */}
      <Form.Group className="mb-3" controlId="formBasicUser">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su nombre de usuario"
          isInvalid={errors.nombreUsuario}
          {...register("nombreUsuario", {
            required: "El campo es obligatorio",
            minLength: {
              value: 4,
              message: "Debe ingresar al menos 4 caracteres",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.nombreUsuario?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Correo electrónico */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo electrónico"
          isInvalid={errors.email}
          {...register("email", {
            required: "El campo es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Debe ingresar un email válido",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Contraseña */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          isInvalid={errors.password}
          {...register("password", {
            required: "El campo es obligatorio",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Confirmar contraseña */}
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirmar contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirme su contraseña"
          isInvalid={errors.confirmPassword}
          {...register("confirmPassword", {
            required: "El campo es obligatorio",
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.confirmPassword?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Botón submit */}
      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  );
}

export default FormRegister;
