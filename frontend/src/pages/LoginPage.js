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

// import React, { useState } from 'react';
// import { Box, Button, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';
// import { useParams } from 'react-router';

// function LoginPage() {
//     const { userType } = useParams();

//     if (userType === 'pacient') {
//         return (
//             <div>
                
//             </div>
//         )
//     }
//     else if (userType === 'medic') {
//         return (
//             <div>
                
//             </div>
//         )
//     }
//     else {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// };

// export default LoginPage;
