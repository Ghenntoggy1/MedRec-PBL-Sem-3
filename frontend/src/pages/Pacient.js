import { Box, Text, SimpleGrid, Heading } from "@chakra-ui/react";

export default function Pacient(){
  const textStyle = { // Text color
    fontSize: "1.4em",
    textAlign:'left',
    color:"#02825D" ,
    fontFamily:"molengo",
     
  };
  return(
    <SimpleGrid columns={2} spacing={10} minChildWidth="250px" height="700px">
      <Box >
      <Heading mb={10} size='md' color="#02825D" fontFamily="molengo"fontSize="2.5em" >Informații generale</Heading>
      <div style={textStyle} mb={2}>
        <Text mb={2}>
          Nume:
        </Text >
        <Text mb={2}> 
          Prenume:
        </Text>
        <Text mb={2}>
          Data nașterii:
        </Text>
        <Text mb={2} >
          Sex:
        </Text>
        <Text mb={2}>
          Grupa sangvină:
        </Text>
        <Text mb={2}>
          Localitatea:
        </Text>
        <Text mb={2}>
          Adresa:
        </Text>
        <Text mb={10}>
          IDNP:
        </Text>
        <Text mb={2}>
          Nume:
        </Text>
        <Text mb={2}>
          Prenume:
        </Text>
        <Text mb={2}>
          Nr. telefon:
        </Text>

      </div>
   
      </Box>
    </SimpleGrid>
  )
}


