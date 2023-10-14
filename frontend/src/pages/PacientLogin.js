import React, { useState } from "react";
import { Box, Input, Text, Grid, GridItem, Button, form, Center, Flex, Image, Link, Heading, Container, FormControl } from "@chakra-ui/react";

function PacientLogin() {
  const LoginForm = ()=> {
    return(
      <Box>
        <form>
          <FormControl borderColor="1FAC94">
            <Input types='IDNP'mt={4} placeholder="IDNP"></Input>
            <Button type="submit" mt={4} colorScheme="teal">Enter</Button>
          </FormControl>
        </form>
      </Box>
    )
  }
return(
    <div>
      <Box mt={5} maxW="box.xl" marginLeft="50">
        <Heading fontSize="3xl" fontWeight="Molengo" bgClip='text' bgGradient='linear-gradient(to-l, #4CBCAC, #05C676)'>
          MedRec: Fișe Medicale Digitalizate
        </Heading>
        </Box>
        <Container  centerContent>
          <Image
            mt={20} src={ "/images/pacient_icon.png"}/>
          <LoginForm/>
        </Container>      

    </div>
)
}
export default PacientLogin;




