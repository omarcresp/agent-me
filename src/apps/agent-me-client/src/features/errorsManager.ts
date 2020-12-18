import { useEffect, useMemo, useState } from "react"

import { useQuery } from './useQuery';

export function useErrors() {
  const queryError = useQuery().get('error');
  const [error, setError] = useState<string>('')

  const errors = useMemo<{[key: string]: string}>(() => ({
    valueLength: 'The value should be 5 or less',
    valueNumber: 'The value should be a number'
  }), [])

  useEffect(() => {
    if (queryError) {
      setError(errors[queryError])
    }
  }, [queryError, setError, errors])


  return { errors, setError, error }
}
