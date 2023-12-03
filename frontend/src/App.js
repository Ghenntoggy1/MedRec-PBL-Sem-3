import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import customTheme from './style/customTheme';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import StartPage from './pages/StartPage';
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
import RootLayoutDoctor from './layouts/RootLayoutDoctor';
import Doctor from './pages/Doctor';
import SearchPage from './pages/SearchPage'
import PacientDoctor from './pages/PacientDoctor';
import AnalizeDoctor from './pages/AnalizeDoctor';
import AlergiiDoctor from './pages/AlergiiDoctor';
import BoliCroniceDoctor from './pages/BoliCroniceDoctor';
import OperatiiDoctor from './pages/OperatiiDoctor';
import PrescriptiiDoctor from './pages/PrescriptiiDoctor';
import DiagnozeDoctor from './pages/DiagnozeDoctor';
import VacciniDoctor from './pages/VacciniDoctor';

function PatientRoot({ idnp }) {
  return (
    <RootLayout>
      <Outlet idnp={idnp} />
    </RootLayout>
  )
}

function DoctorRoot({ idnp }) {
  return (
    <RootLayoutDoctor>
      <Outlet idnp={idnp} />
    </RootLayoutDoctor>
  )
}

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <BrowserRouter>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="/login/:userType" element={<LoginPage />} />
          <Route path="/mainpage/:userType" element={<MainPage />} />
          <Route path="/pacient/:idnp" element={<PatientRoot />}>
            <Route index element={<Pacient />} />
            <Route path="analize" element={<Analize />} />
            <Route path="boli_cronice" element={<BoliCronice />} />
            <Route path="alergii" element={<Alergii />} />
            <Route path="operatii" element={<Operatii />} />
            <Route path="prescriptii" element={<Prescriptii />} />
            <Route path="diagnoze" element={<Diagnoze />} />
            <Route path="vaccini" element={<Vaccini />} />
            <Route path="istorie_totala" element={<IstorieTotala />} />
          </Route>
          <Route path="/medic/:idnp" element={<DoctorRoot />}>
            <Route index element={<Doctor />} />
            <Route path="cautare" element={<SearchPage />} />
            <Route path="adaugare" element={<SearchPage />}/>
            <Route path=":pat_idnp" element={<Doctor />} />
            <Route path=":pat_idnp/cautare" element={<SearchPage />}/>
            <Route path=":pat_idnp/adaugare" element={<SearchPage />} />
            <Route path=":pat_idnp/informatii_generale" element={<PacientDoctor />}/>
            <Route path=":pat_idnp/programare" element={<ProgramarePacient />}/>
            <Route path=":pat_idnp/analiza" element={<AnalizeDoctor />}/>
            <Route path=":pat_idnp/alergii" element={<AlergiiDoctor />} />
            <Route path=":pat_idnp/boli_cronice" element={<BoliCroniceDoctor />} />
            <Route path=":pat_idnp/operatii" element={<OperatiiDoctor />} />
            <Route path=":pat_idnp/prescriptii" element={<PrescriptiiDoctor />} />
            <Route path=":pat_idnp/diagnoze" element={<DiagnozeDoctor />} />
            <Route path=":pat_idnp/vaccini" element={<VacciniDoctor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
