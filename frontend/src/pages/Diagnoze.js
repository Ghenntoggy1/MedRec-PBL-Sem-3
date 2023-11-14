import { Box, Text, SimpleGrid, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "../api/data";
import { useEffect, useState } from "react";

export default function Diagnoze(){
  const { idnp } = useParams();

  const [diagnozaData, setDiagnozaData] = useState(null);

  useEffect(() => {
    const fetchDiagnozaData = async () => {
      try {
        const response = await data.fetchDiagnozaReports(idnp);
        console.log('API Response:', response);
        if (response.status === 200) {
          setDiagnozaData(response.data);
        } else {
          console.error("Patient Diagnosis not found!");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDiagnozaData();
  }, [idnp]);

  return(
    <SimpleGrid columns={2} spacing={10} minChildWidth="250px" height="700px">
      <Box>
        <Heading mb={10} size='md' color="#02825D" fontSize="2.5em" > Diagnoze</Heading>
        <Accordion allowToggle>
          {diagnozaData && diagnozaData.length > 0 ? 
            diagnozaData.map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontSize= "1.4em"  color="#02825D">
                      {item.diagnozaName} - {item.medicName} - {item.timestamp}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={20}>
                  <Text> Diagnoza: {item.diagnozaName}</Text>
                  <Text> Medicul responsabil: {item.medicName}</Text>
                  <Text> Data: {item.timestamp}</Text>
                  <Text> Descriere: {item.description}</Text>
                  <Text> Operaţie Prescrisă: {item.prescribedOperation === null ? "Nu este prescrisă" : item.prescribedOperation}</Text>
                  <Text> Medicament Prescris: {item.prescribedMedicine === null ? "Nu este prescris" : item.prescribedMedicine}</Text>
                  <Text> Concluzia: {item.conclusion}</Text>
                </AccordionPanel>
              </AccordionItem>
            )) : 
            (
              <h2>
                <Box as="span" flex='1' textAlign='left' fontSize="1.4em" color="#02825D">
                  Nu au fost găsite Diagnoze
                </Box>
              </h2>
            )}
        </Accordion>
      </Box>
    </SimpleGrid>
  )
}