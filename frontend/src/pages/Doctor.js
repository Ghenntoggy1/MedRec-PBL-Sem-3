import { Box, Text, SimpleGrid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../api/data";

export default function Doctor(){
  const textStyle = {
    fontSize: "1.4em",
    textAlign:'left',
    color:"#02825D" ,
     
  };

  const { idnp } = useParams();

  const [doctorData, setDoctorData] = useState(null);

  const [medicalRecordData, setMedicalRecordData] = useState(null);

  const [institutionName, setInstitutionName] = useState(null);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await data.fetchMedicInfo(idnp);

        if (response.status === 200) {
          setDoctorData(response.data);
        } else {
          console.error("Patient not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

      fetchDoctorData();
    }, [idnp]);

  if (!doctorData) {
    return <div>Loading...</div>;
  }

  return(
    <SimpleGrid columns={2} spacing={10} minChildWidth="250px" height="700px">
      <Box >
      <Heading mb={10} size='md' color="#02825D" fontSize="2.5em" >Profilul Meu</Heading>
      <div style={textStyle} mb={2}>
        <Text mb={2}>
          Nume: {doctorData.lastName}
        </Text >
        <Text mb={2}> 
          Prenume: {doctorData.firstName}
        </Text>
        <Text mb={2}>
          Data nașterii: {doctorData.dateOfBirth}
        </Text>
        <Text mb={2}>
          IDNP: {doctorData.idnp}
        </Text>
        <Text mb={2}>
          Centrul Medical: {doctorData.institutionName ? doctorData.institutionName : "N/A"}
        </Text>
        <Text mb={2}>
          Specialitatea: {doctorData.speciality}
        </Text>
        <Text mb={2}>
          Data de angajare: {doctorData.dateOfEmployment}
        </Text>
        <Text mb={2} >
          Sex: {doctorData.gender === "F" ? "Feminin" : "Masculin"}
        </Text>
        <Text mb={2} >
          Vârsta: {doctorData.age}
        </Text>
        <Text mb={2}>
          Localitatea: {doctorData.country + ', ' + doctorData.residency}
        </Text>
        <Text mb={2}>
          Adresa: {'str. ' + doctorData.streetName + ' ' + doctorData.streetNumber
                        + ', ap.' + doctorData.apartmentNumber + ' MD' + doctorData.postalCode}
        </Text>
        <Text mb={2}>
          Contact: {doctorData.contact}
        </Text>
      </div>
  
      </Box>
    </SimpleGrid>
  )
}


