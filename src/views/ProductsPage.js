import React from 'react';
import TableProducts from '../components/TableProducts';
import data from '../data';


export const Products = () => {
    return (
      <TableProducts products={data.products}/>  
    )
}
export default Products;