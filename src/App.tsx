import { Button, Center, Heading, HStack, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Calculator } from "./components/Calculator";

export default function App() {

  return (
    <Center h="100vh">
      <VStack spacing={2}>
        <Heading>Calculator</Heading>
          <Calculator />
      </VStack>
    </Center>
  );
}