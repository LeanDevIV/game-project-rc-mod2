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

  // Borrar usuario
  const handleDelete = (index) => {
    Swal.fire({
      title: "¿Seguro?",
      text: "Este usuario será eliminado.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsuarios(usuarios.filter((_, i) => i !== index));
        Swal.fire("Eliminado", "El usuario ha sido borrado.", "success");
      }
    });
  };

  // Editar
  const toggleEdit = (index) => {
    if (editingIndex === index) {
      Swal.fire({
        title: "¿Guardar cambios?",
        text: "Se actualizará la información del usuario.",
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
          {usuarios.length === 0 && (<tr><td colSpan="4" className="text-center">No hay usuarios registrados.</td></tr>)}
        </tbody>
      </Table>
    </Container>
  );
}

export default UsersTable;
