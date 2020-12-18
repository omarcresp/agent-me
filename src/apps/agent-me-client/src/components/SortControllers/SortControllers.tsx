import React, { FormEvent } from 'react';
import { InputLabel } from '../InputLabel/InputLabel';
import { SortGridContainer, SortSelect } from "./SortControllers.styled";

interface Props {
  onInput: (type: string) => void
}

function SortControllers({ onInput }: Props) {
  const options = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'id', label: 'ID' },
    { value: 'incomeHigh', label: 'Income: High first' },
    { value: 'incomeLow', label: 'Income: Low first' },
  ]
  const handleInput = (ev: FormEvent<HTMLSelectElement>) =>
    onInput(ev.currentTarget.value)

  return (
    <SortGridContainer>
      <InputLabel>Order agents by</InputLabel>
      <SortSelect name="sort" defaultValue="default" onInput={handleInput}>
        <option hidden value="default">Select…</option>
        {
          options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))
        }
      </SortSelect>
    </SortGridContainer>
  )
}

export default SortControllers
