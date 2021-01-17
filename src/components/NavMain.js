import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Button } from "@chakra-ui/react";

const NavMain = () => {
  return (
      <Flex direction="column" width="280px" backgroundColor="#44ddc3" align="center" p={8} borderRadius="0px 10px">
        <Button colorScheme="teal" size="md" width="100%" as={NavLink} exact to="/" variant="ghost" m="4px 0">
        Products
        </Button>
        <Button colorScheme="teal" size="md" width="100%" as={NavLink} exact to="/visitors" variant="ghost" m="4px 0">
        Visitors
        </Button>
<Button colorScheme="teal" size="md" width="100%" as={NavLink} exact to="/logs" variant="ghost" m="4px 0">
Logs
</Button>
<Button colorScheme="teal" size="md" width="100%" as={NavLink} exact to="/donne" variant="ghost" m="4px 0">
Donne
</Button>
    </Flex>
  );
};  

export default NavMain;
