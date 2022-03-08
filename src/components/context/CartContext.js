import { createContext, useState,useContext } from "react";

export const CartContext = createContext()

export const useCartContext = () =>{ const context = useContext(CartContext)
  return context}

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
  const agregarAlCarrito = (item) => {
    setCarrito([...carrito,item])

  }
  const removerDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id))

  }
  const vaciarCarrito = () => {
    setCarrito([])
  }
  const estaEnCarrito = (item) => {
    return carrito.some((prod) => prod.id === item) 
  }

  const totalCant = () => { 
    return carrito.reduce((suma, prod) => suma + prod.cuentaCantidad, 0)
}
const totalCompra = () => { 
    return carrito.reduce((suma, prod) => suma + prod.total, 0)
}

  return (
    <CartContext.Provider value={{
        carrito,
        setCarrito,
        agregarAlCarrito,
        removerDelCarrito,
        vaciarCarrito,
        estaEnCarrito,
        totalCant,
        totalCompra
      }}>
        {children}
      </CartContext.Provider>
      
  )

}

