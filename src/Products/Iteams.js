import React, { useEffect, useState } from 'react';
import Dashboard from '../SideCatagoris/Dashboard';
import Item from './Item';
import '../Home/Nav.css';

const Iteams = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className="">
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-5 navigation-margin-top'>
                {
                    products.map(product => <Item
                        key={product.key}
                        product={product}
                    >
                    </Item>)
                }
            </div>
        </div>
    );
};

export default Iteams;