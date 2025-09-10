import { Container, Table, Button, Image } from "react-bootstrap";
import { useFavorites } from "../context/FavoritesContext";
import { FaTrash } from "react-icons/fa";

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <Container className="mt-4 text-light">
      <h2 className="text-center mb-4">⭐ Tus Juegos Favoritos</h2>

      {favorites.length === 0 ? (
        <p>No tienes juegos en favoritos todavía.</p>
      ) : (
        <div className="table-glass">
          <Table striped bordered hover variant="dark" responsive>
            <thead className="text-center">
              <tr>
                <th>Imagen</th>
                <th>Título</th>
                <th>Género</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {favorites.map((juego) => (
                <tr key={juego.id}>
                  <td style={{ width: "100px" }}>
                    <Image
                      src={juego.img}
                      alt={juego.titulo}
                      style={{ maxWidth: "8vw", maxHeight: "10vh", objectFit: "cover" }}
                    />
                  </td>
                  <td>{juego.titulo}</td>
                  <td>{juego.genero}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromFavorites(juego.id)}
                    >
                      <FaTrash /> Quitar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default FavoritesPage;
