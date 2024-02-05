import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    max-width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #87CEFA;;
`

export const TitleContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
`

export const HeaderTitle = styled.text`
    font-size: 70px;
    color: white;
    align-self: center;
`

export const ImageContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-right: auto;
    padding-left: 50px;
`

export const DoctorName = styled.text`
    font-size: 20px;
    color: white;
`

export const NameContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin-left: -20px;
    margin-top: 5px;
    flex-direction: row;
    white-space: nowrap;
`;