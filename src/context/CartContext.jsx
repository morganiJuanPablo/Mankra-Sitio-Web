import { createContext,useState} from "react"

export const CartContext = createContext()

const CartContextComponent = ({children}) => {

  const [cart, setCart]=useState([]);
    



const data={
  cart,
}



  return (
     <CartContext.Provider value={data}>{children}</CartContext.Provider>
  )
}

export default CartContextComponent