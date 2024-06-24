import React, { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading, useToast } from '@chakra-ui/react';
import { FaCalendarAlt } from 'react-icons/fa';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend API
    console.log({ eventName, eventDate, eventLocation, eventDescription });
    toast({
      title: "Event created.",
      description: "We've created your event for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    // Reset form fields
    setEventName('');
    setEventDate('');
    setEventLocation('');
    setEventDescription('');
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">Create New Event</Heading>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Event Name</FormLabel>
              <Input 
                type="text" 
                value={eventName} 
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Enter event name"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Date</FormLabel>
              <Input 
                type="date" 
                value={eventDate} 
                onChange={(e) => setEventDate(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Location</FormLabel>
              <Input 
                type="text" 
                value={eventLocation} 
                onChange={(e) => setEventLocation(e.target.value)}
                placeholder="Enter event location"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea 
                value={eventDescription} 
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="Enter event description"
              />
            </FormControl>
            <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" type="submit">
              Create Event
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreateEvent;