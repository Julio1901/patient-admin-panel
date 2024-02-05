import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
`

export const BodyContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto; 
    flex-direction: column;
`

export const PatientInfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: fit-content; 
    flex-direction: row;
`

export const PatientListContainer = styled.div`
    width: 500px;
    display: flex;
    padding-left: 50px;
`

export const Divider = styled.div`
    width: 2px;
    height: 600px;
    background-color: blueviolet;
    margin-top: 60px;
`

export const EmptyStateContainer = styled.div`
    width: 50%;
    height: fit-content; 
    display: flex;
    padding-top: 10%;
    flex-direction: column;
    align-items: center;

`

export const EmptyStateImage = styled.img`
    width: 400px;
    height: 400px
`
