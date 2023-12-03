import { useState, useEffect } from 'react';
import { data } from '../api/data';
import { HStack, Button, Checkbox, Input, VStack, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('idnp');
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [message, setMessage] = useState('');
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const { idnp } = useParams();

  useEffect(() => {
    const fetchPatientsDTO = async () => {
      try {
        const response = await data.fetchPatientsForSearch();

        console.log('API Response: ', response);

        if (response.status === 200) {
          setPatients(response.data);
        } else {
          console.error("Patients not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPatientsDTO();
  }, []);

  useEffect(() => {
    filterPatients();
  }, [searchTerm, searchType, patients]);

  const filterPatients = () => {
    if (searchType === 'name') {
      const filtered = patients.filter(patient =>
        patient.fullName.toLowerCase().includes(message.toLowerCase())
      );
      setFilteredPatients(filtered);
    } else if (searchType === 'idnp') {
      const filtered = patients.filter(patient =>
        patient.idnp.toString().startsWith(value)
      );
      setFilteredPatients(filtered);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLetters = event => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };

  const handleNumbers = event => {
    const result = event.target.value.replace(/[^a-z\s]/gi, '');

    setMessage(result);
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
    if (type === 'idnp') {
      setValue('');
    } else {
      setMessage('');
    }
  };

  const handlePatientSelection = (patient) => {
    navigate(`/medic/${idnp}/pat=${patient.idnp}/informatii_generale`);
  };

  return (
    <div className="main">
      <HStack spacing={4} mb={4}>
        <Checkbox
          isChecked={searchType === 'idnp'}
          onChange={() => handleSearchTypeChange('idnp')}
          colorScheme="blue"
          cursor="pointer"
          border="2px solid"
          borderColor="#4CBCAC"
          borderRadius="5px"
          size="lg"
          paddingLeft="3"
          paddingRight="3"
          paddingBottom="2"
          paddingTop="2"
        >
          <Text fontSize="lg">Căutare după IDNP</Text>
        </Checkbox>
        <Checkbox
          isChecked={searchType === 'name'}
          onChange={() => handleSearchTypeChange('name')}
          colorScheme="blue"
          cursor="pointer"
          border="2px solid"
          borderColor="#4CBCAC"
          borderRadius="5px"
          size="lg"
          paddingLeft="3"
          paddingRight="3"
          paddingBottom="2"
          paddingTop="2"
        >
          <Text fontSize="lg">Căutare după Nume Prenume</Text>
        </Checkbox>
      </HStack>
        <Input
          mt={0}
          size="lg"
          type="search"
          placeholder={`Search by ${searchType === 'idnp' ? 'IDNP' : 'Name'}`}
          value={searchType === 'idnp' ? value : message}
          maxLength= {searchType === 'idnp' ? '13' : '50'}
          onChange={handleInputChange}
          onInput={searchType === 'idnp' ? handleLetters : handleNumbers}
        />
      { searchTerm && (
        <VStack paddingTop="5px">
          {filteredPatients.map(patient => (
            <Button
            variant="solid"
            colSpan={{
            base: "auto",
            lg: 2,
            }}
            width="100%"
            size="lg"
            type="submit"
            colorScheme="brand"
            cursor="pointer"
            border= '3px solid'
            borderColor= 'green.300'
            backgroundImage= 'linear-gradient(to-l, #4CBCAC, #05C676)'
            _hover={{
                border: '3px solid',
                borderColor: 'gray',
                backgroundImage: 'linear-gradient(to-l, #4cbcac, #6dd694)',
            }}
            _active={{
                transform: 'scale(0.95)',
                borderColor: 'gray',
            }}
            onClick={() => handlePatientSelection(patient)}
            >
              Nume: {patient.fullName} - IDNP: {patient.idnp} - Vârsta: {patient.age} - Anul Nașterii: {patient.dateOfBirth} - Nr. Asigurare: {patient.insuranceNumber}
            </Button>
          ))}
        </VStack>
      )}
    </div>
  );
}