import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const LoginFormContainer = styled.div`
    width: 404px;
    height: 438px;
    display: flex;
    flex-direction: column;
    background: rgb(18, 128, 255, 0.2);
    border-radius: 30px;
    margin-left: 15px;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: center;
`

export const Title = styled.text`
   @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;0,800;0,900;1,700;1,800;1,900&display=swap');
    font-size: 32px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-style: normal;
    padding-top: 5px;
    padding-bottom: 5px;
`


export const SubTitle = styled.text`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;0,800;0,900;1,700;1,800;1,900&display=swap');
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-style: normal;
`


export const InputTitle = styled.text`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;0,800;0,900;1,700;1,800;1,900&display=swap');
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    margin-top: 60px;
`

export const InputText = styled.input`
    width: 100%;
    height: 32px;
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    box-sizing: border-box;
`

export const PasswordItensContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`

export const TextButton = styled.div`
     color: #0C2A92;
    cursor: pointer;
    font-weight: bold;
    margin-left: auto;
    padding-right: 5px;
`

export const LoginImage = styled.img`
    width: 780px;
    height: 70%;
    border-top-left-radius: 30px; 
    border-bottom-left-radius: 30px; 
    margin-left: auto; 

`