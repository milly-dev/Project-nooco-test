import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";
import data from "../data.json";
import Content from '../components/Content';


export const LogsPage = () => {
    return (
        <Content title="log page">
        <Table variant="simple" w="100%">
<Thead>
<Tr>
  <Th>Article id</Th>
  <Th>User id</Th>
  <Th>Date of clic</Th>
  <Th>Time of viewing</Th>
  <Th>Buy after click</Th>
</Tr>
</Thead>
<Tbody>
{data.logs.map(log => (
<Tr>
  <Td>{log.article_id}</Td>
  <Td>{log.user_id}</Td>
  <Td>{log.date_of_clic}</Td>
  <Td isNumeric>{log.time_viewing}</Td>
  <Td>{log.buy_after_click}</Td>
</Tr>
))}
</Tbody>
</Table>
    </Content>
    )
}
export default LogsPage;