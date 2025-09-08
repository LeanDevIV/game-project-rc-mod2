// 📦 Dependencias
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { buscarUsuarioPorEmail } from "../../services/userServices";
import { useUser } from "../../context/UserContext";

function FormLogin({ onLogin }) {
  const { setUser } = useUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  // 🚀 Función que maneja el submit del login
  function onSubmit(data) {
    // 🔎 Buscar usuario en localStorage
    const usuario = buscarUsuarioPorEmail(data.email);

    if (!usuario) {
      toast.error("Usuario no encontrado.");
      return;
    }

    if (usuario.password !== data.password) {
      toast.error("Contraseña incorrecta.");
      return;
    }
    const usuarioLogueado = {
      id: usuario.id,
      nombre: usuario.nombreUsuario,
      email: data.email,
      loginAt: new Date().toISOString(),
    };

    sessionStorage.setItem("user", JSON.stringify(usuarioLogueado));
    setUser(usuarioLogueado);
    toast.success("Inicio de sesión exitoso ✅");
    // 👉 avisamos al modal
    if (onLogin) {
      onLogin(usuarioLogueado);
    }

    reset();
    navigate("/");
  }

  // 🎨 Renderizado del formulario
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Campo Email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su email"
          isInvalid={errors.email}
          {...register("email", {
            required: "El email es requerido",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // regex para validar email
              message: "Debe ingresar un email válido",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Campo Password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su password"
          isInvalid={errors.password}
          {...register("password", {
            required: "El password es requerido",
            minLength: {
              value: 4,
              message: "El mínimo es 4 caracteres",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Botón Submit */}
      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
}

export default FormLogin;
