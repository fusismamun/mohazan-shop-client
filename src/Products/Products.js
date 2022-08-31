import React from 'react';
import InsideNav from '../Shared/InsideNav';
import Dashboard from '../SideCatagoris/Dashboard';
import Iteams from './Iteams';

const Products = () => {
    return (
        <div>
            <InsideNav></InsideNav>
            <Iteams></Iteams>
            <Dashboard></Dashboard>
        </div>
    );
};

export default Products;