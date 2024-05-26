import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { LimitsProvider } from './context/limits';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <LimitsProvider>
        <AppRoutes />
      </LimitsProvider>
    </ChakraProvider>
  );
};

export default App;
