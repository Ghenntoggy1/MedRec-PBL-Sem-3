import React from "react";
import { Box, Text, Grid, GridItem, Button, Center, Flex, Image, Container, Stack } from "@chakra-ui/react";

function StartPage() {
  return (
    <div>
      <Box maxW="box.xl" marginLeft="50">
        <Text fontSize="5xl" fontWeight="extrabold" color="green">
          MedRec: Fișe Medicale Digitalizate
        </Text>
      </Box>
      <Center h="80vh" align='center' marginLeft='200px'>
        <Grid templateColumns="1fr 1fr 1fr" gap={50} justifySelf="center">
          <Flex justify="center" align="center" h="100%">
            <GridItem colSpan={1} textAlign="right" justifyContent="center">
              <Text fontSize="4xl" bgGradient='linear(to-l, #4CBCAC, #05C47C)' bgClip='text' fontWeight='extrabold'>Alegeţi tipul de logare</Text>
            </GridItem>
          </Flex>
          <GridItem colSpan={1}>
            <Center>
              <Button marginBottom="20px" variant='ghost' _hover={{bg : "white"}}>
                <Flex flexDirection="column" h="197px">
                  <Image
                    src="/images/pacient_icon.png"
                  />
                  <Text fontSize="2xl" fontWeight="normal">Pacient</Text>
                </Flex>
              </Button>
              <Button marginBottom="20px" marginLeft='50px' variant='ghost' _hover={{bg : "white"}}>
                <Flex flexDirection="column" h="197px">
                  <Image
                    src="/images/medic_icon.png"
                  />
                  <Text fontSize="2xl" fontWeight="normal">Medic</Text>
                </Flex>
              </Button>
            </Center>
          </GridItem>
        </Grid>
      </Center>
      <Box marginLeft="50px" marginTop='40px'>
        <Text fontSize="" fontWeight="bold" color="green">
          Ministerul Sănătăţii al Republicii Moldova
        </Text>
      </Box>
    </div>
  );
}

export default StartPage;
