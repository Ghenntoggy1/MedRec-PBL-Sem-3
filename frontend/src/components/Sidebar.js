import { Text, List, ListItem, Divider, Image } from "@chakra-ui/react"
import { NavLink, useLocation, useRouteMatch } from "react-router-dom"


export default function Sidebar(){
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
          <Image src='/images/pacient_icon_white.png' alt="Icon" boxSize="5rem" />
        </div>
        <div>
       <Text fontSize="2xl" fontWeight="bold" > 
        NUME, PRENUME
       </Text>
       </div>
       <Divider my={5} borderColor="white" borderWidth="1.8px" />
      </ListItem>
      <ListItem>
      <NavLink to="/" style={isActive("/") ? activeLinkStyle : {}}>
          Informatii generale
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/analize"style={isActive("/analize") ? activeLinkStyle : {}}>
          Analize
        </NavLink>
      </ListItem>
    
      <ListItem>
        <NavLink to="/boli_cronice"style={isActive("/boli_cronice") ? activeLinkStyle : {}}>
          Boli cronice
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/alergii"style={isActive("/alergii") ? activeLinkStyle : {}}>
          Alergii
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/operatii"style={isActive("/operatii") ? activeLinkStyle : {}}>
          Operatii
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/prescriptii"style={isActive("/prescriptii") ? activeLinkStyle : {}}>
          Prescriptii
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/diagnoze"style={isActive("/diagnoze") ? activeLinkStyle : {}}>
          Diagnoze
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/vaccini"style={isActive("/vaccini") ? activeLinkStyle : {}}>
          Vaccini
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/istorie_totala"style={isActive("/istorie_totala") ? activeLinkStyle : {}}>
          Istoria totala
        </NavLink>
      </ListItem>
       
     
    </List>
  )
  
}
