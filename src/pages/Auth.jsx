import React, { useState } from "react";
import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (email && password) {
      localStorage.setItem("userEmail", email);
      navigate("/dashboard");
    } else {
      toast({
        title: "Error",
        description: "Please provide both email and password.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleCreateAccount = () => {
    if (email && password) {
      localStorage.setItem("userEmail", email);
      navigate("/dashboard");
    } else {
      toast({
        title: "Error",
        description: "Please provide both email and password to create an account.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Sign In or Create Account
        </Heading>

        <Box w="100%">
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
        </Box>

        <Box w="100%">
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
        </Box>

        <Box w="100%">
          <Button colorScheme="teal" w="full" onClick={handleSignIn}>
            Sign In
          </Button>
          <Button colorScheme="gray" w="full" mt={4} onClick={handleCreateAccount}>
            Create Account
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

// Duplicate Auth component removed

export default Auth;
