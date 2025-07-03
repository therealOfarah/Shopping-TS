import { useParams, Link } from "react-router-dom"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrenct"
import { Button, Container, Row, Col } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function ItemDetails() {
  const { id } = useParams()
  const item = storeItems.find((i) => i.id === Number(id))
  const { increaseCartQuantity, getItemQuantity, decreaseCartQuantity } = useShoppingCart()

  if (!item) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Item Not Found</h2>
  }

  const quantity = getItemQuantity(item.id)
  const otherItems = storeItems.filter((i) => i.id !== item.id)

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src={item.imgUrl}
            alt={item.name}
            style={{ width: "100%", maxHeight: "450px", objectFit: "cover", borderRadius: "8px" }}
          />
        </Col>
        <Col md={6}>
          <h2>{item.name}</h2>
          <h4 className="text-muted">{formatCurrency(item.price)}</h4>
          <p>This is a detailed view of the product. You can customize this section with description, rating, etc.</p>

          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(item.id)}>
              + Add To Cart
            </Button>
          ) : (
            <div style={{ backgroundColor: "#0275d8", borderRadius: "20px", padding: "1rem", marginTop: "1rem" }}>
              <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                <Button onClick={() => decreaseCartQuantity(item.id)} style={{ width: "70px" }}>-</Button>
                <span className="fs-3 text-white">{quantity}</span>
                <Button onClick={() => increaseCartQuantity(item.id)} style={{ width: "70px" }}>+</Button>
              </div>
            </div>
          )}
        </Col>
      </Row>

      {/* Other Items Section */}
      <h3 className="mt-5">You may also like</h3>
      <Row className="mt-3">
        {otherItems.map((other) => (
          <Col key={other.id} md={4} className="mb-4">
            <Link to={`/item/${other.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card h-100">
                <img src={other.imgUrl} alt={other.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{other.name}</h5>
                  <p className="card-text text-muted">{formatCurrency(other.price)}</p>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
