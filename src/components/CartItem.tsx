import { Stack, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrenct"
import "../main.css"
type CartItemsProps ={
  id: number
  quantity: number
}
export function CartItem({id, quantity}: CartItemsProps){
  const {removeQuantity} = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if(item == null) return null
  return( 
  <>
  <Stack direction="horizontal" className="d-flex align-items-center" gap={2}>
    <img src={item.imgUrl} style={{width:"125px", height:'75px', objectFit:"cover"}} />
  <div className="me-auto">
    <div>
      {item.name}{quantity >1 && <span 
      className="text-muted" style={{fontSize:'.65rem'}}>{quantity}X</span>}
    </div>
    <div className="text-muted"style={{fontSize: ".75rem"}}>{formatCurrency(item.price)}</div>
  </div>
    <Button variant="outline-danger" size="sm" onClick={()=>removeQuantity(item.id)}>X</Button>
  </Stack>
  </>
  )
}  