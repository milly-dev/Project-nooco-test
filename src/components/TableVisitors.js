import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import Content from "../components/Content";

export const TableVisitors = (props) => {
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
          {props.visitors.map((visitor) => (
            <Tr>
              <Td>{visitor.visitor_name}</Td>
              <Td>{visitor.first_name}</Td>
              <Td>{visitor.id}</Td>
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
  );
};

export default TableVisitors;
