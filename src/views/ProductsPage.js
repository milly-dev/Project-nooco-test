import React from 'react';
import Content from '../components/Content';
import { Table, Thead, Tbody, Tr, Th, Td, Tag, Avatar} from "@chakra-ui/react";
import data from '../data';


export const Products = () => {
    return (
        <Content title="Products page">
            <Table variant="simple" w="100%">
  <Thead>
    <Tr>
      <Th>Article ID</Th>
      <Th>Brand</Th>
      <Th>Article Type</Th>
      <Th>Article</Th>
      <Th isNumeric>Price</Th>
    </Tr>
  </Thead>
  <Tbody>
    {data.products.map(product => (
    <Tr>
      <Td>{product.article_id}</Td>
      <Td><Avatar border="1px solid #eee" bg="white" src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1410845468/dsjoo3sf1c6xxsufklkh.png" name={product.brand} /></Td>
      <Td><Tag>{product.article_type}</Tag></Td>
      <Td>{product.article}</Td>
      <Td isNumeric>{product.price}€</Td>
    </Tr>
    ))}
  </Tbody>
</Table>
        </Content>
        
    )
}
export default Products;