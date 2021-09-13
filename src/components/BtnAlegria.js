import React, { useState } from 'react';
import { VStack, Text, Code, Box } from '@chakra-ui/layout';

let txt = ['caca', 'chota', 'pedo'];

const BtnAlegria = () => {
  const [contador, setContador] = useState(0);
  const [mensajes, setMensajes] = useState('❔');

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
        {mensajes}
      </Box>
    </VStack>
  );
};

export default BtnAlegria;
