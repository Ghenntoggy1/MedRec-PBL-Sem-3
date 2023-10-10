import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';

const LoginPage = () => {
  const [userType, setUserType] = useState('');

  const handleLogin = () => {
    if (userType === 'patient') {
      // Handle patient login
      alert('Logging in as a patient');
    } else if (userType === 'doctor') {
      // Handle doctor login
      alert('Logging in as a doctor');
    } else {
      alert('Please select a user type');
    }
  };

  return (
    <Box p={4}>
      <Stack spacing={4} align="center">
        <Text fontSize="xl">Login as:</Text>
        <Button onClick={() => setUserType('patient')} colorScheme="teal">
          Patient
        </Button>
        <Button onClick={() => setUserType('doctor')} colorScheme="teal">
          Doctor
        </Button>
      </Stack>

      {userType && (
        <Box mt={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button mt={4} colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default LoginPage;
