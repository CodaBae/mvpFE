import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, Image, useTheme, HStack } from '@chakra-ui/react';
import Logo from '../assets/logo.svg';
import Hamburger from '../assets/hamburger.svg';
import { getUser } from '../services/calls';

const Header = () => {
    const theme = useTheme();
    const [user, setUser] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const user = await getUser();
                setUser(user?.data[0])
            } catch (e) {
                console.log(e)
            }
        })()
    }, [])

    return (
        <Box
            pos='fixed'
            width='100%'
        >
            <Flex
                align='center'
                justify='space-between'
                width='100%'
                zIndex={100}
                bgColor='#fff'
                p={5}
                borderBottom={`1px solid ${theme.colors.brand.line}`}
            >
                <Flex
                    gap={10}
                    align='center'
                    justify='center'
                    pl={3}
                >
                    <Image src={Logo} />
                    <Image src={Hamburger} />
                </Flex>
                <HStack
                    gap={3}
                    pr={20}
                >
                    <Flex
                        bgColor={theme.colors.brand.primary}
                        justify='center'
                        w='43px'
                        h='43px'
                        borderRadius={5}
                        align='center'
                    >
                        <Text color='#fff' textTransform='uppercase'>
                            {user?.firstName?.charAt(0)?.concat(user?.lastName?.charAt(0))}
                        </Text>
                    </Flex>
                    <Text
                        color={theme.colors.brand.text}
                        fontSize='16px'
                        fontWeight={700}
                        textTransform='capitalize'
                    >{user?.firstName?.concat(' ', user?.lastName)}</Text>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Header