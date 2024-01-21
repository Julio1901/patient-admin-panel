import React from "react"
import { CustomInputText, InputTitle, MainContainer } from "./styles"


interface IDefacultInputText{
    placeholder?: string
    inputTitle: string

}


export const DefaultInputText: React.FC<IDefacultInputText> = ({placeholder, inputTitle}) => {

    return(
        <MainContainer>
            <InputTitle>{inputTitle}</InputTitle>
            <CustomInputText  placeholder={placeholder}/>
        </MainContainer>

    )


}