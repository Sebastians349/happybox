import React, { useState } from 'react';
import { VStack, Text, Code, Box } from '@chakra-ui/layout';
const msjArr = ['hey', 'vos ', 'cacota'];

const BtnAlegria = () => {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState('');
  msjArr.forEach((e, i) => console.log(e[i]));
  return (
    <VStack spacing={8}>
      <button
        onClick={() => setContador(contador + 1)}
        colorScheme="teal"
        variant="outline"
      >
        🎉
      </button>
      <Text>
        Sos un toque más feliz hace <Code fontSize="xl">{contador}</Code>
        clicks.
      </Text>
      <Box
        w="100px"
        h="50px"
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
        textAlign="center"
      >
        {mensaje}
      </Box>
    </VStack>
  );
};

export default BtnAlegria;
