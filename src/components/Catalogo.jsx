import gamesDb from "../constants/gamesDb";
import { Container, Card, Button, Carousel } from "react-bootstrap";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { useFavorites } from "../context/FavoritesContext";

const Catalogo = () => {
  const { addToCart } = useCart();
  const { addToFavorites } = useFavorites();
  const categorias = [...new Set(gamesDb.map((juego) => juego.genero))];

  const handleAddToCart = (juego) => {
    addToCart(juego);
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
          (juego) => juego?.genero === categoria && juego?.publicado === true
        );
        const slides = chunkArray(juegosCategoria, 4);

        return (
          <div key={categoria} className="glass-darker text-center  mb-5">
            <h2 className="text-light mb-3">{categoria}</h2>
            <Carousel indicators={false}>
              {slides.map((grupo, idx) => (
                <Carousel.Item style={{ height: "100%" }} key={idx}>
                  <div className="d-flex   justify-content-center gap-3">
                    {grupo.map((juego) => (
                      <Card
                        key={juego.id}
                        bg="black"
                        text="light"
                        style={{ width: "14rem" }}
                        className=" glass rounded-3 shadow-sm"
                      >
                        <Card.Img
                          variant="top"
                          src={juego.img}
                          alt={juego.titulo}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <Card.Body className="d-flex flex-column justify-content-between">
                          <Card.Title className="text-center">
                            {juego.titulo}
                          </Card.Title>
                          <Button
                            variant="primary"
                            className="mt-2"
                            onClick={() => {
                              handleAddToCart(juego);
                              toast.success(
                                `${juego.titulo} añadido al carrito`
                              );
                            }}
                            disabled={!juego.publicado}
                          >
                            <FaShoppingCart className="me-2" />
                            Añadir
                          </Button>
                          {/* Agregar a favoritos */}
                          <Button
                            onClick={() => {
                              addToFavorites(juego);
                              toast.success(
                                `${juego.titulo} añadido a favoritos`
                              );
                            }}
                            variant="outline-warning"
                            className="mt-2"
                          >
                            <FaStar className="me-2" />
                          </Button>
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
