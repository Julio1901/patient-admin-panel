import { DefaultHeader } from "../../components/defaultHeader/defaultHeader"
import { DefaultLateralMenu } from "../../components/defaultLateralMenu/defaultLateralMenu"
import { ListPatients } from "../../network/ListPatients"
import { BodyContainer, MainContainer } from "./styles"


export const Patients = () => {

    return(
        <MainContainer>
            <DefaultLateralMenu/>
            <BodyContainer>
                <DefaultHeader title="Patients"/>
                <ListPatients/>
            </BodyContainer>
        </MainContainer>
            
        
    )


}