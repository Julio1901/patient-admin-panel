
import { MainContainer, LoginFormContainer, Title, SubTitle, InputTitle, PasswordItensContainer, TextButton, LoginImage, InputTextContainer } from "./styles"

import LoginImageSrc  from '../../assets/images/doctor-login-image.jpg'
import { DefaultInputText } from "../../components/defaultInputText/defatultInputText"
import DefaultCheckbox from "../../components/defaultCheckBox/defaultCheckBox";
import { LoginButton } from "./styles";
import { ChangeEvent, useState } from "react";

export const  Login = () => {
    const [isChecked, setChecked] = useState<boolean>(false);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
      };
      
    return(
       <MainContainer>
            <div >
                <LoginFormContainer>
                    <Title>Welcome back!</Title>
                    <SubTitle>Enter your Credentials to access your account</SubTitle>
                    <InputTextContainer>
                        <DefaultInputText placeholder="Enter your email" inputTitle="Email address"/>
                    </InputTextContainer>  
                        <InputTextContainer>
                        <DefaultInputText placeholder="Enter your password" inputTitle="Password"/>
                        </InputTextContainer>
                        <TextButton style={{marginTop:20}} >Forgot password</TextButton>
                        <div style={{marginTop:20, width: 'fit-content'}}>
                            <DefaultCheckbox label="Remember for 30 days" checked={isChecked} onChange={handleCheckboxChange} />                
                        </div>
                    <LoginButton>Login</LoginButton>
                </LoginFormContainer>
                <div style={{ display:'flex', height:'fit-content', width:'auto',flexDirection: 'row', justifyContent: 'center'}}>
                    <InputTitle style={{marginTop: '30px'}}>Don't have an account?</InputTitle>
                    <TextButton style={{marginTop: '30px'}}>Sign Up</TextButton>
                </div>
            </div>
            <LoginImage src={LoginImageSrc}/>
       </MainContainer>
    )

}