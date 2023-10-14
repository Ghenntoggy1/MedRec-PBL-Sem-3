import { ChakraProvider, CSSReset} from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import PacientLogin from './pages/PacientLogin';
import customTheme from './style/customTheme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider theme={customTheme}>
    <CSSReset />
    <PacientLogin />
  </ChakraProvider>
);