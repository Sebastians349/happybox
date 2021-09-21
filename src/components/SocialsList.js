import React from 'react';
import { Stack, Button, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { IconButton, Tooltip } from '@chakra-ui/react';

const SocialsList = () => {
  return (
    <Stack direction={['column', 'row']}>
      <Tooltip fontWeight="light" label="¿Posta? ¿Un mail?">
        <IconButton variant="ghost" icon={<FaEnvelope />}></IconButton>
      </Tooltip>
      <Tooltip fontWeight="light" label="¿Hacen falta redes para esto?">
        <IconButton variant="ghost" icon={<FaFacebook />}></IconButton>
      </Tooltip>
      <Tooltip fontWeight="light" label="¿Hacen falta redes para esto?">
        <IconButton variant="ghost" icon={<FaInstagram />}></IconButton>
      </Tooltip>
      <Tooltip fontWeight="light" label="Si no me vas a insultar, si">
        <Link href="https://twitter.com/ssimarro1" isExternal>
          <IconButton variant="ghost" icon={<FaTwitter />}></IconButton>
        </Link>
      </Tooltip>
    </Stack>
  );
};

export default SocialsList;
