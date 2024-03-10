import React, { useState } from "react";
import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Button, List, ListItem, IconButton, Select, useToast } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [websites, setWebsites] = useState([]);
  const [newWebsite, setNewWebsite] = useState("");
  const toast = useToast();

  const handleAddWebsite = () => {
    if (newWebsite) {
      setWebsites([...websites, { url: newWebsite, frequency: "24h", sensitivity: "medium" }]);
      setNewWebsite("");
      toast({
        title: "Website added.",
        description: "We've added the website to your list.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleRemoveWebsite = (index) => {
    const updatedWebsites = websites.filter((_, i) => i !== index);
    setWebsites(updatedWebsites);
    toast({
      title: "Website removed.",
      description: "We've removed the website from your list.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Website Monitoring Service
        </Heading>

        <Box w="100%">
          <FormControl id="new-website">
            <FormLabel>Add Website to Monitor</FormLabel>
            <VStack spacing={3}>
              <Input placeholder="Enter website URL" value={newWebsite} onChange={(e) => setNewWebsite(e.target.value)} />
              <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddWebsite}>
                Add Website
              </Button>
            </VStack>
          </FormControl>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="md">
            Your Websites
          </Heading>
          <List spacing={3}>
            {websites.map((website, index) => (
              <ListItem key={index} d="flex" alignItems="center" justifyContent="space-between">
                <Box flex="1">
                  {website.url} - Checks every {website.frequency}
                </Box>
                <IconButton aria-label="Remove website" icon={<FaTrash />} onClick={() => handleRemoveWebsite(index)} />
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
