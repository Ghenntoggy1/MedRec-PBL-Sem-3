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

    fetchMedicalRecord: async (idnp) => {
        const response = await axios.post(`${apiUrl}/api/getMedicalRecord`, { idnp }, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    },

    fetchInstitutionName: async (idnp) => {
        const response = await axios.post(`${apiUrl}/getInstitutionByIdnp`, { idnp }, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    },

    fetchAllergyReports: async (idnp) => {
        const response = await axios.post(`${apiUrl}/api/getAllergyReportFront`, { idnp }, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    },

    fetchBoalaCronicaReports: async (idnp) => {
        const response = await axios.post(`${apiUrl}/api/getBoalaCronicaReportFront`, { idnp }, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    },

    fetchAnalizaReports: async (idnp) => {
        const response = await axios.post(`${apiUrl}/api/getAnalizaReportFront`, { idnp }, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    },

    fetchOperatieReports: async(idnp) => {
        const response = await axios.post(`${apiUrl}/api/getOperatieReportFront`, {idnp}, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    },

    fetchDiagnozaReports: async(idnp) => {
        const response = await axios.post(`${apiUrl}/api/getDiagnozaReportFront`, {idnp}, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    }
};




