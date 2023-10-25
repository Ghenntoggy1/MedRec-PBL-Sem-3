import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from 'react-router-dom';
import customTheme from './style/customTheme';
import RootLayout from './layouts/RootLayout';
import Pacient from './pages/Pacient';
import Diagnoze from './pages/Diagnoze';
import Analize from './pages/Analize';
import BoliCronice from './pages/BoliCronice';
import Alergii from './pages/Alergii';
import Operatii from './pages/Operatii';
import Prescriptii from './pages/Prescriptii';
import Vaccini from './pages/Vaccini';
import IstorieTotala from './pages/IstoriaTotala';
import ProgramarePacient from './pages/ProgramarePacient';



const router = createBrowserRouter(
  createRoutesFromElements(
    

    <Route path="/" exact element={<RootLayout />} >
      <Route index element={<Pacient />} />
      <Route path="programare" element={<ProgramarePacient/>}/>
      <Route path="analize" element={<Analize/>}/>
      <Route path="boli_cronice" element={<BoliCronice/>}/>
      <Route path="alergii" element={<Alergii/>}/>
      <Route path="operatii" element={<Operatii/>}/>
      <Route path="prescriptii" element={<Prescriptii/>}/>
      <Route path="diagnoze" element={<Diagnoze/>}/>
      <Route path="vaccini" element={<Vaccini/>}/>
      <Route path="istorie_totala" element={<IstorieTotala/>}/>
    </Route>

  )
)

function App() {
  return(
    <ChakraProvider theme={customTheme}>
        <CSSReset />
            <RouterProvider router={router}/>
    </ChakraProvider>
  )
   }
    
 export default App;