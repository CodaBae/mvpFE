import React from 'react';
import { Flex, Text, Box, Image , VStack} from '@chakra-ui/react';
import { Icons } from './navigation';


const Sidebar = () => {
    return (
        <VStack gap={5} align='flex-start' p={7}>
            {
                Icons.map((icon, idx) => (
                    <Box key={idx}

                    >
                        <Image
                            src={icon}
                        />
                    </Box>
                ))
            }
        </VStack>
    )
}

export default Sidebar