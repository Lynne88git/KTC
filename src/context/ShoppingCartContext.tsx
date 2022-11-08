import { createContext, useContext, ReactNode, useState } from 'react'
import { ShoppingCart } from '../components/shopping-cart/ShoppingCart'

export interface ShoppingCartProviderProps {
  children: ReactNode
}

export interface CartItem {
  id: number
  quantity: number
}

export interface ShoppingCartContent {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContent)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

//Implement provider to give values & render out shopping cart when clicking on top right cart button

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  //Adding functions for ShoppingCartContent

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  //If item doesn't exist in cart we need to add it. If it does exist we need to increment it by 1.

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  //Checking to see if item quantity is equal to 1, or any number, then remove it.

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity == 1) {
        return currItems.filter((item) => item.id !== id)
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  //Remove from cart filtering out items where item.id is not equal to current item.id

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
