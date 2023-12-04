import { Box, Text, SimpleGrid, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Input, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "../api/data";
import { useEffect, useState } from "react";

export default function Prescriptii(){
  const { pat_idnp } = useParams();

  const [prescriptionData, setPrescriptionData] = useState(null);

  useEffect(() => {
    const fetchPrescriptionData = async () => {
      try {
        const response = await data.fetchPrescriptionReports(pat_idnp.split("=")[1]);
        console.log('API Response:', response);
        if (response.status === 200) {
          setPrescriptionData(response.data);
        } else {
          console.error("Patient Prescriptions not found!");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrescriptionData();
  }, [pat_idnp]);

  return (
    <SimpleGrid columns={2} spacing={10} minChildWidth="250px" height="700px">
      <Box>
        <Heading mb={10} size='md' color="#02825D" fontSize="2.5em"> Prescripții</Heading>
        <Accordion allowToggle>
          {prescriptionData && prescriptionData.length > 0 ? (
            prescriptionData.map((item, index) => (
              (item.prescriptionDetails && Object.entries(item.prescriptionDetails).map(([medicineName, details], subIndex) => (
                <AccordionItem key={item}>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontSize="1.4em" color="#02825D">
                       {medicineName} - {item.medicName} - {item.timestamp}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={20}>
                    <div key={subIndex}>
                      <Text>Denumirea: {medicineName}</Text>
                      <Text>Medicul responsabil: {item.medicName}</Text>
                      <Text>Dozaj: {details.dosage === null ? "Nu este specificat" : details.dosage}</Text>
                      <Text>Administrare (Per zi): {details.timesPerDay === null ? "Nu este specificat" : details.timesPerDay}</Text>
                      <hr />
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              )))
            ))
          ) : (
            <h2>
              <Box as="span" flex='1' textAlign='left' fontSize="1.4em" color="#02825D">
                Nu au fost găsite Prescriptii
              </Box>
            </h2>
          )}
          <AccordionItem>
            <h2>
              <AccordionButton color="#008000"> 
                <Box as="span" flex='1' textAlign='left' fontSize= "1.4em" color="#02825D">
                  Adaugă Prescripție
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
  );
}