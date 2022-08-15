import { Button, Center, HStack, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  function setNumber(number: number) {
    setValue(value + number);
  }

  function clearValue() {
    setValue('')
  }
  
  function add() {
    setValue("");
  }
  
  function minus() {
    setValue("");
  }
  
  function divider() {
    setValue("");
  }

  function multiply() {
    setValue("");
  }

  return (
    <Center h="100vh">
      <VStack spacing={2}>
        <Input value={value} />
        <HStack spacing={2}>
          <Button onClick={() => clearValue()}>AC</Button>
          <Button>+/-</Button>
          <Button>%</Button>
          <Button>÷</Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={() => setNumber(7)}>7</Button>
          <Button onClick={() => setNumber(8)}>8</Button>
          <Button onClick={() => setNumber(9)}>9</Button>
          <Button>×</Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={() => setNumber(4)}>4</Button>
          <Button onClick={() => setNumber(5)}>5</Button>
          <Button onClick={() => setNumber(6)}>6</Button>
          <Button>−</Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={() => setNumber(1)}>1</Button>
          <Button onClick={() => setNumber(2)}>2</Button>
          <Button onClick={() => setNumber(3)}>3</Button>
          <Button>+</Button>
        </HStack>
        <HStack spacing={2} w="100%">
          <Button w="100%" onClick={() => setNumber(0)}>0</Button>
          <Button>,</Button>
          <Button>=</Button>
        </HStack>
      </VStack>
    </Center>
  );
}
