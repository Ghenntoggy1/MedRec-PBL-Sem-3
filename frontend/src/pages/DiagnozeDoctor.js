import { Box, Text, SimpleGrid, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, Input } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "../api/data";
import { useEffect, useState } from "react";

export default function Diagnoze(){
  const { pat_idnp } = useParams();

  const [diagnozaData, setDiagnozaData] = useState(null);

  useEffect(() => {
    const fetchDiagnozaData = async () => {
      try {
        const response = await data.fetchDiagnozaReports(pat_idnp.split("=")[1]);
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
  }, [pat_idnp]);

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
                  <Text> Operaţie Prescrisă: {item.prescribedOperation === null ? ("Nu este prescrisă") : (item.prescribedOperation)}</Text>
                  <Text> Medicament Prescris: {Object.keys(item.prescribedMedicine).length === 0 ? ("Nu este prescris") : (
                    <Box>
                      {Object.entries(item.prescribedMedicine).map(([medicineName, medicineDetails], medIndex) => (
                        <Box key={medIndex} ml={4}>
                          <Text> - {medicineName}:</Text>
                          {Object.entries(medicineDetails).map(([property, value], propIndex) => (
                            <Text key={propIndex} ml={6}>
                              {property === 'timesPerDay' ? "Administrare (Per zi)" : property === 'dosage' ? "Dozaj" : property}: {value === null ? (" Nu este specificat") : ((' ') + value)}
                            </Text>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  )}</Text>
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
  <AccordionItem>
            <h2>
              <AccordionButton color="#008000"> 
                <Box as="span" flex='1' textAlign='left' fontSize= "1.4em" color="#02825D">
                  Adaugă Diagnoză
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