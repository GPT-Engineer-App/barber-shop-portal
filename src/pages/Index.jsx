import React from "react";
import { Box, Heading, Text, Stack, Image, Button, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaCut, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1493857671505-72967e2e2760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzExODg5NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" h="400px" display="flex" alignItems="center" justifyContent="center" textAlign="center" color="white">
        <Stack spacing={6}>
          <Heading as="h1" size="2xl">
            Welcome to Our Barber Shop
          </Heading>
          <Text fontSize="xl">Experience the best grooming services in town</Text>
          <Button colorScheme="blue" size="lg">
            Book an Appointment
          </Button>
        </Stack>
      </Box>

      {/* Services Section */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Our Services
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1606333259737-6da197890fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYWlyY3V0fGVufDB8fHx8MTcxMTg4OTY2N3ww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>
              Haircuts
            </Heading>
            <Text>Get stylish haircuts from our skilled barbers</Text>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW18ZW58MHx8fHwxNzExODg5NjY4fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>
              Beard Trimming
            </Heading>
            <Text>Keep your beard looking sharp and well-groomed</Text>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>
              Hot Towel Shave
            </Heading>
            <Text>Experience the luxury of a traditional hot towel shave</Text>
          </GridItem>
        </Grid>
      </Box>

      {/* About Section */}
      <Box bg="gray.100" p={8}>
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text>We are a premier barber shop dedicated to providing top-notch grooming services. Our skilled barbers have years of experience and are passionate about delivering the best haircuts and shaves in a relaxing atmosphere.</Text>
      </Box>

      {/* Contact Section */}
      <Box p={8}>
        <Heading as="h2" size="xl" mb={4}>
          Contact Us
        </Heading>
        <Stack direction="row" spacing={8}>
          <Box>
            <Icon as={FaPhone} boxSize={6} mb={2} />
            <Text>123-456-7890</Text>
          </Box>
          <Box>
            <Icon as={FaMapMarkerAlt} boxSize={6} mb={2} />
            <Text>123 Main St, City, Country</Text>
          </Box>
          <Box>
            <Icon as={FaCut} boxSize={6} mb={2} />
            <Text>Open: Mon - Sat, 9am - 7pm</Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
