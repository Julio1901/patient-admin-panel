import { DefaultHeader } from "../../components/defaultHeader/defaultHeader"
import { DefaultLateralMenu } from "../../components/defaultLateralMenu/defaultLateralMenu"
import { ListPatients } from "../../network/ListPatients"
import { BodyContainer, Divider, EmptyStateContainer, EmptyStateImage, MainContainer, PatientDetailsContainer, PatientDetailsImageProfile, PatientDetailsInfoContainer, PatientDetailsLabelText, PatientDetailsText, PatientInfoContainer, PatientListContainer } from "./styles"
import EmpytStateImage from "../../assets/images/nurse-image.png"
import { IPatient } from "../../common/network/interfaces"
import { useState } from "react"
import MaleProfileIcon from '../../assets/images/patient-profile-icon-male.png'
import FameleProfileIcon from '../../assets/images/patient-profile-icon-female.png'

export const Patients = () => {

    const [patientDisplayDetails, setPatientDisplayDetails] = useState<IPatient|null >(null)

    const handleOutsideClick = (patient: IPatient) => {
        setPatientDisplayDetails(patient)
        console.log('Selected Patient:', patient);
      };
    
        return(
            <MainContainer>
            <DefaultLateralMenu/>
            <BodyContainer>
                <DefaultHeader title="Patients"/>
                <PatientInfoContainer>
                    <PatientListContainer>
                        <ListPatients onClick={(patient) => handleOutsideClick(patient)}/>
                    </PatientListContainer>
                    <Divider/>
                    {patientDisplayDetails === null ? (
                        <EmptyStateContainer>
                        <EmptyStateImage src={EmpytStateImage}/>
                        <h1>Click on the patient to view their information</h1>
                    </EmptyStateContainer>
                    ) : (
                        <PatientDetailsContainer>
                            <PatientDetailsImageProfile src={patientDisplayDetails.gender === 'Male' ? MaleProfileIcon : FameleProfileIcon}/>
                            <PatientDetailsInfoContainer>
                                <PatientDetailsLabelText>Name</PatientDetailsLabelText>
                                <PatientDetailsText>{patientDisplayDetails.name}</PatientDetailsText>
                                <PatientDetailsLabelText>Age</PatientDetailsLabelText>
                                <PatientDetailsText>{patientDisplayDetails.age}</PatientDetailsText>
                                <PatientDetailsLabelText>Gender</PatientDetailsLabelText>
                                <PatientDetailsText>{patientDisplayDetails.gender}</PatientDetailsText>
                                <PatientDetailsLabelText>CPF</PatientDetailsLabelText>
                                <PatientDetailsText>{patientDisplayDetails.cpf}</PatientDetailsText>
                                <PatientDetailsLabelText>Adress</PatientDetailsLabelText>
                                <PatientDetailsText>{patientDisplayDetails.address}</PatientDetailsText>
                                <PatientDetailsLabelText>Phone</PatientDetailsLabelText>
                                <PatientDetailsText>{patientDisplayDetails.phone}</PatientDetailsText>
                                <PatientDetailsLabelText>Height</PatientDetailsLabelText>
                                <PatientDetailsText>{patientDisplayDetails.height}</PatientDetailsText>
                                <PatientDetailsLabelText>Blood Type</PatientDetailsLabelText>
                                <PatientDetailsText>{patientDisplayDetails.blood_type}</PatientDetailsText>
                                <PatientDetailsLabelText>Allergy Medication</PatientDetailsLabelText>
                                <PatientDetailsText>{patientDisplayDetails.allergy_medication}</PatientDetailsText>




                            </PatientDetailsInfoContainer>
                        </PatientDetailsContainer>
                    )}
                </PatientInfoContainer>
            </BodyContainer>
        </MainContainer>
        )
}