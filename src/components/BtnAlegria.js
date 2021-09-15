import React, { useState } from 'react';
import { VStack, Text, Code } from '@chakra-ui/layout';
import BtnConciencia from './BtnConciencia';

const BtnAlegria = () => {
  const [contador, setContador] = useState(0);
  console.log('anda');

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
        Sos un toque más feliz hace <Code fontSize="xl">{contador}</Code>{' '}
        clicks.
      </Text>
      <BtnConciencia contador={contador} />
    </VStack>
  );
};

export default BtnAlegria;
