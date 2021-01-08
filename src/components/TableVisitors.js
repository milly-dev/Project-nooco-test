import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import Content from "../components/Content";

export default class tableVisitors extends React.Component {
  state = {
    currentSort: "default",
    visitors: this.props.visitors,
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
        fn: (a, b) => a.visitor_name.localeCompare(b.visitor_name),
      },
      down: {
        class: "sort-down",
        fn: (a, b) => b.visitor_name.localeCompare(a.visitor_name),
      },
      default: {
        class: "sort",
        fn: (a, b) => a,
      },
    };
    return (
      <Content title="Visitor page">
        <Table variant="simple" w="100%">
          <Thead>
            <Tr>
              <Th>
                Visitor name
                <button align="center" onClick={this.onSortChange}>
                  ↓
                  <i className={`fas fa-${sortTypes[currentSort].class}`} />
                </button>
              </Th>
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
            {this.state.visitors
              .sort(sortTypes[currentSort].fn)
              .map((visitor) => (
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
  }
}
