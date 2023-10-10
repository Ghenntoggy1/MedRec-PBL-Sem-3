import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Text, Grid, GridItem, Button, Center, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";

function StartPage() {
  const [isPacientHovered, setIsPacientHovered] = useState(false);
  const [isMedicHovered, setIsMedicHovered] = useState(false);

  return (
    <div>
      <Box maxW="box.xl" marginLeft="50">
        <Text fontSize="5xl" fontWeight="extrabold" bgClip='text' bgGradient='linear-gradient(to-l, #4CBCAC, #05C676)'>
          MedRec: Fișe Medicale Digitalizate
        </Text>
      </Box>
      <Center h="80vh" align='center' marginLeft='200px'>
        <Grid templateColumns="1fr 1fr 1fr" gap={50} justifySelf="center">
          <Flex justify="center" align="center" h="100%">
            <GridItem colSpan={1} textAlign="right" justifyContent="center">
              <Text fontSize="4xl" bgGradient='linear(to-l, #4CBCAC, #05C676)' bgClip='text' fontWeight='extrabold'>Alegeţi tipul de logare</Text>
            </GridItem>
          </Flex>
          <GridItem colSpan={1}>
            <Center>
              <Button 
              marginBottom="20px" 
              variant='ghost'
              height='210px'
              border="3px solid transparent"
              onMouseEnter={() => setIsPacientHovered(true)}
              onMouseLeave={() => setIsPacientHovered(false)}
              _hover={{
                border: '3px solid',
                borderColor: 'linear(to-l, #4CBCAC, #05C676)',
                backgroundImage: 'linear-gradient(to-l, #4CBCAC, #05C676)',
              }}
              _active={{
                transform: 'scale(0.95)',
                borderColor: 'linear-gradient(to-l, #4CBCAC, #05C676)',
              }}>
                <ChakraLink as={ReactRouterLink} to='/login'>
                  <Flex flexDirection="column" h="197px">
                    <Image
                      src={isPacientHovered ? "/images/pacient_icon_white.png" : "/images/pacient_icon.png"}
                    />
                    <Text fontSize="2xl" fontWeight="bold" bgClip='text' bgGradient={isPacientHovered ? 'linear(to-l, #FFFFFF, #FFFFFF)' : 'linear(to-l, #4CBCAC, #05C47C)'} >Pacient</Text>
                  </Flex>
                </ChakraLink>
              </Button>
              <Button 
              marginLeft='50px'
              marginBottom="20px" 
              variant='ghost'
              height='210px'
              border="3px solid transparent"
              onMouseEnter={() => setIsMedicHovered(true)}
              onMouseLeave={() => setIsMedicHovered(false)}
              _hover={{
                border: '3px solid',
                borderColor: 'linear(to-l, #4CBCAC, #05C676)',
                backgroundImage: 'linear-gradient(to-l, #4CBCAC, #05C676)',
              }}
              _active={{
                transform: 'scale(0.95)',
                borderColor: 'linear-gradient(to-l, #4CBCAC, #05C676)',
              }}
              >
                <ChakraLink as={ReactRouterLink} to='/login'>
                  <Flex flexDirection="column" h="197px">
                    <Image
                      src={isMedicHovered ? "/images/medic_icon_white.png" : "/images/medic_icon.png"}
                    />
                    <Text fontSize="2xl" fontWeight="bold" bgGradient={isMedicHovered ? 'linear(to-l, #FFFFFF, #FFFFFF)' : 'linear(to-l, #4CBCAC, #05C676)'} bgClip='text'>Medic</Text>
                  </Flex>
                </ChakraLink>
              </Button>
            </Center>
          </GridItem>
        </Grid>
      </Center>
      <Box marginLeft="50px" marginTop='40px'>
        <Text fontSize="" fontWeight="bold" color="#05C676">
          <ChakraLink href="https://ms.gov.md/" isExternal>
            Ministerul Sănătăţii al Republicii Moldova
          </ChakraLink>
        </Text>
      </Box>
    </div>
  );
}

export default StartPage;
