import React from 'react';
import { HStack, Heading } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { GiClick } from 'react-icons/gi';
const LogoHeader = () => {
  return (
    <HStack>
      <Icon w={6} h={6} as={GiClick} />{' '}
      <Heading size="sm" textTransform="uppercase">
        Botón De Felicidad
      </Heading>
    </HStack>
  );
};

export default LogoHeader;
