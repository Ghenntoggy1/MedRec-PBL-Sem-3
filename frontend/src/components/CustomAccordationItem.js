import React from 'react';
import { AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Text } from '@chakra-ui/react';

const CustomAccordionItem = ({ denumirea, mediculResponsabil, data, descrierea }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left' fontSize="1.4em" fontFamily="molengo" color="#02825D">
            {`${denumirea}/${mediculResponsabil}/${data}`}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={20}>
        <Text>Denumirea: {denumirea}</Text>
        <Text>Medicul responsabil: {mediculResponsabil}</Text>
        <Text>Data: {data}</Text>
        <Text>Descrierea: {descrierea}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default CustomAccordionItem;
