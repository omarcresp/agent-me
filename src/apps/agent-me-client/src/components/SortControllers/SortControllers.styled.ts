import styled from "styled-components";

export const SortGridContainer = styled.div`
grid-column: 1 / -1;
`

export const SortSelect = styled.select`
  background: white;
  border: 1px solid var(--zoe-input-border);
  border-radius: .25rem;
  padding: .75rem;
  width: 100%;
  outline: none;

  @media (min-width: 1024px) {
    width: 14rem;
  }
`
