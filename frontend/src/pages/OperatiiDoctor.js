import { Box, Text, SimpleGrid, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, Input } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "../api/data";
import { useEffect, useState } from "react";

export default function Operatii(){
  const { pat_idnp } = useParams();

  const [operatieData, setOperatieData] = useState(null);

  useEffect(() => {
    const fetchOperatieData = async () => {
      try {
        const response = await data.fetchOperatieReports(pat_idnp.split("=")[1]);
        console.log('API Response:', response);
        if (response.status === 200) {
          setOperatieData(response.data);
        } else {
          console.error("Patient Operations not found!");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchOperatieData();
  }, [pat_idnp]);


  return(
    <SimpleGrid columns={2} spacing={10} minChildWidth="250px" height="700px">
    <Box>
      <Heading mb={10} size='md' color="#02825D" fontSize="2.5em">Operații</Heading>
      <Accordion allowToggle>
        {operatieData && operatieData.length > 0 ?
        operatieData.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontSize= "1.4em"  color="#02825D">
                  {item.operatieName} - {item.medicName} - {item.timestamp}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={20}>
            <Text>Denumirea: {item.operatieName}</Text>
            <Text>Medicul responsabil: {item.medicName}</Text>
            <Text>Data: {item.timestamp}</Text>
            <Text>Descrierea: {item.description}</Text>
            <Text>Tip Anestezie: {item.tipAnestezie}</Text>
            <Text>Descriere PostOperatorie: {item.descrierePostOperatorie}</Text>
            <Text>Complicaţii: {item.complicatii}</Text>
            </AccordionPanel>
          </AccordionItem>
        )) : 
        (<h2>
          <Box as="span" flex='1' textAlign='left' fontSize="1.4em" color="#02825D">
            Nu au fost găsite Operaţii
          </Box>
        </h2>)}
        <AccordionItem>
          <h2>
            <AccordionButton color="#008000"> 
              <Box as="span" flex='1' textAlign='left' fontSize= "1.4em" color="#02825D">
                Adaugă Operație
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