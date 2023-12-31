import React, {createContext, ReactNode, useContext, useState} from 'react';
import ShoppingCart from "./ShoppingCart";
import {useLocalStorage} from "../hooks/useLocalStorage";

interface IShoppingCartProvider {
    children: ReactNode
}

interface ICartItem {
    id: number
    quantity: number
    title: string
    image: string
    price: number
}

interface IShoppingCartContext {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number, quantity: number, title: string, image: string, price: number) => void
    decreaseCartQuantity: (id: number) => void
    deleteFromCart: (id: number) => void
    cartQuantity: number
    cartItems: ICartItem[]
}

const ShoppingCartContext = createContext({} as IShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: IShoppingCartProvider) {
    const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>("shopping-cart", [])
    const [isOpen, setIsOpen] = useState(false)
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number, quantity: number, title: string, image: string, price: number) {
        setCartItems(currItems => {
                if (currItems.find(item => item.id === id) == null) {
                    return [...currItems, {id, title, image, price, quantity: 1}]
                } else {
                    return currItems.map(item => {
                        if (item.id === id) {
                            return {...item, quantity: item.quantity + 1}
                        } else {
                            return item
                        }
                    })
                }

            }
        )

    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
                if (currItems.find(item => item.id === id)?.quantity === 1) {
                    return currItems.filter(item => item.id !== id)
                } else {
                    return currItems.map(item => {
                        if (item.id === id) {
                            return {...item, quantity: item.quantity - 1}
                        } else {
                            return item
                        }
                    })
                }

            }
        )

    }

    function deleteFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return <ShoppingCartContext.Provider
        value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            deleteFromCart,
            openCart,
            closeCart,
            cartItems,
            cartQuantity,
        }}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
}


