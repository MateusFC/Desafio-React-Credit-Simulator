import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box, Image } from '@chakra-ui/react';
import AmountStep from './pages/AmountStep';
import MonthsStep from './pages/MonthsStep';
import ResumeStep from './pages/ResumeStep';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bg="blue.500">
          <Box bg="white" width="40%" padding="40px" borderRadius="md">
            <Box display="flex" alignItems="center" justifyContent="center" mb={10} h="100%">
              <Image src={'/public/logo.png'} alt={'logo'} objectFit="cover" h={120} />
            </Box>
            <Routes>
              <Route path="/" element={<AmountStep />} />
              <Route path="/months" element={<MonthsStep />} />
              <Route path="/resume" element={<ResumeStep />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
