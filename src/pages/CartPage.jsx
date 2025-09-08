import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

export default function CartPage() {
  const { cart, setCart } = useCart();
  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  return (
    <Container className="my-4">
      <h2 className="mb-4">🛒 Carrito de Compras</h2>
      <Row>
        {cart.length > 0 ? (
          cart.map((item) => (
            <Col md={4} key={item.id} className="mb-3">
              <Card>
                {item.url && (
                  <Card.Img
                    variant="top"
                    src={item.url}
                    alt={item.titulo}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{item.titulo}</Card.Title>
                  <Card.Text>
                    <strong>Género:</strong> {item.genero} <br />
                    <strong>Año:</strong> {item.año} <br />
                    <strong>Precio:</strong> ${item.precio.toFixed(2)} <br />
                    <strong>Cantidad:</strong> {item.quantity}
                  </Card.Text>
                  <div className="d-flex gap-2">
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => increment(item.id)}
                    >
                      +
                    </Button>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => decrement(item.id)}
                    >
                      -
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>Tu carrito está vacío 💤</p>
        )}
      </Row>

      {cart.length > 0 && (
        <div className="mt-4">
          <h4>Total: ${total.toFixed(2)}</h4>
          <Button
            variant="outline-success"
            onClick={() => toast.success("Compra realizada con éxito! 🎉") && clearCart()}
          >
            Comprar
          </Button>{" "}
          <Button variant="outline-danger" onClick={clearCart}>
            Vaciar Carrito
          </Button>
        </div>
      )}
    </Container>
  );
}
