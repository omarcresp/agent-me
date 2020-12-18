import styled from "styled-components";

export const GapControllerButton = styled.button`
  height: 3rem;
  width: 8rem;
  cursor: pointer;
  color: var(--zoe-bg-blue);
  border: none;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  font-weight: 700;

  &[disabled] {
    color: var(--zoe-text-ligth-gray);
    cursor: default;
  }

  @media (min-width: 1024px) {
    margin-left: .5rem;
  }
`

export const GapGridContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  margin-bottom: 2rem;
  justify-content: space-between;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`
