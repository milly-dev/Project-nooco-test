import "./App.css";
import React from "react";
import NavMain from "./components/NavMain";
import LogsPage from "./views/LogsPage";
import ProductsPage from "./views/ProductsPage";
import VisitorPage from "./views/VisitorPage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex direction="column" height="100%">
      <Header />
      <Flex grow="1" schrink="1" basic="auto">
        <NavMain />
        <Switch>
          <Route exact path="/Project-nooco-test" component={ProductsPage} />
          <Route exact path="/visitors" component={VisitorPage} />
          <Route exact path="/logs" component={LogsPage} />
        </Switch>
      </Flex>
    </Flex>
  );
}

export default App;
