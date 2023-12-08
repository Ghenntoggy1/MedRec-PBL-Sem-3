import { Box, Text, SimpleGrid, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, Input } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "../api/data";
import { useEffect, useState } from "react";

export default function AlergiiDoctor(){
  const { pat_idnp } = useParams();

  const [allergyData, setAllergyData] = useState(null);

  useEffect(() => {
    const fetchAllergyData = async () => {
      try {
        const response = await data.fetchAllergyReports(pat_idnp.split('=')[1]);
        console.log('API Response:', response);
        if (response.status === 200) {
          setAllergyData(response.data);
        } else {
          console.error("Patient not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllergyData();
    }, [pat_idnp]);

  return(
    <SimpleGrid columns={2} spacing={10} minChildWidth="250px" height="700px">
    <Box>
      <Heading mb={10} size='md' color="#02825D" fontSize="2.5em" > Alergii</Heading>
      <Accordion allowToggle>
      {allergyData && allergyData.length > 0 ? 
        allergyData.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontSize="1.4em" color="#02825D">
                  {item.allergyName} - {item.medicName} - {item.timestamp}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={20}>
              <Text>Denumirea: {item.allergyName}</Text>
              <Text>Medicul responsabil: {item.medicName}</Text>
              <Text>Data: {item.timestamp}</Text>
              <Text>Descrierea: {item.description}</Text>
            </AccordionPanel>
          </AccordionItem>
        )) : 
        (<h2>
            <Box as="span" flex='1' textAlign='left' fontSize="1.4em" color="#02825D">
              Nu au fost găsite Alergii
            </Box>
        </h2>)}
        <AccordionItem>
            <h2>
              <AccordionButton color="#008000"> 
                <Box as="span" flex='1' textAlign='left' fontSize= "1.4em" color="#02825D">
                  Adaugă Alergie
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={20}>
              {}
              <form>
              <Text>Denumirea:</Text>

              <Input placeholder= "Denumirea..." mb={2} />

              <Text>Medicul responsabil:</Text>
              {}
              <Input placeholder="Medicul responsabil..." mb={2} />

              <Text>Data:</Text>
              {}
              <Input placeholder="Data..." mb={2} />

              <Text>Descrierea:</Text>
              {}
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

// import React from 'react';
// import CustomAccordionItem from './CustomAccordionItem'; // Adjust the import path based on your project structure
// import { Accordion } from '@chakra-ui/react';

//  const dataFromDatabase = [
//   // ... array of objects containing denumirea, mediculResponsabil, data, and descrierea properties
// ];

// const Alergii = () => {
//   return (
//     <Accordion allowToggle>
//       {dataFromDatabase.map((item, index) => (
//         <CustomAccordionItem
//           key={index}
//           denumirea={item.denumirea}
//           mediculResponsabil={item.mediculResponsabil}
//           data={item.data}
//           descrierea={item.descrierea}
//         />
//       ))}
//     </Accordion>
//   );
// };

// export default Analize;
