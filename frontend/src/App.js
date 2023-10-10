import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import customTheme from './style/customTheme';
import { ChakraProvider, CSSReset} from '@chakra-ui/react';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <ChakraProvider theme={customTheme}>
        <CSSReset />
        <BrowserRouter>
            <Routes>
                <Route index element={<StartPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
  )
}
