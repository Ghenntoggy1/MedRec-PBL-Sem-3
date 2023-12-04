import { Box, Text, SimpleGrid, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, Button, Input, AccordionPanel } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "../api/data";
import { useEffect, useState } from "react";

export default function BoliCroniceDoctor(){
  const { pat_idnp } = useParams();

  const [boliCroniceData, setBoliCroniceData] = useState(null);

  useEffect(() => {
    const fetchBoliCroniceData = async () => {
      try {
        const response = await data.fetchBoalaCronicaReports(pat_idnp.split("=")[1]);
        console.log('API Response:', response);
        if (response.status === 200) {
          setBoliCroniceData(response.data);
        } else {
          console.error("Patient not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBoliCroniceData();
    }, [pat_idnp]);

  return(
    <SimpleGrid columns={2} spacing={10} minChildWidth="250px" height="700px">
    <Box>
      <Heading mb={10} size='md' color="#02825D" fontSize="2.5em" > Boli Cronice</Heading>
      <Accordion allowToggle>
        {boliCroniceData && boliCroniceData.length > 0 ? 
        boliCroniceData.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontSize="1.4em" color="#02825D">
                  {item.boalaCronicaName} - {item.medicName} - {item.timestamp}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={20}>
              <Text>Denumirea: {item.boalaCronicaName}</Text>
              <Text>Medicul responsabil: {item.medicName}</Text>
              <Text>Data: {item.timestamp}</Text>
              <Text>Descrierea: {item.description}</Text>
            </AccordionPanel>
          </AccordionItem>
        )) : 
        (<h2>
            <Box as="span" flex='1' textAlign='left' fontSize="1.4em" color="#02825D">
              Nu au fost găsite Boli Cronice
            </Box>
        </h2>)}
        <AccordionItem>
            <h2>
              <AccordionButton color="#008000"> 
                <Box as="span" flex='1' textAlign='left' fontSize= "1.4em" color="#02825D">
                  Adaugă Boală Cronică
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



// import React from 'react';
// import CustomAccordionItem from './CustomAccordionItem'; // Adjust the import path based on your project structure
// import { Accordion } from '@chakra-ui/react';

//  const dataFromDatabase = [
//   // ... array of objects containing denumirea, mediculResponsabil, data, and descrierea properties
// ];

// const BoliCronice = () => {
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
