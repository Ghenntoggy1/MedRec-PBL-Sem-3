import React, { useState, useEffect } from "react";
import { Box, FormControl, FormLabel, Input, Button, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { data } from "../api/data";

const ProgramarePacient = () => {
  const { pat_idnp } = useParams();
  const [patientData, setPatientData] = useState(null);
  
  useEffect(() => {
    console.log("pat: " + pat_idnp);
    const fetchPatientDTO = async () => {
      try {
        const response = await data.fetchPatientForSearch(pat_idnp);

        console.log('API Response: ', response);

        if (response.status === 200) {
          setPatientData(response.data);
        } else {
          console.error("Patient not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPatientDTO();
  }, []);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return (
    <Box  maxW="m" m="auto" p="15" textAlign="left">
        <Heading mb={10} size='md' color="#02825D" fontSize="2.5em" > Programare</Heading>
      <FormControl mb="15">
        <FormLabel>Nume: {patientData.fullName}</FormLabel>
        <Input 
        readOnly={true} 
        placeholder="Nume" />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Prenume</FormLabel>
        <Input placeholder="Prenume" />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Instituția medicală</FormLabel>
        <Input placeholder="IMSP Spitalul Clinic" />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Specialist</FormLabel>
        <Input placeholder="Nume, Prenume" />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Data</FormLabel>
        <Input placeholder="12/01/2024" />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Ora</FormLabel>
        <Input placeholder="13:25" />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Indicații</FormLabel>
        <Input placeholder="Text" />
      </FormControl>
      <Button colorScheme="teal" mt="4" bgColor="#02825D" color="white">
        Submit
      </Button>
    </Box>
  );
};

export default ProgramarePacient;
