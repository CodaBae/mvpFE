import React from 'react';
import {
    Text, Flex, Box,
    useTheme,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    HStack
} from '@chakra-ui/react';
import Chart from './Chart';


const DataState_2 = () => {
    const theme = useTheme();
    return (
        <Flex
            width='100%'
            align='flex-start'
            overflow='scroll'
            justify='space-between'
            height='100vh'
        >
            <Box
                flexBasis='55%'
                ml={4}
                borderRadius={20}
                bgColor='#F1FAFE'
                mt='50px'
                p={10}
            >
                <Text color={theme.colors.brand.text_1} fontSize={16} fontWeight={500}>All projects | All gateways</Text>
                <Accordion pt={10} allowToggle>
                    {[1, 2, 3, 4].map((_, i) => (
                        <AccordionItem
                            mt={8}
                            key={i}
                            outline='none'
                            border='none'
                        >
                            <h2>
                                <AccordionButton
                                    fontSize={16}
                                    h='70px'
                                    fontWeight={600}
                                    color='#011F4B'
                                    borderRadius={18}
                                    bgColor='#fff'

                                >
                                    <Text flex='1' textAlign='left'>
                                        Project {_}
                                    </Text>
                                    <Box>
                                        TOTAL: 10,065 USD
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} p={5}>
                                <TableContainer>
                                    <Table variant='striped' colorScheme='whiteAlpha'>
                                        <Thead>
                                            <Tr>
                                                <Th textAlign='center'>Date</Th>
                                                <Th textAlign='center'>Transaction ID</Th>
                                                <Th textAlign='center'>Amount</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {[1, 2, 3].map((_, i) => (
                                                <Tr borderRadius={18} key={i} bg={i % 2 == 0 ? '#fff' : ''}>
                                                    <Td textAlign='center'>01/21/2021</Td>
                                                    <Td textAlign='center'>a732b</Td>
                                                    <Td textAlign='center'>3964 USD</Td>
                                                </Tr>
                                            ))}

                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
            <Flex
                align='center'
                justify='space-between'
                height='65vh'
                flexDir='column'
                flexBasis='47%'
                mt='50px'
            >
                <Flex
                    bgColor='#F1FAFE'
                    align='center'
                    justify='space-around'
                    borderRadius='10px'
                    h='53px'
                    w='90%'
                >
                    {
                        [
                            {
                                name: 'Project 1',
                                color: '#A259FF'
                            },
                            {
                                name: 'Project 2',
                                color: '#F24E1E'
                            },
                            {
                                name: 'Project 3',
                                color: '#FFC107'
                            },
                            {
                                name: 'Project 4',
                                color: '#6497B1'
                            },
                        ].map((element, idx) => (
                            <HStack key={idx}>
                                <Box
                                    borderRadius='5px'
                                    w='15px'
                                    h='15px'
                                    bgColor={element.color}
                                />
                                <Text>{element.name}</Text>
                            </HStack>
                        ))
                    }
                </Flex>
                <Box h={300} w={300}>
                    <Chart />
                </Box>
                <Box
                    bgColor='#F1FAFE'
                    borderRadius='10px'
                    p={5}
                    w='90%'
                >
                    <Text
                        fontWeight={600}
                        fontSize={16}
                        color='#011F4B'
                    >
                        GATEWAY TOTAL | 14,065 USD
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default DataState_2