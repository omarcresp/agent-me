import React from 'react';
import { InputError } from '../InputError/InputError';
import InputIcon from '../InputIcon/InputIcon';
import { InputLabel } from '../InputLabel/InputLabel';

interface Props {
  updateValue: (event: React.FormEvent<HTMLInputElement>) => void;
  goToAgent: () => void;
  error: string;
}

function HomeForm({updateValue, goToAgent, error}: Props) {
  return (
    <div>
      <InputLabel>Current income</InputLabel>
      <InputIcon onSubmit={goToAgent} onInput={updateValue} />
      <InputError>{error}</InputError>
    </div>
  )
}

export default HomeForm
