import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;


    @media (max-width: 839px) {
        justify-content: center;
    }

    @media (max-width: 600px) {
  
}
`

export const LoginFormContainer = styled.div`
    width: 404px;
    height: 438px;
    min-width: 404px;
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
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
    margin-top: 60px;
`

export const InputTextContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 25px;
    display: flex;
`

export const PasswordItensContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    background-color: beige;
`
export const TextButton = styled.div`
    width: fit-content;
    color: #0C2A92;
    cursor: pointer;
    font-weight: bold;
    padding-right: 5px;
    transition: color 0.3s ease; 
    margin-top: 5px;
    margin-left: 5px;
    &:hover {
        color: #ff0000; 
    }
`;


export const LoginImage = styled.img`
    width: 70%;
    height: 70%;
    border-top-left-radius: 30px; 
    border-bottom-left-radius: 30px; 
    margin-left: auto; 

    &:hover {
        background-color: #aabbcc;
    }

    @media (max-width: 1250px) {
        width: 580px;
        height: 60%;
}

@media (max-width: 1039px) {
        width: 380px;
        height: 50%;
}


@media (max-width: 839px) {
    display: none; 
}

`