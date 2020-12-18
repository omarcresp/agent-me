import React, { FormEvent, KeyboardEvent } from 'react';

import { dolar } from '../../../../../assets/images';
import { InputIconContainer, InputIconField } from './InputIcon.styled';

interface Props {
  type?: string;
  value?: string;
  onInput?: (event: FormEvent<HTMLInputElement>) => void
  onSubmit?: (value: string) => void
}

function InputIcon({ type, value, onInput, onSubmit }: Props) {
  const handleSubmit = (event: KeyboardEvent) => {
    if (onSubmit && event.key === 'Enter') {
      const el = event.target as HTMLInputElement;

      onSubmit(el.value);
    }
  };

  return (
    <InputIconContainer>
      <img src={dolar} alt="" />
      <InputIconField type={type || 'number'} value={value} onInput={onInput} onKeyUp={handleSubmit} />
    </InputIconContainer>
  );
}

export default InputIcon
