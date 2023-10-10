import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';
import { useParams } from 'react-router';

const LoginPage = () => {
    const { userType } = useParams();

    return (
        <div>
            <h2> Role {userType}</h2>
        </div>
    );
};

export default LoginPage;
