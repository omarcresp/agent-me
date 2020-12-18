import { FormEvent, useState } from 'react';
import { validateSearchValue } from './agentManager';

import { useErrors } from './errorsManager';

export function useHomeManager() {
  const [searchValue, setSearch] = useState<string>('')
  const { errors, setError, error } = useErrors()

  const updateValue = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  const validateSearch = () => {
    const error = validateSearchValue(searchValue) || ''

    setError(errors[error])

    return !error
  }

  return { searchValue, updateValue, error, validateSearch }
}
