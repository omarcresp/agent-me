import styled from "styled-components"

export const HomeFormContainer = styled.div`
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3.5rem;
  max-width: 85vw;
`

export const HomeFormButton = styled.button`
  color: white;
  background: var(--zoe-bg-blue);
  height: 3rem;
  border-radius: .25rem;
  border: none;
  align-items: center;
  margin-left: auto;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
  padding: 0 1rem;

  &:active {
    filter: brightness(90%);
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }
`
