import { Card } from "react-bootstrap"

type StoreItem = {
  id:number
  name: string
  price: number
  imgUrl: string
}
export function StoreItem({id, name, price ,imgUrl}: StoreItem){
  return (
    <Card>
      <Card.Img variant="top" src={imgUrl} height='200px' style={{objectFit:"cover"}}></Card.Img>
      <Card.Body className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="fs-2">{name}</span>
        <span className="ms-2 texted-muted">{price}</span>
      </Card.Body>
    </Card>
  )
}