import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      borderTop="1px"
      borderTopColor="yellow.400"
    >
      <Text textAlign="center">esto es un footer</Text>
    </Flex>
  );
};

export default Footer;
