import React, { ChangeEvent } from "react"
import { CustomInputText, InputTitle, MainContainer } from "./styles"


interface IDefacultInputText{
    placeholder?: string
    inputTitle: string
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'password' | 'number' | 'email';
}


export const DefaultInputText: React.FC<IDefacultInputText> = ({ placeholder, inputTitle, value, onChange, type }) => {

    return(
        <MainContainer>
            <InputTitle>{inputTitle}</InputTitle>
            <CustomInputText placeholder={placeholder} value={value} onChange={onChange} type={type} />
        </MainContainer>

    )


}