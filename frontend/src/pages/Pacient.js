import { Box, Text, SimpleGrid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../api/data";

export default function Pacient(){
  const textStyle = {
    fontSize: "1.4em",
    textAlign:'left',
    color:"#02825D" ,
     
  };

  const { idnp } = useParams();

  const [patientData, setPatientData] = useState(null);

  const [medicalRecordData, setMedicalRecordData] = useState(null);

  const [institutionName, setInstitutionName] = useState(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await data.fetchPatientInfo(idnp);

        if (response.status === 200) {
          setPatientData(response.data);
        } else {
          console.error("Patient not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

      fetchPatientData();
    }, [idnp]);

  useEffect(() => {
    const fetchMedicalRecord = async () => {
      try {
        const response = await data.fetchMedicalRecord(idnp);

        if (response.status === 200) {
          setMedicalRecordData(response.data);
        } else {
          console.error("Medical Record not found");
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchInstitutionName = async () => {
      try {
        const response = await data.fetchInstitutionName(idnp);

        if (response.status === 200) {
          setInstitutionName(response.data);
        } else {
          console.error("Institution Name not found");
        }
      } catch (error) {
        console.error(error);
      }
    };
      fetchMedicalRecord();
      fetchInstitutionName();
    }, [idnp]);

  if (!patientData) {
    return <div>Loading...</div>;
  }

  return(
    <SimpleGrid columns={2} spacing={10} minChildWidth="250px" height="700px">
      <Box >
      <Heading mb={10} size='md' color="#02825D" fontSize="2.5em" >Informații generale</Heading>
      <div style={textStyle} mb={2}>
        <Text mb={2}>
          Nume: {patientData.lastName}
        </Text >
        <Text mb={2}> 
          Prenume: {patientData.firstName}
        </Text>
        <Text mb={2}>
          Data nașterii: {patientData.dateOfBirth}
        </Text>
        <Text mb={2}>
          IDNP: {patientData.idnp}
        </Text>
        <Text mb={2}>
          Numărul de asigurare: {patientData.insuranceNumber}
        </Text>
        <Text mb={2} >
          Sex: {patientData.gender === "F" ? "Feminin" : "Masculin"}
        </Text>
        <Text mb={2} >
          Fişa medicală: {medicalRecordData ? medicalRecordData.medrecId : 'N/A'}
        </Text>
        <Text mb={2}>
          Centrul Medical: {institutionName ? institutionName : "N/A"}  {/* TODO institution name */}
        </Text>
        <Text mb={2} >
          Vârsta: {patientData.age}
        </Text>
        <Text mb={2}>
          Grupa sangvină: {patientData.bloodGroup}
        </Text>
        <Text mb={2}>
          Localitatea: {patientData.country + ', ' + patientData.residency}
        </Text>
        <Text mb={2}>
          Adresa: {'str. ' + patientData.streetName + ' ' + patientData.streetNumber
                        + ', ap.' + patientData.apartmentNumber + ' MD' + patientData.postalCode}
        </Text>
        <Text mb={2}>
          Contact: {patientData.contact}
        </Text>
      </div>
  
      </Box>
    </SimpleGrid>
  )
}


