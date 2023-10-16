import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Text, SimpleGrid, GridItem, VisuallyHidden, Img, Link as ChakraLink } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { Link as ReactRouterLink } from "react-router-dom";

function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const LoginPage = () => {
    const { userType } = useParams();

    let icon = null;

    if (userType === 'pacient') {
        icon = <Img src='/images/pacient_icon.png' />;
    }
    else if (userType === 'medic') {
        icon = <Img src='/images/medic_icon.png' />;
    }

    const [isHovered, setIsHovered] = useState(false);

    return(
        <div>
            <Box maxW="box.xl" marginLeft="50">
                <Text fontSize="5xl" fontWeight="extrabold" bgClip='text' bgGradient='linear-gradient(to-l, #4CBCAC, #05C676)'>
                MedRec: Fișe Medicale Digitalizate
                </Text>
            </Box>
            <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', marginTop: '150px' }}>
                {icon}
                <SimpleGrid
                    as="form"
                    w={{
                        base: "full",
                        md: 7 / 12,
                    }}
                    columns={{
                        base: 1,
                        lg: 6,
                    }}
                    spacing={3}
                    pt={1}
                    mx="auto"
                    mb={8}
                    >
                    <GridItem as="label" colSpan={{ base: "auto", lg: 4 }}
                    >
                        <VisuallyHidden>INDP</VisuallyHidden>
                        <Input
                        mt={0}
                        size="lg"
                        type="email"
                        placeholder="INDP"
                        required
                        maxLength= '13'
                        />
                    </GridItem>
                    <ChakraLink as={ReactRouterLink} to={`/mainpage/${userType}`} style={{ textDecoration: 'none' }}>
                        <Button
                            as={GridItem}
                            w="full"
                            variant="solid"
                            colSpan={{
                            base: "auto",
                            lg: 2,
                            }}
                            size="lg"
                            type="submit"
                            colorScheme="brand"
                            cursor="pointer"
                            border= '3px solid'
                            borderColor= 'green.300'
                            backgroundImage= 'linear-gradient(to-l, #4CBCAC, #05C676)'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            _hover={{
                                border: '3px solid',
                                borderColor: 'gray',
                                backgroundImage: 'linear-gradient(to-l, #4cbcac, #6dd694)',
                            }}
                            _active={{
                                transform: 'scale(0.95)',
                                borderColor: 'gray',
                            }}
                        >
                            <Text>Logare ca {Capitalize(userType)}</Text>
                        </Button>
                    </ ChakraLink>
                </SimpleGrid>
            </div>
        </div>
    )
};

export default LoginPage;
