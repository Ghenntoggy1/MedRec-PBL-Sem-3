import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
      },
      body: {
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        background: "#fff2ce",
      },
    },
  },
  });

export default customTheme;