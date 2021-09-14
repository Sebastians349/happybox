import React, { useState } from 'react';
import { VStack, Text, Code } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

const BtnAlegria = () => {
  const [contador, setContador] = useState(0);
  const [index, setIndex] = useState(0);
  const mensaje = [
    '',
    'Hey',
    '¡HEY!',
    'Vos',
    'SI, VOS ',
    'No te dijeron "¿CON RESPONSABILIDAD?',
    '¿Siempre hacés lo que NO te dicen que hagas?',
    'Bueno...',
    'Esto parece que viene para largo.',
    'Estemmmm....',
    'Ya estaría...',
    { contador },
  ];

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
      <Text> Este es un botón de conciencia. Clikeá con responsabilidad</Text>
      <Button
        boxShadow="md"
        p="6"
        rounded="md"
        bg="white"
        textAlign="center"
        onClick={() => setIndex(index + 1)}
      >
        {mensaje[index]}
      </Button>
    </VStack>
  );
};

export default BtnAlegria;
