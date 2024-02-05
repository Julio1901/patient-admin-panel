import { DefaultHeader } from "../../components/defaultHeader/defaultHeader"
import { DefaultLateralMenu } from "../../components/defaultLateralMenu/defaultLateralMenu"
import { ListPatients } from "../../network/ListPatients"
import { BodyContainer, Divider, EmptyStateContainer, EmptyStateImage, MainContainer, PatientInfoContainer, PatientListContainer } from "./styles"
import EmpytStateImage from "../../assets/images/nurse-image.png"
import { IPatient } from "../../common/network/interfaces"

export const Patients = () => {

    const handleOutsideClick = (patient: IPatient) => {
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
                    <EmptyStateContainer>
                        <EmptyStateImage src={EmpytStateImage}/>
                        <h1>Click on the patient to view their information</h1>
                    </EmptyStateContainer>
                </PatientInfoContainer>
            </BodyContainer>
        </MainContainer>
        )
}