import React, { useState } from 'react';
import { VStack, Text, Code } from '@chakra-ui/layout';
import BtnConciencia from './BtnConciencia';
import { Button } from '@chakra-ui/button';
import confetti from 'canvas-confetti';
import { Tooltip } from '@chakra-ui/react';

const BtnAlegria = () => {
  const [contador, setContador] = useState(0);

  // Use el increible canvas confetti , ==> https://github.com/catdad/canvas-confetti

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 },
  });

  const corneta = new Audio('https://bigsoundbank.com/UPLOAD/mp3/0241.mp3');
  //  a mi me causa mas gracia , tengo 5 años...

  corneta.play();

  return (
    <VStack spacing={8}>
      <Tooltip
        label="CLICKEAME, NO TE RESISTAS"
        borderRadius="md"
        fontWeight="light"
        placement="top"
      >
        <Button
          onClick={() => setContador(contador + 1)}
          boxShadow="xl"
          variant="ghost"
          h="auto"
          p={4}
          fontSize="9xl"
        >
          🎉
        </Button>
      </Tooltip>
      <Text fontSize="x-large" textAlign="center" fontWeight="semibold">
        Sos{' '}
        <Code fontSize="xl" color="blue" colorScheme="messenger">
          {contador}
        </Code>{' '}
        veces más feliz.
      </Text>
      <BtnConciencia contador={contador} />
    </VStack>
  );
};

export default BtnAlegria;
