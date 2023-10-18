import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import customTheme from './style/customTheme';
import Pacient from './pages/Pacient';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/Pacient" element={<Pacient />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
