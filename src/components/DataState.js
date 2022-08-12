import React from 'react';
import {
    Text,
    Box,
    Flex,
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
    TableContainer
} from '@chakra-ui/react';


const DataState = ({ projects, headers }) => {
    const theme = useTheme();
    return (
        <Box w='93%'>
            <Box
                w='100%'
                ml={4}
                // h={300}
                borderRadius={20}
                bgColor='#F1FAFE'
                mt='50px'
                p={10}
            >
                <Text color={theme.colors.brand.text_1} fontSize={16} fontWeight={500}>All projects | All gateways</Text>
                <Accordion pt={10} allowToggle>
                    {projects.map((element, i) => (
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
                                        {element?.name}
                                    </Text>
                                    <Box>
                                        {element?.userIds[0] || element?.gatewayId}
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} p={5}>
                                <TableContainer>
                                    <Table variant='striped' colorScheme='whiteAlpha'>
                                        <Thead>
                                            <Tr>
                                                {
                                                    headers?.map((data, idx) => (
                                                        <Th key={idx} textAlign='center'>{data}</Th>

                                                    ))
                                                }

                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr borderRadius={18} key={i} bg={i % 2 == 0 ? '#fff' : ''}>
                                                <Td textAlign='center'>{element?.projectId || element?.gatewayId}</Td>
                                                <Td textAlign='center'>{element?.rule || element?.type}</Td>
                                                <Td textAlign='center'>{element?.structure || element?.description}</Td>
                                                <Td textAlign='center'>{element?.industry || element?.apiKey}</Td>
                                            </Tr>

                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
            <Box
                // height='70px'
                p={12}
                width='100%'
                mt={10}
                ml={4}
                borderRadius={18}
                padding={15}
                bgColor='#F1FAFE'
            >
                <Text>
                    TOTAL: 14,065 USD
                </Text>
            </Box>
            <Text pt={5} ml={4} mb={20} color='#005B96' fontSize={16} fontWeight={700}>Terms &amp Conditions | Privacy policy</Text>
        </Box>
    )
}

export default DataState