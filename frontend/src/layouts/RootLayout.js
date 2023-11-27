import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

export default function RootLayout(){
    return(
        <Grid templateColumns="repeat(6, 1fr)">
            <GridItem
                as="aside"
                colSpan={{ base: 6, lg: 2, xl: 1 }}
                bgGradient="linear-gradient(to-t, #05C676, #4CBCAC)"
                minHeight={{ lg: "100vh" }}
                p={{ base: "20px", lg: "30px" }}
            >
            <Sidebar/>
            </GridItem>
            <GridItem
            as= "main"
            colSpan={{base: 6, lg: 4, xl: 5}}
            p="40px"
            >
                <Outlet/>
            </GridItem>
        </Grid>
    )
}