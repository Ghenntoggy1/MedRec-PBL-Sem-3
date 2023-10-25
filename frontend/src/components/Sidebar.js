import { Text, List, ListItem, Divider, Image } from "@chakra-ui/react"
import { NavLink, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { data } from "../api/data";

export default function Sidebar() {
  const { idnp } = useParams();

  const [patientData, setPatientData] = useState(null);
  useEffect(() => {
    const fetchPatientData = async () => {
      
      try {
        const response = await data.fetchPatientInfo(idnp);

        console.log('API Response:', response);

        if (response.status === 200) {
          setPatientData(response.data);
        } else {
          console.error("Patient not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

      fetchPatientData();
    }, [idnp]);

  const isActive = (path) => {
    return window.location.pathname === path;
  };

  const activeLinkStyle = {
    borderBottom: "1.8px solid white",
  };

  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <div style={{ marginRight: "1rem" }}>
          <Image src='/images/pacient_icon_white.png' alt="Icon" boxSize="5rem" />
        </div>
        <div>
          <Text fontSize="2xl" fontWeight="bold">
            {patientData ? patientData.firstName + " " + patientData.lastName : "Loading..."}
          </Text>
        </div>
        <Divider my={5} borderColor="white" borderWidth="1.8px" />
      </ListItem>
      <ListItem>
        <NavLink to={`/pacient/${idnp}`} style={isActive(`/pacient/${idnp}`) ? activeLinkStyle : {}}>
          Informatii generale
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/pacient/${idnp}/analize`} style={isActive(`/pacient/${idnp}/analize`) ? activeLinkStyle : {}}>
          Analize
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/pacient/${idnp}/boli_cronice`} style={isActive(`/pacient/${idnp}/boli_cronice`) ? activeLinkStyle : {}}>
          Boli cronice
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/pacient/${idnp}/alergii`} style={isActive(`/pacient/${idnp}/alergii`) ? activeLinkStyle : {}}>
          Alergii
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/pacient/${idnp}/operatii`} style={isActive(`/pacient/${idnp}/operatii`) ? activeLinkStyle : {}}>
          Operatii
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/pacient/${idnp}/prescriptii`} style={isActive(`/pacient/${idnp}/prescriptii`) ? activeLinkStyle : {}}>
          Prescriptii
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/pacient/${idnp}/diagnoze`} style={isActive(`/pacient/${idnp}/diagnoze`) ? activeLinkStyle : {}}>
          Diagnoze
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/pacient/${idnp}/vaccini`} style={isActive(`/pacient/${idnp}/vaccini`) ? activeLinkStyle : {}}>
          Vaccini
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/pacient/${idnp}/istorie_totala`} style={isActive(`/pacient/${idnp}/istorie_totala`) ? activeLinkStyle : {}}>
          Istoria totala
        </NavLink>
      </ListItem>
    </List>
  );
}
