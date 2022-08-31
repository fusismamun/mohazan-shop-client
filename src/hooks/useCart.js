import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const key in storedCart){
            const addedProduct = products.find(product => product.key === key);
            if(addedProduct){
                const quantity = storedCart[key];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);
    
    return [cart, setCart];
}

export default useCart;