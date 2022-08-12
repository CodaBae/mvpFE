import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Flex, Text, Box, VStack, HStack, Select, useTheme, Image } from '@chakra-ui/react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import Empty from "../../components/Empty";
import DataState from "../../components/DataState";
import DataState_2 from "../../components/DataState_2";
import { getProjects, getGataways } from "../../services/calls";

const Home = () => {
    const theme = useTheme();
    const [projects, setProjects] = useState([]);
    const [gateways, setGateways] = useState([]);
    const [useData, setUseData] = useState([]);

    const [headers, setHeaders] = useState([]);
    const [type, setType] = useState('')

    const projectsHeaders = ['Project ID', 'Rule', 'Structure', 'Industry']
    const gateWayHeader = ['gatewayId', 'type', 'description', 'apiKey']

    useEffect(() => {
        (async () => {
            try {
                const projects = await getProjects();
                const gateways = await getGataways();
                setGateways(gateways)
                setProjects(projects?.data)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    useEffect(() => {
        if(type){
            if(type == 'all projects'){
                setHeaders(projectsHeaders);
                setUseData(projects)
            } else if(type == 'all gateways'){
                setHeaders(gateWayHeader)
                setUseData(gateways)
            }
        }
    }, [type])

    return (
        <Layout>
            <Flex
                flexDir='column'
                w='100%'
            >
                <Flex
                    align='flex-start'
                    justify='space-between'
                    w='100%'
                    h={70}
                >
                    <VStack

                        align='flex-start'
                        p={15}
                        pt={5}
                    >
                        <Text
                            color={theme.colors.brand.text_1}
                            fontSize={20}
                            fontWeight={800}
                        >Reports</Text>
                        <Text
                            color={theme.colors.brand.text_2}
                            fontSize={16}
                            fontWeight={300}
                        >Easily generate a report of your transactions</Text>
                    </VStack>
                    <HStack
                        alignSelf='flex-end'
                        pr={20}
                    // zIndex={-10}
                    >
                        <Select
                            color='#fff'
                            bgColor={theme.colors.brand.box}
                            icon={<BsFillCaretDownFill />}
                            placeholder='Select project'
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value='all projects'>All Projects</option>
                        </Select>
                        <Select
                            color='#fff'
                            bgColor={theme.colors.brand.box}
                            icon={<BsFillCaretDownFill />}
                            placeholder='Select gateway'
                            onChange={(e) => setType(e.target.value)}

                        >
                            <option value='all gateways'>All Gatways</option>

                        </Select>
                        <Select
                            color='#fff'
                            bgColor={theme.colors.brand.box}
                            icon={<AiFillCalendar />}
                            placeholder='From date'
                        />
                        <Select
                            color='#fff'
                            bgColor={theme.colors.brand.box}
                            icon={<AiFillCalendar />}
                            placeholder='To date'
                        />
                        <Select
                            zIndex={-10}
                            color='#fff'
                            bgColor={theme.colors.brand.text}
                            placeholder='Generate Report'
                        />
                    </HStack>
                </Flex>
                {
                    projects?.length
                        ?
                        <DataState headers={headers} projects={useData} />
                        :
                        <Empty />
                }
                {/* <Empty /> */}
                {/* <DataState /> */}
                {/* <DataState_2 /> */}

            </Flex>
        </Layout>
    )
}

export default Home