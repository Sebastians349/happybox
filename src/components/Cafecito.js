import React from 'react';
import { HStack, Stack, Text, Link, Center, Image } from '@chakra-ui/react';

const Cafecito = () => {
  return (
    <HStack>
      <Stack direction={['column', 'row']}>
        <Center>
          <Text fontSize="md" fontWeight="medium" textAlign="center">
            ¿Sos un toque más feliz? Considerá invitarme un 👉
          </Text>
          <Link href="https://cafecito.app/sebote">
            <Image
              src="cafecito.png"
              borderRadius="5px"
              alt="logo de cafecito"
              fallbackSrc="https://via.placeholder.com/50"
            />
          </Link>
        </Center>
      </Stack>
    </HStack>
  );
};

export default Cafecito;
