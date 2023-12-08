import axios from "axios";

// const apiUrl = "http://localhost:8080";
const apiUrl = "https://medrecfmd-backend.up.railway.app";

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

    fetchPatientsForSearch: async () => {
        const response = await axios.get(`${apiUrl}/getPatientsDTO`, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    },

    fetchPatientForSearch: async (pat_idnp) => {
        const response = await axios.get(`${apiUrl}/getPatientDTO`, {
            params: {
                "idnp": pat_idnp.split("=")[1]
            },
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
        });
        return response;
    },

    fetchMedicInfo: async (idnp) => {
        const response = await axios.post(`${apiUrl}/api/informatii_generale_medic`, { idnp }, {
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
    },

    fetchPrescriptionReports: async(idnp) => {
        const response = await axios.post(`${apiUrl}/api/getPrescriptionsFront`, {idnp}, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    },

    fetchVacciniReports: async(idnp) => {
        const response = await axios.post(`${apiUrl}/api/getVaccinaReportsFront`, {idnp}, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    },

    addPatient: async (patientData) => {
        const response = await axios.post(`${apiUrl}/addPatient`, patientData, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    },

    addMedicalRecord: async (medicalRecordData) => {
        const response = await axios.post(`${apiUrl}/addMedicalRecord`, medicalRecordData, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    },

    addInstitution: async (institutionData) => {
        const response = await axios.post(`${apiUrl}/addInstitution`, institutionData, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    },

    getMedicalRecordIdByPatient: async (pat_idnp) => {
        const response = await axios.get(`${apiUrl}/getMedicalRecordIdByPatient`, {
            params: {
                "idnp": pat_idnp
            },
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        });
        return response;
    }
};




