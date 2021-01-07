import React from "react";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex align="center">
      <Box p="2">
        <Link to="/">
          <img
            src="https://assets.website-files.com/5f9193984f3caecc3cb8b680/5f91a8704280755c7b1bdceb_logo.svg"
            loading="lazy"
            alt=""
          />
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mr="4" as="a" exact href="https://github.com/milly-dev" target="_blank">
          Mon Github
        </Button>
      </Box>
    </Flex>
  );
};
export default Header;
