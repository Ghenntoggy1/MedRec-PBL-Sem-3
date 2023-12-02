import { useState } from 'react';
import axios from 'axios';
import { data } from '../api/data';
import { HStack, Button, Checkbox, Input, Text, GridItem, VisuallyHidden, Link as ChakraLink } from '@chakra-ui/react';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [isHovered, setIsHovered] = useState(false);



  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLetters = event => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };

  const [message, setMessage] = useState('');

  const handleNumbers = event => {
    const result = event.target.value.replace(/[^a-z\s]/gi, '');

    setMessage(result);
  };

  const [value, setValue] = useState('');

  const handleSearch = async () => {
    try {
      const response = await (searchType === 'idnp'
        ? data.fetchPatientByIdnp(searchTerm)
        : data.fetchPatientsByName(searchTerm));

      console.log('Search API Response:', response);

    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchTypeChange = (type) => {
    setSearchType(type);
    if (type === 'idnp') {
      setValue('');
    } else {
      setMessage('');
    }
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
          size="lg"
          paddingLeft="3"
          paddingRight="3"
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
          size="lg"
          paddingLeft="3"
          paddingRight="3"
        >
          <Text fontSize="lg">Căutare după Nume Prenume</Text>
        </Checkbox>
      </HStack>
      <HStack>
        <Input
          mt={0}
          size="lg"
          type="search"
          placeholder={`Search by ${searchType === 'idnp' ? 'IDNP' : 'Name'}`}
          value={searchType === 'idnp' ? value : message}
          maxLength= {searchType === 'idnp' ? '13' : '50'}
          onChange={handleInputChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSearch();
            }
          }}
          onInput={searchType === 'idnp' ? handleLetters : handleNumbers}
        />
        <Button
          as={GridItem}
          variant="solid"
          colSpan={{
          base: "auto",
          lg: 2,
          }}
          width="20%"
          size="lg"
          type="submit"
          colorScheme="brand"
          cursor="pointer"
          border= '3px solid'
          borderColor= 'green.300'
          backgroundImage= 'linear-gradient(to-l, #4CBCAC, #05C676)'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          _hover={{
              border: '3px solid',
              borderColor: 'gray',
              backgroundImage: 'linear-gradient(to-l, #4cbcac, #6dd694)',
          }}
          _active={{
              transform: 'scale(0.95)',
              borderColor: 'gray',
          }}
          // onClick={() => data.fetchPatientsByType(searchType)}  // TODO find patients by type
        >
          <Text>Caută</Text>
        </Button>
      </HStack>
    </div>
  );
}