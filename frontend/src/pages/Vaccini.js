import { Box, Text, SimpleGrid, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "../api/data";
import { useEffect, useState } from "react";

export default function Vaccini(){
const {idnp} = useParams();

const [vacciniData, setVacciniData] = useState(null);

useEffect(() => {
  const fetchVacciniData = async () => {
    try {
      const response = await data.fetchVacciniReports(idnp);
      console.log("API Response: ", response);
      if (response.status === 200) {
        setVacciniData(response.data);
      }
      else {
        console.error("Vaccini not found!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchVacciniData();
  }, [idnp]);

return(
  <SimpleGrid columns={2} spacing={10} minChildWidth="250px" height="700px">
    <Box>
      <Heading mb={10} size='md' color="#02825D" fontSize="2.5em" > Vaccini</Heading>
      <Accordion allowToggle>
        {vacciniData && vacciniData.length > 0 ?
        vacciniData.map((item, index) => (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontSize= "1.4em"  color="#02825D">
                  {item.vaccinaName} - {item.medicName} - {item.timestamp}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={20}>
              <Text>Denumirea: {item.vaccinaName}</Text>
              <Text>Medicul responsabil: {item.medicName}</Text>
              <Text>Data: {item.timestamp}</Text>
              <Text>Descrierea: {item.description}</Text>
            </AccordionPanel>
          </AccordionItem>
        )) : 
        (
          <h2>
            <Box as="span" flex='1' textAlign='left' fontSize="1.4em" color="#02825D">
              Nu au fost găsite Vaccini
            </Box>
          </h2>
        )}
      </Accordion>
    </Box>
  </SimpleGrid>
)
}