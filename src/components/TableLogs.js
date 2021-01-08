import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td} from "@chakra-ui/react";
import Content from '../components/Content';


export default class TableLogs extends React.Component {
    state = {
        currentSort: "default",
        logs: this.props.logs,
      };
      onSortChange = () => {
        const { currentSort } = this.state;
        let nextSort;
        if (currentSort === "down") nextSort = "up";
        else if (currentSort === "up") nextSort = "default";
        else if (currentSort === "default") nextSort = "down";
        this.setState({
          currentSort: nextSort,
        });
      };
      render() {
        const { currentSort } = this.state;
        const sortTypes = {
          up: {
            class: "sort-up",
            fn: (a, b) => a.time_viewing - b.time_viewing,
          },
          down: {
            class: "sort-down",
            fn: (a, b) => b.time_viewing - a.time_viewing,
          },
          default: {
            class: "sort",
            fn: (a, b) => a,
          },
        };
  return (
    <Content title="Logs page">
    <Table variant="simple" w="100%">
      <Thead>
        <Tr>
          <Th>Article id</Th>
          <Th>User id</Th>
          <Th>Date of clic</Th>
          <Th>Time of viewing
          <button align="center" onClick={this.onSortChange}>
                  ↓
                  <i className={`fas fa-${sortTypes[currentSort].class}`} />
                </button>
          </Th>
          <Th>Buy after click</Th>
        </Tr>
      </Thead>
      <Tbody>
      {this.state.logs
              .sort(sortTypes[currentSort].fn)
              .map((log) => (
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
}