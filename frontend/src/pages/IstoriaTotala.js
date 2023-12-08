import { Box, Text, SimpleGrid, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";

export default function IstoriaTotala(){
  return(
    <SimpleGrid columns={2} spacing={10} minChildWidth="250px" height="700px">
    <Box>
      <Heading mb={10} size='md' color="#02825D" fontSize="2.5em" > Istoria Totală</Heading>
      <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' fontSize= "1.4em"  color="#02825D">
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


</Accordion>
</Box>
    </SimpleGrid>
  )
}
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
