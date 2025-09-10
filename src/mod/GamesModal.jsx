import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddGameModal = ({ show, handleClose, onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Le agrego un id único al vuelo
    const newGame = {
      id: Date.now() % 100000,
      ...data,
      publicado: true, // por defecto
    };

    onAdd(newGame);
    reset(); // limpia el form
    handleClose(); // cierra modal
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Agregar nuevo juego</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Row className="g-2">
            <Col md={3}>
              <Form.Control
                type="text"
                placeholder="Título"
                {...register("titulo", { required: "El título es obligatorio" })}
              />
              {errors.titulo && <small className="text-danger">{errors.titulo.message}</small>}
            </Col>

            <Col md={3}>
              <Form.Control
                type="text"
                placeholder="Género"
                {...register("genero", { required: "El género es obligatorio" })}
              />
              {errors.genero && <small className="text-danger">{errors.genero.message}</small>}
            </Col>

            <Col md={2}>
              <Form.Control
                type="number"
                placeholder="Año"
                {...register("año", {
                  required: "El año es obligatorio",
                  min: { value: 1970, message: "El año debe ser mayor a 1970" },
                })}
              />
              {errors.año && <small className="text-danger">{errors.año.message}</small>}
            </Col>

            <Col md={2}>
              <Form.Control
                type="number"
                placeholder="Precio"
                {...register("precio", {
                  required: "El precio es obligatorio",
                  min: { value: 1, message: "Debe ser mayor a 0" },
                })}
              />
              {errors.precio && <small className="text-danger">{errors.precio.message}</small>}
            </Col>

            <Col md={12} className="mt-2">
              <Form.Control
                type="text"
                placeholder="Descripción"
                {...register("descripcion", { required: "La descripción es obligatoria" })}
              />
              {errors.descripcion && (
                <small className="text-danger">{errors.descripcion.message}</small>
              )}
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddGameModal;
