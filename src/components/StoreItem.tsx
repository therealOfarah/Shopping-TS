import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrenct"
import { Link } from "react-router-dom"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart()

  const quantity = getItemQuantity(id)

  return (
    <Card className="h-100">
      <Link to={`/item/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Card.Img
          variant="top"
          src={imgUrl}
          height="400px"
          style={{ objectFit: "cover", cursor: "pointer" }}
        />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <Link to={`/item/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <span className="fs-2" style={{ cursor: "pointer" }}>{name}</span>
          </Link>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>

        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div style={{ backgroundColor: "#0275d8", borderRadius: "20px", padding: "1rem" }}>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)} style={{ width: "70px" }}>
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)} style={{ width: "70px" }}>
                  +
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
