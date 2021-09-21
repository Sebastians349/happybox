import React from 'react';
import { Stack, Text, Link, Center, Image } from '@chakra-ui/react';

const Cafecito = () => {
  return (
    <Stack direction={['column-reverse', 'row']}>
      <Text fontSize="sm" fontWeight="medium" textAlign="center">
        ¿Sos un toque más feliz? Considerá regalarme un
        <Link href="https://cafecito.app/sebote">
          <Center>
            <Image
              mt="2"
              src="/public/cafecito.png"
              w="60px"
              h="20px"
              borderRadius="5px"
              alt="logo de cafecito"
              fallbackSrc="https://via.placeholder.com/50"
            />
          </Center>
        </Link>
      </Text>
    </Stack>
  );
};

export default Cafecito;
