import React from 'react';
import { Link, Text } from '@chakra-ui/layout';

const Seba = () => {
  return (
    <Text fontSize="xs">
      👨‍💻 con ❤ por
      <Link isExternal href="https://sebasimarro.com">
        {' '}
        Sebastián Simarro{' '}
      </Link>
    </Text>
  );
};

export default Seba;
