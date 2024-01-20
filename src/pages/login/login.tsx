
import { MainContainer, LoginFormContainer, Title, SubTitle, InputTitle, InputText, PasswordItensContainer, TextButton, LoginImage } from "./styles"

import LoginImageSrc  from '../../assets/images/doctor-login-image.jpg'

export const  Login = () => {
    return(
       <MainContainer>
            <LoginFormContainer>
                <Title>Welcome back!</Title>
                <SubTitle>Enter your Credentials to access your account</SubTitle>
                <InputTitle>Email address</InputTitle>
                <InputText placeholder="Enter your email"/>
                <PasswordItensContainer>
                    <InputTitle style={{marginTop:20}}>Password</InputTitle>
                    <TextButton style={{marginTop:20}}>Forgot password</TextButton>
                </PasswordItensContainer>
                <InputText placeholder="Enter your password"/>
            </LoginFormContainer>
            <LoginImage src={LoginImageSrc}/>
 
       </MainContainer>
    )

}