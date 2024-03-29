import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Text, SimpleGrid, GridItem, VisuallyHidden, Img, Link as ChakraLink } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { data } from '../api/data';
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";

function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const LoginPage = () => {
    const { userType } = useParams();
    const [idnp, setIdnp] = useState('');
    const [response, setResponse] = useState(null);
    const navigate = useNavigate();
    const [status, setStatus] = useState('');

    let icon = null;

    if (userType === 'pacient') {
        icon = <Img src='/images/pacient_icon.png' />;
    }
    else if (userType === 'medic') {
        icon = <Img src='/images/medic_icon.png' />;
    }

    const [isHovered, setIsHovered] = useState(false);

    const handleIdnpChange = (event) => {
        setIdnp(event.target.value);
    };

    const handleLetters = event => {
        const result = event.target.value.replace(/\D/g, '');
        setStatus('');
        setValue(result);
      };

    const [value, setValue] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (idnp.length === 13) {
            try {
                let apiResponse;
    
                if (userType === 'pacient') {
                    apiResponse = await data.CheckPacientId(idnp);
                } else if (userType === 'medic') {
                    apiResponse = await data.CheckMedicId(idnp);
                }
                
                setResponse(apiResponse);
                
                if (userType === 'pacient') {
                    if (apiResponse.status === 200) {
                        navigate(`/pacient/${idnp}`);
                    }
                } else if (userType === 'medic') {
                    if (apiResponse.status === 200) {
                        navigate(`/medic/${idnp}`);
                    }
                }
    
            } catch (error) {
                setStatus('invalid');
                console.error(error);
            }
        }
        else {
            setStatus('notEnough');
        }
    };

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
                        type="search"
                        placeholder="INDP"
                        required
                        maxLength= '13'
                        onChange={handleIdnpChange}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                handleFormSubmit(event);
                            }
                        }}
                        value={value}
                        onInput={handleLetters}
                        isInvalid={idnp.length > 0 && idnp.length < 13}
                        errorBorderColor="#ff0000"
                        />
                        {value.length > 0 && value.length < 13 ? (
                            <Text mt={2} color="red">
                                IDNP trebuie să fie exact 13 numere.
                            </Text>
                        ) : status === 'invalid' ? (
                            <Text mt={2} color="red">
                                IDNP greșit.
                            </Text>
                        ) : status === 'notEnough' ? (
                            <Text mt={2} color="red">
                                IDNP trebuie să fie exact 13 numere.
                            </Text>
                        ) : status === 'valid' && (
                            <Text mt={2} color="red">
                                IDNP valid.
                            </Text>
                        )}
                    </GridItem>
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
                            onClick={handleFormSubmit}
                        >
                            <Text>Logare ca {Capitalize(userType)}</Text>
                        </Button>
                </SimpleGrid>
            </div>
        </div>
    )
};

export default LoginPage;
