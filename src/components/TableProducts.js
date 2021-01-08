import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Tag, Avatar } from "@chakra-ui/react";
import Content from "../components/Content";

export default class TableProducts extends React.Component {
  state = {
    currentSort: "default",
    products: this.props.products,
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
        fn: (a, b) => a.price - b.price,
      },
      down: {
        class: "sort-down",
        fn: (a, b) => b.price - a.price,
      },
      default: {
        class: "sort",
        fn: (a, b) => a,
      },
    };
    return (
      <Content title="Products page">
        <Table variant="simple" w="100%">
          <Thead>
            <Tr>
              <Th>Article ID</Th>
              <Th>Brand</Th>
              <Th>Article Type</Th>
              <Th>Article</Th>
              <Th>Price
              <button align="center" onClick={this.onSortChange}>
                  ↓
                  <i className={`fas fa-${sortTypes[currentSort].class}`} />
                </button>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {this.state.products
              .sort(sortTypes[currentSort].fn)
              .map((product) => (
                <Tr>
                  <Td>{product.article_id}</Td>
                  <Td>
                    <Avatar
                      border="1px solid #eee"
                      bg="white"
                      src={product.brand_url}
                      name={product.brand}
                    />
                  </Td>
                  <Td>
                    <Tag>{product.article_type}</Tag>
                  </Td>
                  <Td>{product.article}</Td>
                  <Td>{product.price}€</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Content>
    );
  }
}
