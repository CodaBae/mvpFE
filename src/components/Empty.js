import React from "react";
import { Flex, Text, Box, Image, useTheme } from "@chakra-ui/react";
import EICon from '../assets/img.svg';


const Empty = () => {
    const theme = useTheme();
    return (
        <Flex
            height='60vh'
            width='100%'
            align='center'
            justify='center'
            flexDir='column'
        >
            <Text
                fontWeight={800}
                fontSize={23}
                pt={20}
                color={theme.colors.brand.text_1}
            >No reports</Text>
            <Text
                fontWeight={400}
                textAlign='center'
                fontSize={16}
                width={500}
            >
                Currently you have no data for the reports to be generated.
                Once you start generating traffic through the Balance application
                the reports will be shown.
            </Text>
            <Image
                pt={30}
                src={EICon}
            />
        </Flex>
    )
}

export default Empty