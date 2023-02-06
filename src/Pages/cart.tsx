import { CartItem } from "../components/CartItem"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrenct"
import storeItmes from "../data/items.json"
import { Offcanvas, Stack } from "react-bootstrap";
import "../styles/cart.css"
export function Cart(){
  const {closeCart, cartItems} = useShoppingCart()
  return(
    // <Stack gap={3}>
    //   <Stack/>
    <Stack gap={5}>
      <div className="cartItems" style={{marginTop:"2vh"}}>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item}/>))}
          <div className="ms-auto fw-bold fs-5" style={{marginTop:"2vh"}}>Total {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItmes.find(i => i.id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity
            }, 0)
            )}</div>
      </div>
    </Stack>
  )
}