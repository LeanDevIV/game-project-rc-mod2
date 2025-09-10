import { useState } from "react";
import gamesDb from "../../constants/gamesDb";
import { Table, Button, Form, Container } from "react-bootstrap";
import useStorage from "../../utils/LocalStorage";
import Swal from "sweetalert2";
import AddGameModal from "../../mod/GamesModal";

function GamesTable() {
  const [games, setGames] = useStorage("gamesDb", gamesDb);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // 👇 función que recibe el juego nuevo desde el modal
  const handleAddGame = (newGame) => {
    if (!newGame.titulo) {
      Swal.fire("Error", "El título es obligatorio", "error");
      return;
    }
    setGames([...games, { ...newGame, precio: parseFloat(newGame.precio) }]);
    Swal.fire("Agregado", "El juego se agregó correctamente", "success");
  };

  // Manejo de cambios en edición
  const handleChange = (e, field, index) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const updated = [...games];
    updated[index][field] = value;
    setGames(updated);
  };

  // Borrar
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
      const game = games[index];
      if (
        !game.id.toString().trim() ||
        !game.titulo.trim() ||
        !game.genero.trim() ||
        !game.año ||
        game.precio === "" ||
        !game.descripcion.trim()
      ) {
        Swal.fire({
          icon: "error",
          title: "Campos incompletos",
          text: "Por favor, completá todos los campos antes de guardar.",
        });
        return;
      }
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
            <th>ID</th>
            <th>Título</th>
            <th>Género</th>
            <th>Año</th>
            <th>Precio</th>
            <th>Publicado</th>
            <th>Destacado</th>
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
                      type="number"
                      value={game.id}
                      onChange={(e) => handleChange(e, "id", index)}
                    />
                  </td>
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
                    <Form.Check
                      type="checkbox"
                      checked={game.publicado}
                      onChange={(e) => handleChange(e, "publicado", index)}
                      label="Publicado"
                    />
                  </td>{" "}
                  <td>
                    <Form.Check
                      type="checkbox"
                      checked={game.destacado}
                      onChange={(e) => handleChange(e, "destacado", index)}
                      label="Destacado"
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
                  <td>{game.id}</td>
                  <td>{game.titulo}</td>
                  <td>{game.genero}</td>
                  <td>{game.año}</td>
                  <td>${game.precio}</td>
                  <td className="text-center">
                    <Form.Check
                      type="checkbox"
                      checked={game.publicado}
                      disabled
                    />
                  </td><td className="text-center">
                    <Form.Check
                      type="checkbox"
                      checked={game.destacado}
                      disabled
                    />
                  </td>
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

      <Button variant="success" onClick={() => setShowModal(true)}>
        Nuevo Juego
      </Button>

      <AddGameModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onAdd={handleAddGame}
      />
    </Container>
  );
}

export default GamesTable;
