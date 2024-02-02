import styled from "styled-components";

export const MainContainer = styled.div`
    width: fit-content;
    height: 600px;
    ul {
        width: fit-content;
        height: 600px;
        list-style: none; 
        padding: 0;
        margin: 0; 
        overflow: auto; 
        scrollbar-color: black;
    }

`

export const PatientCardContainer = styled.div`
    width: 250px;
    height: 100px;
    margin-left: 5px;
    margin-right: 5px;
    border: 1px solid #836FFF;
    border-radius: 30px;
    margin-top: 30px;
    display: flex;
`

export const PatientProfileIcon = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 75px;
    object-fit: cover;
    align-self: center;
    margin-left: 10px;
`

export const PatientInfoContainer = styled.div`
    width: fit-content;
    max-width: 110px;
    margin-left: 20px;
    display: flex;
    align-self: center;
    flex-direction: column;
`

export const PatientInfoText = styled.text`
    margin-top: 5px;
    overflow: hidden;
    white-space: nowrap; 
    text-overflow: ellipsis; 
`