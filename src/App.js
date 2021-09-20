import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        justify="space-between"
        boxShadow="xs"
        p="2"
        borderBottom="1px"
        borderBottomColor="yellow.200"
      >
        <Header />
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
