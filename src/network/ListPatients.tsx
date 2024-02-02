import axios from "axios";
import { useQuery } from "react-query";
import { IPatient } from "../common/network/interfaces";
import { PATIENTS_ENDPOIN } from "../common/network/endpoints";
import { MainContainer, PatientCardContainer, PatientInfoContainer, PatientInfoText, PatientName, PatientProfileIcon } from "./styles";
import FameleProfileIcon from '../assets/images/patient-profile-icon-female.png'
import MaleProfileIcon from '../assets/images/patient-profile-icon-male.png'

export const ListPatients: React.FC = () => {
  
    const { data, isLoading, error } = useQuery<IPatient[]>('patients-list-key', async () => {
        const response = await axios.get<IPatient[]>(PATIENTS_ENDPOIN);
        return response.data;
      }, { staleTime: 300000 });
    
      if (isLoading) return <p>Loading...</p>;
    
      if (error) {
        console.error('Error fetching data:', error);
        return <p>Error fetching data: {(error as Error)?.message || 'Unknown error'}</p>;
      }


    return (
        <>
          <h1>List of Patients</h1>
     
          <MainContainer>
          <ul>
              {data?.map(patient => (
                <li key={patient.id}>{
                  <PatientCardContainer>
                      <PatientProfileIcon src={patient.gender === 'Male' ? MaleProfileIcon : FameleProfileIcon}/>
                      <PatientInfoContainer>
                        <PatientInfoText>{patient.name}</PatientInfoText>
                        <PatientInfoText>Age: {patient.age}</PatientInfoText>
                        <PatientInfoText>{patient.gender}</PatientInfoText>
                      </PatientInfoContainer>
                  </PatientCardContainer>
                  }</li>
              ))}
            </ul>
          </MainContainer>
        </>
      );
}