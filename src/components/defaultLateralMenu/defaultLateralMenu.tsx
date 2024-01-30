import { ArrowIcon, CellContainer, CellIconImage, CellText, LogoContainer, MainContainer } from "./styles"
import iconTest from '../../assets/icons/hands-icon.png'
import RightArrow from  '../../assets/icons/right-arrow.png'
import Logo from '../../assets/images/mar-azul-logo.png'
import IconPatients from '../../assets/icons/icon-patients.png'
import IconAppointments from '../../assets/icons/icon-appointments.png'
import IconMedicalRecords from '../../assets/icons/icon-medical-records.png'
import IconPrescriptions from '../../assets/icons/icon-prescriptions.png'
import IconLabsAndTests from '../../assets/icons/iscon-labs-and-tests.png'
import IconMessages from '../../assets/icons/icon-messages.png'



export const DefaultLateralMenu: React.FC = () => {
    return (
        <MainContainer>
            <LogoContainer src={Logo}/>
            <CellContainer>
                <CellIconImage src={IconPatients} />
                <CellText>Patients</CellText>
                <ArrowIcon src={RightArrow}/>
            </CellContainer>
            <CellContainer>
                <CellIconImage src={IconAppointments} />
                <CellText>Appointments</CellText>
                <ArrowIcon src={RightArrow}/>
            </CellContainer>
            <CellContainer>
                <CellIconImage src={IconMedicalRecords} />
                <CellText>Records</CellText>
                <ArrowIcon src={RightArrow}/>
            </CellContainer>
            <CellContainer>
                <CellIconImage src={IconPrescriptions} />
                <CellText>Prescriptions</CellText>
                <ArrowIcon src={RightArrow}/>
            </CellContainer>
            <CellContainer>
                <CellIconImage src={IconLabsAndTests} />
                <CellText>Labs and Tests</CellText>
                <ArrowIcon src={RightArrow}/>
            </CellContainer>
            <CellContainer>
                <CellIconImage src={IconMessages} />
                <CellText>Messages</CellText>
                <ArrowIcon src={RightArrow}/>
            </CellContainer>
        </MainContainer>

    )
}