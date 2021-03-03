import React, { useState } from 'react';
import { set } from 'react-native-reanimated';

export const CartContext = React.createContext();
export const CartProvider = (props) => {
    const [products, setProducts] = useState([]);
    const addToCart = (x) => {
        let a = products;
        let check = false;
        for (let i =0; i < products.length; i++) {
            if (products[i]._id === x._id) {
                let temp = products[i];
                a=[...a.slice(0, i), {...x, quantity: products[i].quantity + 1}, ...a.slice(i+1)];
                check = true;
            }
        }
        if (!check) {
            a = [...a, {...x, quantity: 1}];
        }
        setProducts(a);
    }
    const increase = (x) => {
        console.log('fuck');
        let a = products;
        let i = a.indexOf(x);
        a = [...a.slice(0, i), {...x, quantity: x.quantity + 1}, ...a.slice(i+1)];
        console.log(a);
        setProducts(a);
    } 
    const decrease = (x) => {
        console.log('fuck')
        let a = products;
        let i = a.indexOf(x);
        if (x.quantity === 1) a = [...a.slice(0, i), ...a.slice(i+1)];
        else a = [...a.slice(0, i), {...x, quantity: x.quantity - 1}, ...a.slice(i+1)];
        setProducts(a);
        console.log(a);
    }
    const delProduct = (x) => {
        let a = products;
        let i = a.indexOf(x);
        setProducts([...a.slice(0, i), ...a.slice(i+1)]);
    } 
    return(
        <CartContext.Provider
        value={{
            products,
            addToCart,
            increase,
            decrease,
            delProduct
        }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

