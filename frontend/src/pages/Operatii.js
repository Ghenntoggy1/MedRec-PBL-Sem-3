import { Box, Text, SimpleGrid, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "../api/data";
import { useEffect, useState } from "react";

export default function Operatii(){
  const { idnp } = useParams();

  const [operatieData, setOperatieData] = useState(null);

  useEffect(() => {
    const fetchOperatieData = async () => {
      try {
        const response = await data.fetchOperatieReports(idnp);
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
  }, [idnp]);


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
        
      </Accordion>
    </Box>
    </SimpleGrid>
  )
}
// const Operatii = () => {
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
