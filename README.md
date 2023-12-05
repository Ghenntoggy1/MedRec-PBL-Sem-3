# MedRecPBLSem3 Project & API Documentation
PBL Project done during Semester 3 on 2nd Year as a FAF Student at TUM.MedRec is an App that will permit patients and doctors to access their Medical record in digital format - on the Website

## Technical Framework and Tools

- **Backend**:
    - Framework: [Spring Boot](https://spring.io/projects/spring-boot)

- **Frontend**:
    - Library: [ReactJS](https://reactjs.org/)
    - UI Library: [Chakra UI](https://chakra-ui.com/)

- **API Requests**:
    - Tool: [Postman](https://www.postman.com/)

- **Database**:
    - Database System: [MySQL](https://www.mysql.com/)
 
- **Deployment**:
    - SpringBOOT: [Railway App](https://railway.app/)
    - ReactJS: [Vercel](https://vercel.com/)
    - Database: [Railway App](https://railway.app/)

# Access to the Deployed Application (Available for all users):
Since we have 3 separate servers for backend, frontend and database, here are the access link to every component:
## Frontend Deployment - [medrecfmd.vercel.app](https://medrecfmd.vercel.app/)
This is the link you want to use in case you want to test the application. It is responsive and is connected to Backend and Database.
## Backend Deployment - [medrecfmd-backend.up.railway.app](https://medrecfmd-backend.up.railway.app/)
Initially, first page gives such error
``` html
Whitelabel Error Page
```
It's okay, you can check that it is working by accessing following link: [medrecfmd-backend.up.railway.app](https://medrecfmd-backend.up.railway.app/getPatients)
## Database Deployment:
Due to security insurance, we don't provide actual login data for MySQL database, you can check that database is populated through the backend deployment link.

## How to use our App?
First of all, you have to login either as a Patient or Doctor. Database provides a list of valid IDNPs for the login process. We recommend the use of the following:
Patient IDNPs:
```sh
Pat_IDNP#1: 1234567890123
Pat_IDNP#2: 3456789012345
Pat_IDNP#3: 1234567890122
```

Doctor IDNPs:
```sh
Doc_IDNP#1: 2001234567890
Doc_IDNP#2: 4001234567890
Doc_IDNP#3: 1101234567890
```

# Installation (In case you want to change something):

## Getting the Repository

1. **Clone the Repository**:
    - Open your terminal or command prompt.
    - Choose a directory on your local machine where you want to clone the repository.
    - Run the following command to clone the repository:
      ```sh
      git clone https://github.com/Ghenntoggy1/MedRec-PBL-Sem-3.git
      ```
   This will create a local copy of the project on your machine.

## Backend Setup

2. **Start the Backend**:
    - Navigate to the backend directory within the cloned repository:
      ```sh
      cd ../MedRec-PBL-Sem-3.git
      ```
    - Start the Spring Boot application from `MedRecPblSem3Application.java` by running it as a Java application in your favorite IDE or using the following command:
      ```sh
      mvn spring-boot:run
      ```
   The backend will run on `http://localhost:8080`.
    
3. **Postman Requests**:
    - Use Postman or your preferred API testing tool to send the following requests in the given order:
        1. AddPatients
        2. AddMedics
        3. AddMedicalRecords
        4. AddAllergyReports
        5. AddBoalaCronica Reports
        6. AddAnalizaReports
4. **Database Configuration:**

    - After the first run of the application, you should update the `application.properties` file to change the database creation behavior from "create" to "update." This ensures that your data is not reset each time the application starts.

      1. Navigate to the `src/main/resources` directory in the backend of your project.

      2. Open the `application.properties` file in a text editor.

      3. Locate the following line in the file:
         ```properties
         spring.jpa.hibernate.ddl-auto=create
         ```
         
      4. Change to:
         ```properties
         spring.jpa.hibernate.ddl-auto=update
         ```
## Frontend Setup

5. **Start the Frontend**:
    - Navigate to the frontend directory within the cloned repository:
      ```sh
      cd ../MedRec-PBL-Sem-3.git/frontend
      ```
    - Install the required dependencies:
      ```sh
      npm install
      ```
    - Start the ReactJS frontend application:
      ```sh
      npm start
      ```
   The frontend will be accessible at `http://localhost:3000`.

Your application is now set up and running. The ReactJS frontend will interact with the Spring Boot backend to provide the intended functionality.

# API Documentation:

## Login Controller

### Medic Login
- **Endpoint**: `POST /api/login/medic`
- **Description**: Allows a medic to log in using their IDNP.
- **Request Body**:
    - **Fields**:
        - `idnp` (string): The IDNP (Identification Number for Persons) of the medic.
- **Success Response**:
    - **Status**: 200 OK
    - **Response Body**: "LOGARE CA MEDIC CU SUCCES"
- **Unauthorized Response**:
    - **Status**: 401 Unauthorized
    - **Response Body**: "IDNP GREŞIT!"

### Patient Login
- **Endpoint**: `POST /api/login/pacient`
- **Description**: Allows a patient to log in using their IDNP.
- **Request Body**:
    - **Fields**:
        - `idnp` (string): The IDNP of the patient.
- **Success Response**:
    - **Status**: 200 OK
    - **Response Body**: "LOGARE CA PACIENT CU SUCCES! {patient_idnp_here}"
- **Unauthorized Response**:
    - **Status**: 401 Unauthorized
    - **Response Body**: "IDNP GREŞIT!"

## Medical Record Controller

### Add Medical Record
- **Endpoint**: `POST /addMedicalRecord`
- **Description**: Adds a new medical record for a patient.
- **Request Body**:
    - **Fields**:
        - `patientId` (string): The IDNP of the patient.
        - `medicId` (string): The IDNP of the medic responsible for the record.
        - `date` (string): The date of the medical record.
        - `description` (string): A description of the medical record.
- **Success Response**: Returns the saved medical record.

### Add Medical Records
- **Endpoint**: `POST /addMedicalRecords`
- **Description**: Adds multiple medical records for patients.
- **Request Body**: List of Medical Record JSON objects.
- **Success Response**: Returns a list of saved medical records.

### Get Medical Records
- **Endpoint**: `GET /getMedicalRecords`
- **Description**: Retrieves a list of all medical records.

### Get Medical Record By Patient
- **Endpoint**: `GET /getMedicalRecordByPatient`
- **Description**: Retrieves a medical record for a specific patient using their IDNP.
- **Request Parameter**:
    - `idnp` (string): Patient's IDNP.

## Medic Controller

### Add Medic
- **Endpoint**: `POST /addMedic`
- **Description**: Adds a new medic.
- **Request Body**:
    - **Fields**:
        - `idnp` (string): The IDNP of the medic.
        - `name` (string): The name of the medic.
        - `specialty` (string): The specialty of the medic.
- **Success Response**: Returns the saved medic.

### Add Medics
- **Endpoint**: `POST /addMedics`
- **Description**: Adds multiple medics.
- **Request Body**: List of Medic JSON objects.
- **Success Response**: Returns a list of saved medics.

### Get Medics
- **Endpoint**: `GET /getMedics`
- **Description**: Retrieves a list of all medics.

### Get Medic By IDNP
- **Endpoint**: `GET /getMedicByIdnp`
- **Description**: Retrieves a medic by their IDNP.
- **Request Parameter**:
    - `idnp` (string): Medic's IDNP.

## Patient Controller

### Add Patient
- **Endpoint**: `POST /addPatient`
- **Description**: Adds a new patient.
- **Request Body**:
    - **Fields**:
        - `idnp` (string): The IDNP of the patient.
        - `name` (string): The name of the patient.
- **Success Response**: Returns the saved patient.

### Add Patients
- **Endpoint**: `POST /addPatients`
- **Description**: Adds multiple patients.
- **Request Body**: List of Patient JSON objects.
- **Success Response**: Returns a list of saved patients.

### Get Patients
- **Endpoint**: `GET /getPatients`
- **Description**: Retrieves a list of all patients.

### Get Patient By IDNP
- **Endpoint**: `GET /getPatientByIdnp`
- **Description**: Retrieves a patient by their IDNP.
- **Request Parameter**:
    - `idnp` (string): Patient's IDNP.

## Institution Controller

### Add Institution
- **Endpoint**: `POST /addInstitution`
- **Description**: Adds a medical institution and associates it with a medical record.
- **Request Body**:
    - **Fields**:
        - `name` (string): The name of the institution.
- **Success Response**: Returns the saved institution.

## Informatii Generale Controller

### Get General Information
- **Endpoint**: `POST /informatii_generale`
- **Description**: Retrieves general information about a patient.
- **Request Body**:
    - **Fields**:
        - `idnp` (string): Patient's IDNP.
- **Success Response**: Returns patient's general information.

### Get Medical Record
- **Endpoint**: `POST /getMedicalRecord`
- **Description**: Retrieves the medical record of a patient.
- **Request Body**:
    - **Fields**:
        - `idnp` (string): Patient's IDNP.
- **Success Response**: Returns the medical record of the patient.

## Boala Cronica Report Controller

### Get Chronic Disease Reports (Front)
- **Endpoint**: `POST /getBoalaCronicaReportFront`
- **Description**: Retrieves chronic disease reports for a patient.
- **Request Body**:
    - **Fields**:
        - `idnp` (string): Patient's IDNP.
- **Success Response**: Returns a list of chronic disease reports for the patient.

### Get All Chronic Disease Reports
- **Endpoint**: `GET /getBoalaCronicaReports`
- **Description**: Retrieves a list of all chronic disease reports.

### Add Chronic Disease Report
- **Endpoint**: `POST /addBoalaCronicaReport`
- **Description**: Adds a chronic disease report and associates it with a medical record.
- **Request Body**: Boala Cronica Report JSON object.
    - **Fields**:
        - `boalaCronicaName` (string): The name of the chronic disease.
        - `medicName` (string): The name of the medic who diagnosed the disease.
        - `description` (string): A description of the disease.
        - `timestamp` (string): The timestamp of the report (e.g., "2023-10-27T12:45:00").
        - `medrecId` (string): The ID of the associated medical record.
- **Success Response**: Returns the saved chronic disease report.

### Add Chronic Disease Reports
- **Endpoint**: `POST /addBoalaCronicaReports`
- **Description**: Adds multiple chronic disease reports and associates them with medical records.
- **Request Body**: List of Boala Cronica Report JSON objects.
- **Success Response**: Returns a list of saved chronic disease reports.

## Analiza Report Controller

### Get Analysis Reports (Front)
- **Endpoint**: `POST /getAnalizaReportFront`
- **Description**: Retrieves analysis reports for a patient.
- **Request Body**:
    - **Fields**:
        - `idnp` (string): Patient's IDNP.
- **Success Response**: Returns a list of analysis reports for the patient.

### Get All Analysis Reports
- **Endpoint**: `GET /getAnalizaReports`
- **Description**: Retrieves a list of all analysis reports.

### Add Analysis Report
- **Endpoint**: `POST /addAnalizaReport`
- **Description**: Adds an analysis report and associates it with a medical record.
- **Request Body**: Analiza Report JSON object.
    - **Fields**:
        - `analizaName` (string): The name of the analysis.
        - `medicName` (string): The name of the medic who performed the analysis.
        - `labName` (string): The name of the laboratory where the analysis was conducted.
        - `values` (object): Key-value pairs of analysis values (e.g., "Hemoglobin": "13.5 g/dL").
        - `description` (string): A description of the analysis.
        - `timestamp` (string): The timestamp of the report (e.g., "2023-10-27T11:30:00").
        - `medrecId` (string): The ID of the associated medical record.
- **Success Response**: Returns the saved analysis report.

### Add Analysis Reports
- **Endpoint**: `POST /addAnalizaReports`
- **Description**: Adds multiple analysis reports and associates them with medical records.
- **Request Body**: List of Analiza Report JSON objects.
- **Success Response**: Returns a list of saved analysis reports.

## Allergy Report Controller

### Get Allergy Reports (Front)
- **Endpoint**: `POST /getAllergyReportFront`
- **Description**: Retrieves allergy reports for a patient.
- **Request Body**:
    - **Fields**:
        - `idnp` (string): Patient's IDNP.
- **Success Response**: Returns a list of allergy reports for the patient.

### Get All Allergy Reports
- **Endpoint**: `GET /getAllergyReports`
- **Description**: Retrieves a list of all allergy reports.

### Add Allergy Report
- **Endpoint**: `POST /addAllergyReport`
- **Description**: Adds an allergy report and associates it with a medical record.
- **Request Body**: Allergy Report JSON object.
    - **Fields**:
        - `allergyName` (string): The name of the allergy.
        - `medicName` (string): The name of the medic who diagnosed the allergy.
        - `description` (string): A description of the allergy.
        - `timestamp` (string): The timestamp of the report (e.g., "2023-10-27T10:15:00").
        - `medrecId` (string): The ID of the associated medical record.
- **Success Response**: Returns the saved allergy report.

### Add Allergy Reports
- **Endpoint**: `POST /addAllergyReports`
- **Description**: Adds multiple allergy reports and associates them with medical records.
- **Request Body**: List of Allergy Report JSON objects.
- **Success Response**: Returns a list of saved allergy reports.


