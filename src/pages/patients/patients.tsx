import { DefaultHeader } from "../../components/defaultHeader/defaultHeader"
import { DefaultLateralMenu } from "../../components/defaultLateralMenu/defaultLateralMenu"
import { ListPatients } from "../../network/ListPatients"
import { BodyContainer, Divider, EmptyStateContainer, EmptyStateImage, MainContainer, PatientInfoContainer, PatientListContainer } from "./styles"
import EmpytStateImage from "../../assets/images/nurse-image.png"

export const Patients = () => {
        return(
            <MainContainer>
            <DefaultLateralMenu/>
            <BodyContainer>
                <DefaultHeader title="Patients"/>
                <PatientInfoContainer>
                    <PatientListContainer>
                        <ListPatients/>
                    </PatientListContainer>
                    <Divider/>
                    <EmptyStateContainer>
                        <EmptyStateImage src={EmpytStateImage}/>
                        <h1>CLICK IN PATIENT TO DISPLAY YOUR INFO</h1>
                    </EmptyStateContainer>
                </PatientInfoContainer>
            </BodyContainer>
        </MainContainer>
        )
}