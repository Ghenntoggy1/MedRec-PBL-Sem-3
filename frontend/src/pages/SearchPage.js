import { useState } from 'react';
import axios from 'axios';
import { data } from '../api/data';
import { HStack, Button, Input, Text, GridItem, VisuallyHidden, Link as ChakraLink } from '@chakra-ui/react';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('name');
  const [isHovered, setIsHovered] = useState(false);

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLetters = event => {
    const result = event.target.value.replace(/\D/g, '');

    setValue(result);
  };

  const [message, setMessage] = useState('');

  const handleNumbers = event => {
    const result = event.target.value.replace(/[^a-z]/gi, '');

    setMessage(result);
  };

  const [value, setValue] = useState('');

  const handleSearch = async () => {
    try {
      const response = await (searchType === 'idnp'
        ? data.fetchPatientByIdnp(searchTerm)
        : data.fetchPatientsByName(searchTerm));

      console.log('Search API Response:', response);

      // Handle the response, update the UI, etc.
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main">
      <HStack spacing={4} mb={4}>
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
            onClick={() => setSearchType('idnp')}
        >
            <Text>Căutare după IDNP</Text>
        </Button>
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
            onClick={() => setSearchType('name')}
        >
            <Text>Căutare după Nume Prenume</Text>
        </Button>
      </HStack>

      <VisuallyHidden>
        INDP
      </VisuallyHidden>
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
    </div>
  );
}
