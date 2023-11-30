import { Box, Text, SimpleGrid, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, Input } from "@chakra-ui/react";

export default function VacciniDoctor(){
  return(
    <SimpleGrid columns={2} spacing={10} minChildWidth="250px" height="700px">
    <Box>
      <Heading mb={10} size='md' color="#02825D" fontFamily="molengo"fontSize="2.5em" > Vaccini</Heading>
      <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontSize= "1.4em" fontFamily="molengo" color="#02825D">
          Denumirea/Medicul responsabil/Data
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={20}>
     <Text>Denumirea:</Text>
     <Text> Medicul responsabil:</Text>
     <Text> Data:</Text>
     <Text> Descrierea:</Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
            <h2>
              <AccordionButton color="#008000"> 
                <Box as="span" flex='1' textAlign='left' fontSize= "1.4em" fontFamily="molengo" color="#02825D" backgroundColor='#8CCAA6'>
                  Adaugă vaccin
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={20}>
              {/* Form for Additional Information */}
              <form>
              <Text>Denumirea:</Text>
              {/* Input fields for Denumirea */}
              <Input placeholder= "Denumirea..." mb={2} />

              <Text>Medicul responsabil:</Text>
              {/* Input fields for Medicul responsabil */}
              <Input placeholder="Medicul responsabil..." mb={2} />

              <Text>Data:</Text>
              {/* Input fields for Data */}
              <Input placeholder="Data..." mb={2} />

              <Text>Descrierea:</Text>
              {/* Input fields for Descrierea */}
              <Input placeholder="Descrierea..." mb={2} />
                <Button colorScheme="teal" mt="4" bgColor="#02825D" color="white">
        Submit
      </Button>
              </form>
            </AccordionPanel>
          </AccordionItem>
</Accordion>
</Box>
    </SimpleGrid>
  )
}