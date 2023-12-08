import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button, Heading, GridItem, Grid, Radio, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { data } from "../api/data";

const NewPatient = () => {
  const [status, setStatus] = useState('');
  const [institutionForm, setInstitutionForm] = useState({
    institutionName: "",
    medrecId: 0,
  });

  const [formData, setFormData] = useState({
    idnp: 0,
    firstName: "",
    lastName: "",
    insuranceNumber: "",
    gender: "",
    bloodGroup: "",
    dateOfBirth: "",
    contact: "",
    country: "",
    residency: "",
    streetName: "",
    streetNumber: "",
    apartmentNumber: 0,
    postalCode: "",
  });

  const handleRadioChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNumbers = event => {
    const result = event.target.value.replace(/[^a-z\s]/gi, '');
    const { name } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: result }));
    console.log(formData);
  };

  const handleLetters = event => {
    const result = event.target.value.replace(/\D/g, '');
    const { name } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: result }));
    console.log(formData);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };

  const handleChangeInstitution = (e) => {
    const { name, value } = e.target;
    setInstitutionForm((prevData) => ({ ...prevData, [name]: value }));
    console.log(institutionForm);
  };

  const handleSubmit = async () => {
    const hasEmptyFields = Object.values(formData).some(value => value === '');

    if (hasEmptyFields) {
      console.log('Please fill in all the fields');
      setStatus("invalid");
      return;
    }
    else {
      setStatus("valid");
    }

    console.log(formData);
    try {
      const patientResponse = await data.addPatient(formData);
      if (patientResponse.status === 200) {
        const patientIdnp = patientResponse.data.idnp;
        console.log("Added new Patient!");
        const medicalRecordResponse = await data.addMedicalRecord({ patientIdnp });
        if (medicalRecordResponse.status === 200) {
          console.log("Added new Medical Record!");
          const medicalRecordId = await data.getMedicalRecordIdByPatient(patientIdnp);
          if (medicalRecordId.status === 200) {
            console.log(medicalRecordId.data);
            const medid = medicalRecordId.data + 1;
            const institutionResponse = await data.addInstitution({
              institutionName: institutionForm.institutionName,
              medrecId: medid,
            });
            console.log(medid);
            if (institutionResponse.status === 200) {
              console.log("Added new Institution");
            } else {
              console.error("Failed to add institution");
            }
          }
          else {
            console.error("Failed to get medical record id");
          }
        } else {
          console.error("Failed to add medical record");
        }
      } else {
        console.error("Failed to add patient");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box maxW="md" m="auto" p="15" textAlign="left">
      <Heading mb={10} size="md" color="#02825D" fontSize="2.5em">
        {" "}
        Pacient Nou
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Nume:</FormLabel>
            <Input name="firstName" placeholder="Nume" onInput={handleNumbers} value={formData.firstName} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Prenume:</FormLabel>
            <Input name="lastName" placeholder="Prenume" onInput={handleNumbers} value={formData.lastName} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>IDNP:</FormLabel>
            <Input name="idnp" placeholder="1234567890123" 
              onInput={handleLetters}
              value={formData.idnp || ''}
              required
              maxLength= '13'
              isInvalid={formData.idnp.length > 0 && formData.idnp.length < 13}
              errorBorderColor="#ff0000"/>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Nr. de asigurare:</FormLabel>
            <Input name="insuranceNumber" placeholder="600000000" 
              onInput={handleLetters}
              value={formData.insuranceNumber}
              required
              maxLength= '9'
              isInvalid={formData.insuranceNumber.length > 0 && formData.insuranceNumber.length < 9}
              errorBorderColor="#ff0000"/>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Sex:</FormLabel>
            <Radio
              name="gender"
              value="F"
              borderColor="green"
              isChecked={formData.gender === "F"}
              onChange={() => handleRadioChange("gender", "F")}
              mr="2"
            >
              Feminin
            </Radio>
            <Radio
              name="gender"
              value="M"
              borderColor="green"
              isChecked={formData.gender === "M"}
              onChange={() => handleRadioChange("gender", "M")}
            >
              Masculin
            </Radio>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Grupa Sangvină:</FormLabel>
            <Radio
              name="bloodGroup"
              value="A"
              borderColor="green"
              isChecked={formData.bloodGroup === "A"}
              onChange={() => handleRadioChange("bloodGroup", "A")}
              mr="3"
            >
              A
            </Radio>
            <Radio
              name="bloodGroup"
              value="B"
              borderColor="green"
              isChecked={formData.bloodGroup === "B"}
              onChange={() => handleRadioChange("bloodGroup", "B")}
              mr="3"
            >
              B
            </Radio>
            <Radio
              name="bloodGroup"
              value="AB"
              borderColor="green"
              isChecked={formData.bloodGroup === "AB"}
              onChange={() => handleRadioChange("bloodGroup", "AB")}
              mr="3"
            >
              AB
            </Radio>
            <Radio
              name="bloodGroup"
              value="O"
              borderColor="green"
              isChecked={formData.bloodGroup === "O"}
              onChange={() => handleRadioChange("bloodGroup", "O")}
            >
              O
            </Radio>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Data de Naștere:</FormLabel>
            <Input name="dateOfBirth" placeholder="2023-01-20" onChange={handleChange} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Centrul Medical Afiliat:</FormLabel>
            <Input name="institutionName" placeholder="CMF-3" onChange={handleChangeInstitution} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Contact:</FormLabel>
            <Input name="contact" placeholder="exemplu@gmail.com" onChange={handleChange} />
          </FormControl>
          </GridItem>
          <GridItem>
          <FormControl mb="2">
            <FormLabel>Țara:</FormLabel>
            <Input name="country" placeholder="Moldova" onChange={handleChange} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Reședința:</FormLabel>
            <Input name="residency" placeholder="Chișinău" onChange={handleChange} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Strada:</FormLabel>
            <Input name="streetName" placeholder="Mihai Viteazul" onChange={handleChange} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Numărul Străzii:</FormLabel>
            <Input name="streetNumber" placeholder="28/1" onChange={handleChange} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Numărul Apartamentului:</FormLabel>
            <Input name="apartmentNumber" placeholder="13" onChange={handleChange} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl mb="2">
            <FormLabel>Cod Poștal:</FormLabel>
            <Input name="postalCode" placeholder="MD2034" onChange={handleChange} />
          </FormControl>
        </GridItem>
      </Grid>
      <Button
        colorScheme="teal"
        mt="4"
        bgColor="#02825D"
        color="white"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      {status === "invalid" ? (
        <Text>Completați toate câmpurile!</Text>
      ) : (<></>)}
    </Box>
  );
};

export default NewPatient;
