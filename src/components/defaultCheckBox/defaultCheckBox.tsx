import React, { ChangeEvent } from 'react';
import {CheckboxContainer, CheckboxInput, CheckboxLabel}  from "./styles"

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }


  const DefaultCheckbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    return (
      <CheckboxContainer>
        <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
        <CheckboxLabel>{label}</CheckboxLabel>
      </CheckboxContainer>
    );
  };
  
  export default DefaultCheckbox;