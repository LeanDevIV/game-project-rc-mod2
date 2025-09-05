// AdminTable.jsx
import { useState } from "react";
import { Table, Button, Form, Container, Row, Col } from "react-bootstrap";
import useStorage from "../../utils/LocalStorage";
import Swal from "sweetalert2";

function UsersTable() {
  const [usuarios, setUsuarios] = useStorage("usuarios");
  const [editingIndex, setEditingIndex] = useState(null);
  const [newGame, setNewGame] = useState({
    titulo: "",
    genero: "",
    año: "",
    precio: "",
    descripcion: "",
  });

  // Manejo de cambios
  const handleChange = (e, field, index = null) => {
    const value = e.target.value;
    if (index !== null) {
      const updated = [...usuarios];
      updated[index][field] = value;
      setUsuarios(updated);
    } else {
      setNewGame({ ...newGame, [field]: value });
    }
  };

  // Agregar juego
//   const handleAdd = () => {
//     if (!newGame.titulo)
//       return Swal.fire("Error", "El título es obligatorio", "error");
//     setUsuarios([
//       ...usuarios,
//       { ...newGame, precio: parseFloat(newGame.precio) },
//     ]);
//     setNewGame({
//       titulo: "",
//       genero: "",
//       año: "",
//       precio: "",
//       descripcion: "",
//     });
//     Swal.fire("Agregado", "El juego se agregó correctamente", "success");
//   };

  // Borrar juego
  const handleDelete = (index) => {
    Swal.fire({
      title: "¿Seguro?",
      text: "Este juego será eliminado.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsuarios(usuarios.filter((_, i) => i !== index));
        Swal.fire("Eliminado", "El juego ha sido borrado.", "success");
      }
    });
  };

  // Editar
  const toggleEdit = (index) => {
    if (editingIndex === index) {
      Swal.fire({
        title: "¿Guardar cambios?",
        text: "Se actualizará la información del juego.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          setEditingIndex(null);
          Swal.fire("Guardado", "Los cambios fueron aplicados.", "success");
        }
      });
    } else {
      setEditingIndex(index);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Panel de Administración de usuarios</h2>

      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>email</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              {editingIndex === index ? (
                <>
                  <td>
                    <Form.Control
                      type="text"
                      value={usuario.id}
                      onChange={(e) => handleChange(e, "titulo", index)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={usuario.nombreUsuario}
                      onChange={(e) => handleChange(e, "genero", index)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      value={usuario.email}
                      onChange={(e) => handleChange(e, "año", index)}
                    />
                  </td>

                  <td>
                    <Button
                      variant="success"
                      size="sm"
                      className="me-2"
                      onClick={() => toggleEdit(index)}
                    >
                      Guardar
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(index)}
                    >
                      Borrar
                    </Button>
                  </td>
                </>
              ) : (
                <>
                  <td>{usuario.id}</td>
                  <td>{usuario.nombreUsuario}</td>
                  <td>{usuario.email}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => toggleEdit(index)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(index)}
                    >
                      Borrar
                    </Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <h4 className="mt-4">Agregar nuevo juego</h4>
      <Row className="g-2 mt-2">
        <Col md={2}>
          <Form.Control
            type="text"
            placeholder="Título"
            value={newGame.titulo}
            onChange={(e) => handleChange(e, "titulo")}
          />
        </Col>
        <Col md={2}>
          <Form.Control
            type="text"
            placeholder="Género"
            value={newGame.genero}
            onChange={(e) => handleChange(e, "genero")}
          />
        </Col>
        <Col md={1}>
          <Form.Control
            type="number"
            placeholder="Año"
            value={newGame.año}
            onChange={(e) => handleChange(e, "año")}
          />
        </Col>
        <Col md={1}>
          <Form.Control
            type="number"
            placeholder="Precio"
            value={newGame.precio}
            onChange={(e) => handleChange(e, "precio")}
          />
        </Col>
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Descripción"
            value={newGame.descripcion}
            onChange={(e) => handleChange(e, "descripcion")}
          />
        </Col>
        <Col md={2}>
          <Button variant="primary" className="w-100" onClick={handleAdd}>
            Agregar
          </Button>
        </Col>
      </Row> */}
    </Container>
  );
}

export default UsersTable;
