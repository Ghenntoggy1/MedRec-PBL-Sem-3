import { Text, List, ListItem, Divider, Image } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom"
import { data } from "../api/data";


export default function SidebarDoctorPatSel(){
  const { idnp, pat_idnp } = useParams();
  const location = useLocation();
  const [medicData, setMedicData] = useState(null);
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const fetchMedicData = async () => {
      try {
        const response = await data.fetchMedicInfo(idnp);

        console.log('API Response:', response);

        if (response.status === 200) {
          setMedicData(response.data);
        } else {
          console.error("Medic not found");
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    const fetchPatientData = async (patIdnp) => {
      try {
        const response = await data.fetchPatientInfo(patIdnp);

        console.log('API Response: ', response);

        if (response.status === 200) {
          setPatientData(response.data);
        } else {
          console.error("Patient not found");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchMedicData();
    if (pat_idnp != null) {
      fetchPatientData(pat_idnp.split("=")[1]);
    }
  }, [idnp, pat_idnp]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const activeLinkStyle = {
    borderBottom: " 1.8px solid white",
  };



  return(
    <List color="white" fontSize="1.2em" spacing={4}>
       <ListItem>
       <div style={{ marginRight: "1rem" }}>
          <Image src='/images/medic_icon_white.png' alt="Icon" boxSize="5rem" />
        </div>
       <div>
       <Text fontSize="2xl" fontWeight="bold" > 
        {medicData ? medicData.firstName + " " + medicData.lastName : "Loading..."}
       </Text>
       </div>
       </ListItem>
       {patientData != null ? 
       (<ListItem>
          <Divider my={5} borderColor="white" borderWidth="1.8px" />
            <div>
              <Text fontSize="1xl" fontWeight="bold" > 
                Pacient selectat: {patientData.firstName} {patientData.lastName}
              </Text>
            </div>
          <Divider my={5} borderColor="white" borderWidth="1.8px" />
        </ListItem>
       ) : (<></>)}
      <ListItem>
      <NavLink to={`/medic/${idnp}`} style={isActive(`/medic/${idnp}`) ? activeLinkStyle : {}}>
          Profilul Meu
      </NavLink>
      </ListItem>
      <ListItem>
      <NavLink to={`/medic/${idnp}/cautare`} style={isActive(`/medic/${idnp}/cautare`) ? activeLinkStyle : {}}>
          Caută Pacient
        </NavLink>
      </ListItem>
      {patientData != null ? (
      <>
      <ListItem>
        <NavLink to={`/medic/${idnp}/programare`} style={isActive(`/medic/${idnp}/programare`) ? activeLinkStyle : {}}>
          Programare Pacient
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/medic/${idnp}/informatii_generale`} style={isActive(`/medic/${idnp}/informatii_generale`) ? activeLinkStyle : {}}>
          Informații Generale
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/analize" style={isActive("/analize") ? activeLinkStyle : {}}>
          Analize
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/boli_cronice_doctor" style={isActive("/boli_cronice_doctor") ? activeLinkStyle : {}}>
          Boli cronice
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/alergii_doctor" style={isActive("/alergii_doctor") ? activeLinkStyle : {}}>
          Alergii
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/operatii_doctor" style={isActive("/operatii_doctor") ? activeLinkStyle : {}}>
          Operatii
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/prescriptii_doctor" style={isActive("/prescriptii_doctor") ? activeLinkStyle : {}}>
          Prescriptii
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/diagnoze_doctor" style={isActive("/diagnoze_doctor") ? activeLinkStyle : {}}>
          Diagnoze
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/vaccini_doctor" style={isActive("/vaccini_doctor") ? activeLinkStyle : {}}>
          Vaccini
        </NavLink>
      </ListItem>
      </>
      ) : (<></>)}
      <ListItem>
        <NavLink to="/" style={isActive("/") ? activeLinkStyle : {}}>
          Delogare
        </NavLink>
      </ListItem>
    </List>
  )
  
}
