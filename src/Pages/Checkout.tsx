// Pages/Checkout.tsx
import { Form, Button, Card } from "react-bootstrap"

export function Checkout() {
  return (
    <Card className="p-4 mx-auto" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">Checkout</h2>
      <Form>
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="John Doe" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="email@example.com" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control type="text" placeholder="123 Main St" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="zip">
          <Form.Label>ZIP / Postal Code</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cardInfo">
          <Form.Label>Card Information</Form.Label>
          <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Place Order
        </Button>
      </Form>
    </Card>
  )
}
