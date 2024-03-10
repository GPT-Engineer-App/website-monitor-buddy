import React from "react";
import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const Auth = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Sign In or Create Account
        </Heading>

        <Box w="100%">
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input placeholder="Enter your email" type="email" />
          </FormControl>
        </Box>

        <Box w="100%">
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Enter your password" type="password" />
          </FormControl>
        </Box>

        <Box w="100%">
          <Button colorScheme="teal" w="full">
            Sign In
          </Button>
          <Button colorScheme="gray" w="full" mt={4}>
            Create Account
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Auth;
