import { Box, Text, SimpleGrid, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Accordion, Heading, Button, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "../api/data";
import { useEffect, useState } from "react";

export default function AnalizeDoctor(){
  const { pat_idnp } = useParams();

  const [analizaData, setAnalizaData] = useState(null);

  useEffect(() => {
    const fetchAnalizaData = async () => {
      try {
        const response = await data.fetchAnalizaReports(pat_idnp.split('=')[1]);
        console.log('API Response:', response);
        if (response.status === 200) {
          setAnalizaData(response.data);
        } else {
          console.error("Patient Analysis not found!");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnalizaData();
  }, [pat_idnp]);

  return(
    <SimpleGrid columns={2} spacing={10} minChildWidth="250px" height="700px">
    <Box>
      <Heading mb={10} size='md' color="#02825D" fontSize="2.5em" > Analize</Heading>
      <Accordion allowToggle>
      {analizaData && analizaData.length > 0 ? 
        analizaData.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left' fontSize="1.4em" color="#02825D">
                  {item.analizaName} - {item.medicName} - {item.labName} - {item.timestamp}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={20}>
              <Text>Denumirea: {item.analizaName}</Text>
              <Text>Medicul responsabil: {item.medicName}</Text>
              <Text>Laboratorul: {item.labName}</Text>
              <Text>Data: {item.timestamp}</Text>
              {item.values && Object.keys(item.values).length > 0 &&
                <Box>
                  <h2><Text>Valori:</Text></h2>
                  {Object.entries(item.values).map(([key, value], index) => (
                    <UnorderedList>
                        <ListItem>
                            <Text key={index}>{key}: {value}</Text>
                        </ListItem>
                    </UnorderedList>
                  ))}
                </Box>
              }
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
                  Adaugă Analiză
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

// const Analize = () => {
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
