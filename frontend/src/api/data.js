import axios from "axios";

const apiUrl = "http://localhost:8080";

export const data = {
    CheckPacientId: async (idnp) => {
        const response = await axios.post(`${apiUrl}/api/login/pacient`, { idnp }, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });

        return response;
    },
    
    CheckMedicId: async (idnp) => {
        const response = await axios.post(`${apiUrl}/api/login/medic`, { idnp }, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });

        return response;
    },

    fetchPatientInfo: async (idnp) => {
        const response = await axios.post(`${apiUrl}/api/informatii_generale`, { idnp }, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          });

          return response;
      },
};




