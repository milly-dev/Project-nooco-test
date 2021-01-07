import React from 'react';
import Content from '../components/Content';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";
import data from "../data.json";

export const VisitorPage = () => {
    return (
        <Content title="Visitor page">
        <Table variant="simple" w="100%">
<Thead>
<Tr>
  <Th>Visitor name</Th>
  <Th>First name</Th>
  <Th>Id</Th>
  <Th>Email</Th>
  <Th>Last log</Th>
  <Th>Number of the log this month</Th>
  <Th>Number of articles view</Th>
  <Th>Already booked</Th>
</Tr>
</Thead>
<Tbody>
{data.visitors.map(visitor => (
<Tr>
  <Td>{visitor.visitor_name}</Td>
  <Td>{visitor.first_name}</Td>
  <Td isNumeric>{visitor.id}</Td>
  <Td>{visitor.email}</Td>
  <Td>{visitor.last_log}</Td>
  <Td>{visitor.number_of_log_this_month}</Td>
  <Td>{visitor.number_of_articles_view}</Td>
  <Td>{visitor.already_booked}</Td>
</Tr>
))}
</Tbody>
</Table>
    </Content>
    )
}
export default VisitorPage;