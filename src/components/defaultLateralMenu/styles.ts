import styled from "styled-components"


export const MainContainer = styled.div`
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #1E90FF;
`

export const CellContainer = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
  
   
    &:hover {
        cursor: pointer;
        background-color: #4169E1;
    }
`
export const CellText = styled.text`
    size: 14px;
    color: white;
    font-family: "Raleway", sans-serif;
    font-style: normal;
    margin-left: 13px;
`

export const CellIconImage = styled.img`
    width: 35px;
    height: 35px;
    margin-left: 47px;
    filter: brightness(0) invert(1);
`

export const ArrowIcon = styled.img`
    width: 6.88px;
    height: 12.5px;
    display: flex;
    margin-left: auto;
    margin-right: 23.30px;
`
export const LogoContainer = styled.img`
    width: auto;
    height: 100px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;
    margin-bottom: 100px;
    background-color: rgba(255, 255, 255);
    border-radius: 10px;
`