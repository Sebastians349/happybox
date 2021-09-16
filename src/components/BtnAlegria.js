import React, { useState } from 'react';
import { VStack, Text, Code } from '@chakra-ui/layout';
import BtnConciencia from './BtnConciencia';
import { Button } from '@chakra-ui/button';

const BtnAlegria = () => {
  const [contador, setContador] = useState(0);

  return (
    <VStack spacing={8}>
      <Button
        onClick={() => setContador(contador + 1)}
        colorScheme="teal"
        variant="ghost"
        h="auto"
        p={2}
        fontSize="9xl"
      >
        🎉
      </Button>
      <Text fontSize="x-large" textAlign="center" fontWeight="semibold">
        Sos un toque más feliz hace <Code fontSize="xl">{contador}</Code>{' '}
        clicks.
      </Text>
      <BtnConciencia contador={contador} />
    </VStack>
  );
};

export default BtnAlegria;
