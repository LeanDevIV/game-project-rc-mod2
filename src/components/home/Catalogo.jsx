import gamesDb from "../../constants/gamesDb";
import { Container, Card, Button, Carousel } from "react-bootstrap";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";
import { useFavorites } from "../../context/FavoritesContext";
import { Link } from "react-router-dom";

const Catalogo = () => {
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();
  const categorias = [...new Set(gamesDb.map((game) => game.genero))];

  const handleAddToCart = (game) => {
    addToCart(game);
  };

  // Divide los juegos en grupos de 4 para cada slide
  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);

  return (
    <Container className=" my-4">
      {categorias.map((categoria) => {
        const juegosCategoria = gamesDb.filter(
          (game) => game?.genero === categoria && game?.publicado === true
        );
        const slides = chunkArray(juegosCategoria, 4);

        return (
          <div key={categoria} className="glass-darker text-center  mb-5">
            <h2 className="text-light mb-3">{categoria}</h2>
            <Carousel indicators={false}>
              {slides.map((grupo, idx) => (
                <Carousel.Item style={{ height: "100%" }} key={idx}>
                  <div className="d-flex justify-content-center gap-3">
                    {grupo.map((game) => (
                      <Card
                        key={game.id}
                        bg="black"
                        text="light"
                        style={{ width: "14rem" }}
                        className=" glass rounded-3 shadow-sm"
                      >
                        <Card.Img
                          variant="top"
                          src={game.img}
                          alt={game.titulo}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <Card.Body className="d-flex flex-column justify-content-between">
                          {/* Titulo de tarjeta */}
                          <div>
                            <Card.Title className="text-center mb-3 fs-5">
                              {game.titulo}
                            </Card.Title>
                          </div>
                          {/* Botones de tarjetas */}
                          <div className="d-flex flex-column gap-2 mt-auto">
                            <Link
                              to={`/game/${game.id}`}
                              className="btn btn-outline-light"
                            >
                              Ver detalle
                            </Link>

                            <Button
                              variant="primary"
                              onClick={() => {
                                handleAddToCart(game);
                                toast.success(
                                  `${game.titulo} añadido al carrito`
                                );
                              }}
                              disabled={!game.publicado}
                            >
                              <FaShoppingCart className="me-2" />
                              Añadir
                            </Button>

                            <Button
                              onClick={() => {
                                addToFavorites(game);
                                toast.success(
                                  `${game.titulo} añadido a favoritos`
                                );
                              }}
                              variant="outline-warning"
                            >
                              <FaStar className="me-2" />
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        );
      })}
    </Container>
  );
};

export default Catalogo;
