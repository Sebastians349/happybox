import { Stack } from '@chakra-ui/layout';
import React from 'react';
import Cafecito from './Cafecito';
import Seba from './Seba';

const Footer = () => {
  return (
    <Stack
      direction={['column-reverse', 'row']}
      mt="4"
      justify="space-between"
      boxShadow="dark-lg"
      p="1"
      rounded="md"
      align="center"
    >
      <Seba />
      <Cafecito />
      <Seba />
    </Stack>
  );
};

export default Footer;
