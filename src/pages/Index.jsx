import { Container, Text, VStack, Heading, Box, Button, Stack, IconButton } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Event Management Platform</Heading>
        <Text fontSize="lg" textAlign="center">Organize and manage your events effortlessly.</Text>
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="solid">
            View Events
          </Button>
          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="outline">
            Create Event
          </Button>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;