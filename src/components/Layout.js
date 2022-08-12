import React from "react";
import {
    Flex,
    Box,
    Text
} from '@chakra-ui/react';
import Header from "./Header";
import Sidebar from "./Sidebar";


const Layout = ({ children }) => {
    return (
        <Box>
            <Header />
            <Flex pt={100}>
                <Sidebar />
                {children}
            </Flex>
        </Box>
    )
}

export default Layout