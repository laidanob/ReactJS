import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
  const agregarAlCarrito = (item) => {
    setCarrito([...carrito,item])
    console.log(carrito)

  }
  const removerDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id))

  }
  const vaciarCarrito = () => {
    setCarrito([])
  }
  const estaEnCarrito = (item) => {
    return carrito.some((prod) => prod.id == item) 
  }

  return (
    <CartContext.Provider value={{
        carrito,
        setCarrito,
        agregarAlCarrito,
        removerDelCarrito,
        vaciarCarrito,
        estaEnCarrito,
      }}>
        {children}
      </CartContext.Provider>
      
  )

}

