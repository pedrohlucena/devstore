'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  id: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: string) => void
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: string) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.id === productId)

      if (productInCart) {
        return state.map((item) => {
          if (item.id === productId)
            return {
              ...item,
              quantity: item.quantity + 1,
            }

          return item
        })
      } else {
        const newCart = [...state, { id: productId, quantity: 1 }]
        return newCart
      }
    })
  }

  const context = {
    items: cartItems,
    addToCart,
  }

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
