
import { MainContainer, LoginFormContainer, Title, SubTitle, InputTitle, PasswordItensContainer, TextButton, LoginImage, InputTextContainer } from "./styles"

import LoginImageSrc  from '../../assets/images/doctor-login-image.jpg'
import { DefaultInputText } from "../../components/defaultInputText/defatultInputText"
import DefaultCheckbox from "../../components/defaultCheckBox/defaultCheckBox";
import { MockDatabase } from "../../utils/mockDatabase";
import { LoginButton } from "./styles";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom'

export const  Login = () => {
    
    const [isChecked, setChecked] = useState<boolean>(false);
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
      };
    
    const handleLoginClickButton = () => {
        const database = new MockDatabase
        const authorizedLogin =  database.findUser({userName: login ,password: password})

        if(authorizedLogin){
           navigate('main-panel')
        }else{
            alert('If the user exists, the password is incorrect.')
        }
     
    }

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    return(
       <MainContainer>
            <div >
                <LoginFormContainer>
                    <Title>Welcome back!</Title>
                    <SubTitle>Enter your Credentials to access your account</SubTitle>
                    <InputTextContainer>
                        <DefaultInputText placeholder="Enter your email" inputTitle="Email address" value={login} onChange={handleLoginChange} />
                    </InputTextContainer>  
                        <InputTextContainer>
                        <DefaultInputText placeholder="Enter your password" inputTitle="Password" type="password" value={password} onChange={handlePasswordChange}/>
                        </InputTextContainer>
                        <TextButton style={{marginTop:20}} >Forgot password</TextButton>
                        <div style={{marginTop:20, width: 'fit-content'}}>
                            <DefaultCheckbox label="Remember for 30 days" checked={isChecked} onChange={handleCheckboxChange} />                
                        </div>
                    <LoginButton onClick={handleLoginClickButton}>Login</LoginButton>
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