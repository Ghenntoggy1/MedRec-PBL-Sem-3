import { Text, List, ListItem, Divider, Image } from "@chakra-ui/react"
import { NavLink, useLocation, useRouteMatch } from "react-router-dom"


export default function SidebarDoctor(){
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const activeLinkStyle = {
    borderBottom: " 1.8px solid white",
  };


  return(
    <List color="white" fontFamily="molengo"fontSize="1.2em" spacing={4}>
       <ListItem>
       <div style={{ marginRight: "1rem" }}>
          <Image src='/images/medic_icon_white.png' alt="Icon" boxSize="5rem" />
        </div>
        <div>
       <Text fontSize="2xl" fontWeight="bold" > 
        NUME, PRENUME
       </Text>
       </div>
       <Divider my={5} borderColor="white" borderWidth="1.8px" />
       <div>
       <Text fontSize="1xl" fontWeight="bold" > 
        NUME, PRENUME PACIENT
       </Text>
       </div>
       <Divider my={5} borderColor="white" borderWidth="1.8px" />
       
      </ListItem>
      
      <ListItem>
      <NavLink to="/" style={isActive("/") ? activeLinkStyle : {}}>
          Pacient
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/programare"style={isActive("/programare") ? activeLinkStyle : {}}>
          Programare Pacient
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/analize"style={isActive("/analize") ? activeLinkStyle : {}}>
          Analize
        </NavLink>
      </ListItem>
    
      <ListItem>
        <NavLink to="/boli_cronice_doctor"style={isActive("/boli_cronice_doctor") ? activeLinkStyle : {}}>
          Boli cronice
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/alergii_doctor"style={isActive("/alergii_doctor") ? activeLinkStyle : {}}>
          Alergii
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/operatii_doctor"style={isActive("/operatii_doctor") ? activeLinkStyle : {}}>
          Operatii
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/prescriptii_doctor"style={isActive("/prescriptii_doctor") ? activeLinkStyle : {}}>
          Prescriptii
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/diagnoze_doctor"style={isActive("/diagnoze_doctor") ? activeLinkStyle : {}}>
          Diagnoze
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/vaccini_doctor"style={isActive("/vaccini_doctor") ? activeLinkStyle : {}}>
          Vaccini
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/istorie_totala_doctor"style={isActive("/istorie_totala_doctor") ? activeLinkStyle : {}}>
          Istoria totala
        </NavLink>
      </ListItem>
       
     
    </List>
  )
  
}
