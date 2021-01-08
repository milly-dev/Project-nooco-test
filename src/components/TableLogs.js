import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td} from "@chakra-ui/react";
import Content from '../components/Content';


export const TableLogs = (props) => {
  return (
    <Content title="Logs page">
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
        {props.logs.map((log) => (
          <Tr>
            <Td>{log.article_id}</Td>
            <Td>{log.user_id}</Td>
            <Td>{log.date_of_clic}</Td>
            <Td>{log.time_viewing} secondes</Td>
            <Td>{log.buy_after_click}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    </Content>
  );
};

export default TableLogs;