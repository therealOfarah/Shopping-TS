import { createContext, ReactNode, useContext, useState } from "react";
import {ShoppingCart} from "../components/ShoppingCart"
type ShoppingCartProviderProps = {
  children: ReactNode
}
type CartItem={
  id:number
  quantity:number
}
type ShoppingCartContext ={
  getItemQuantity: (id:number) => number
  increaseCartQuantity: (id:number) => void
  decreaseCartQuantity: (id:number) => void
  removeQuantity: (id:number) => void
  openCart:()=> void
  closeCart:()=> void
  cartQuantity: number
  cartItems:CartItem[]
}

const ShoppingCartContext = createContext({})

export function useShoppingCart(){
  return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({children}:ShoppingCartProviderProps){
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const cartQuantity = cartItems.reduce((quantity, item)=> item.quantity + quantity, 0)
  const openCart = ()=> setIsOpen(true)
  const closedCart = ()=> setIsOpen(false)
  function getItemQuantity(id:number){
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id:number){
    setCartItems(currItems=>{
      if(currItems.find(item=> item.id == id)== null){
        return [...currItems, {id, quantity:1}]
      }else{
        return currItems.map(item =>{
          if(item.id ==id){
            return{...item, quantity: item.quantity + 1 }
          }else{
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id:number){
    setCartItems(currItems=>{
      if(currItems.find(item=> item.id == id)?.quantity == 1){
        return currItems.filter(item => item.id !== id)
      }else{
        return currItems.map(item =>{
          if(item.id ==id){
            return{...item, quantity: item.quantity - 1 }
          }else{
            return item
          }
        })
      }
  })
} 
  function removeQuantity(id:number){  
  setCartItems(currItems=>{
    return  currItems.filter(item => item.id !== id)
  })
}

  return (
  <ShoppingCartContext.Provider 
  value={{
    getItemQuantity,
    decreaseCartQuantity, 
    increaseCartQuantity, 
    removeQuantity, 
    cartQuantity,
    openCart,
    closedCart 
  }}
  >
    {children}
    <ShoppingCart isOpen={isOpen}/>
  </ShoppingCartContext.Provider>
  )
}  