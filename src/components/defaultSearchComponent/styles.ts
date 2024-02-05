import styled from "styled-components";

export const SearchContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 10px;
`
export const SearchComponent = styled.input`
    width: 100%;
    height: 20px;
    border-color: #836FFF;
    border-radius: 20px;
    padding-right: 5px;
    padding-left: 5px;
    
    &:focus {
        border-color: #836FFF; 
        outline: none; 
    }

     &::placeholder {
        padding: 5px; 
    }
 
`

export const SearchIcon = styled.img`
    position: absolute;
    top: 50%;
    right: -3px;
    transform: translateY(-50%);
    width: 15px; 
    height: 15px;
    background-color: white;
    
    &:hover {
        cursor: pointer;
    }

`;