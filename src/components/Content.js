import React from 'react';
import { Flex, Heading } from "@chakra-ui/react";


export default function Content({title, children}) {
    return (
        <Flex p={8} direction="column" w="100%">
            <Heading marginBottom="30px">
            {title}
            </Heading>
            {children}
        </Flex>
    )
}
