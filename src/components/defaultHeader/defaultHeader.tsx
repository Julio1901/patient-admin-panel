import { getDoctorName } from "../../utils/mockDoctorName"
import { getProfilePicture } from "../../utils/mockProfilePicture"
import { ProfilePicture } from "../profilePicture/profilePicture"
import { MainContainer, HeaderTitle, ImageContainer, TitleContainer, DoctorName, NameContainer } from "./styles"

interface IDefaultHeader {
    title: string
}

export const DefaultHeader : React.FC<IDefaultHeader> = ({title}) => {
    
    const profilePicture = getProfilePicture()
    const doctorName = getDoctorName()

    return(
        <MainContainer>
            <ImageContainer>
                <ProfilePicture imgResource={profilePicture}/>
                <NameContainer>
                    <DoctorName style={{fontSize: 15, marginTop: 'auto', marginRight: 5}}>Dr(a)</DoctorName>
                    <DoctorName>{doctorName}</DoctorName>
                </NameContainer>
            </ImageContainer>
            <TitleContainer>
                <HeaderTitle>{title}</HeaderTitle>
            </TitleContainer>
           
        </MainContainer>
    )



}