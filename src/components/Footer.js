import { Stack } from '@chakra-ui/layout';
import React from 'react';
import Cafecito from './Cafecito';
import Seba from './Seba';
import SocialsList from './SocialsList';

const Footer = () => {
  return (
    <Stack
      direction={['column', 'row']}
      justify="space-between"
      // boxShadow="dark-lg"
      borderTop="1px"
      borderTopColor="yellow.200"
      p="1"
      align="center"
    >
      <SocialsList />
      <Cafecito />
      <Seba />
    </Stack>
  );
};

export default Footer;
