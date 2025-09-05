// AdminTable.jsx
import { useState } from "react";
import gamesDb from "../../constants/gamesDb";
import { Table, Button, Form, Container, Row, Col } from "react-bootstrap";
import useStorage from "../../utils/LocalStorage"
import Swal from "sweetalert2";

function GamesTable() {
  const [games, setGames] = useStorage("gamesDb", gamesDb);
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
      const updated = [...games];
      updated[index][field] = value;
      setGames(updated);
    } else {
      setNewGame({ ...newGame, [field]: value });
    }
  };

  // Agregar juego
  const handleAdd = () => {
    if (!newGame.titulo)
      return Swal.fire("Error", "El título es obligatorio", "error");
    setGames([...games, { ...newGame, precio: parseFloat(newGame.precio) }]);
    setNewGame({
      titulo: "",
      genero: "",
      año: "",
      precio: "",
      descripcion: "",
    });
    Swal.fire("Agregado", "El juego se agregó correctamente", "success");
  };

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
        setGames(games.filter((_, i) => i !== index));
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
      <h2 className="mb-3">Panel de Administración de Juegos</h2>

      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>Título</th>
            <th>Género</th>
            <th>Año</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr key={index}>
              {editingIndex === index ? (
                <>
                  <td>
                    <Form.Control
                      type="text"
                      value={game.titulo}
                      onChange={(e) => handleChange(e, "titulo", index)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={game.genero}
                      onChange={(e) => handleChange(e, "genero", index)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      value={game.año}
                      onChange={(e) => handleChange(e, "año", index)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      value={game.precio}
                      onChange={(e) => handleChange(e, "precio", index)}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      value={game.descripcion}
                      onChange={(e) => handleChange(e, "descripcion", index)}
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
                  <td>{game.titulo}</td>
                  <td>{game.genero}</td>
                  <td>{game.año}</td>
                  <td>${game.precio}</td>
                  <td>{game.descripcion}</td>
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

      <h4 className="mt-4">Agregar nuevo juego</h4>
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
      </Row>
    </Container>
  );
}

export default GamesTable;
