import axios from "axios";
import { useQuery } from "react-query";
import { IPatient } from "../common/network/interfaces";
import { PATIENTS_ENDPOIN } from "../common/network/endpoints";
import { ListCounter, ListItensInfoContainer, ListTitle, MainContainer, PatientCardContainer, PatientInfoContainer, PatientInfoText, PatientName, PatientProfileIcon } from "./styles";
import FameleProfileIcon from '../assets/images/patient-profile-icon-female.png'
import MaleProfileIcon from '../assets/images/patient-profile-icon-male.png'
import { DefaultSearchComponent } from "../components/defaultSearchComponent/defaultSearchComponent";
import { useEffect, useRef, useState } from "react";


interface IListPatients {
  onClick : (patient : IPatient) => void
}


export const ListPatients: React.FC<IListPatients> = ({onClick}) => {
  
    const [patientList, setPatientList] = useState<IPatient[]>([])
    const [totalPatients, setTotalPatients] = useState(0)

    const { data, isLoading, error } = useQuery<IPatient[]>(
      'patients-list-key',
      async () => {
        const response = await axios.get<IPatient[]>(PATIENTS_ENDPOIN);
        const responseData = response.data || [];

        setPatientList(responseData);
        setTotalPatients(responseData.length || 0);
    
        return responseData;
      },
      { staleTime: 300000 }
    );
    
    if (isLoading && !data) {
     
      return <p>Loading...</p>;
    }

    const handleWithSearchTextChange = (value: string) => {
      if (isLoading) {
        return;
      }
    
      const filteredPatients = data?.filter((patient) =>
        patient.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setPatientList(filteredPatients || []);
      setTotalPatients(filteredPatients?.length || 0)
    };

    return (   
          <MainContainer>
            <ListItensInfoContainer>
              <ListTitle>Patients List</ListTitle>
              <ListCounter>Total: {totalPatients}</ListCounter>
              <DefaultSearchComponent onTextChange={ value => handleWithSearchTextChange(value)}/>
            </ListItensInfoContainer>
           
              <ul>
                {patientList?.map(patient => (
                  <li key={patient.id}>{
                    <PatientCardContainer onClick={() => onClick(patient)}>
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
      );
}