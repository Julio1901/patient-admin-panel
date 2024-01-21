
import { MainContainer, LoginFormContainer, Title, SubTitle, InputTitle, InputText, PasswordItensContainer, TextButton, LoginImage, InputTextContainer } from "./styles"

import LoginImageSrc  from '../../assets/images/doctor-login-image.jpg'
import { DefaultInputText } from "../../components/defaultInputText/defatultInputText"

export const  Login = () => {
    return(
       <MainContainer>
            <LoginFormContainer>
                <Title>Welcome back!</Title>
                <SubTitle>Enter your Credentials to access your account</SubTitle>
                <InputTextContainer>
                    <DefaultInputText placeholder="Enter your email" inputTitle="Email address"/>
                </InputTextContainer>
                  
            
                    
                    <InputTextContainer>
                  
                    <DefaultInputText placeholder="Enter your password" inputTitle="Password"/>
                    
                    </InputTextContainer>
                    <TextButton >Forgot password</TextButton>
                   

       
              
                
            </LoginFormContainer>
            <LoginImage src={LoginImageSrc}/>
 
       </MainContainer>
    )

}