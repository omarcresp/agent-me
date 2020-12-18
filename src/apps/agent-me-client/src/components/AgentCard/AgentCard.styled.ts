import styled from 'styled-components'

export const AgentCardContainer = styled.div`
  background: var(--zoe-white);
  box-shadow: 0px 6px 16px 2px rgba(29, 35, 58, 0.1);
  border-radius: 0.75rem;
  text-align: center;
  color: var(--zoe-text-gray);
  width: 100%;
  max-width: 21rem;
  justify-self: center;
  padding: 1rem;
  display: flex;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    display: block;
    width: 18rem;
    padding: 0;
  }
`

export const AgentCardGrid = styled.div`
  display: grid;
  gap: 1rem 1.5rem;
  justify-content: center;
  grid-template-columns: minmax(auto, 21rem);
  padding: 0 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, max-content);
  }
`

export const AgentCardName = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 0.25rem;
`

export const AgentCardImage = styled.img`
  width: 4.875rem;
  height: 4.875rem;
  border-radius: 50%;
  margin-right: 1.5rem;

  @media (min-width: 1024px) {
    width: 7rem;
    height: 7rem;
    margin: 2rem auto;
  }
`

export const AgentCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;

  @media (min-width: 1024px) {
    text-align: center;
    display: block;
  }
`

export const AgentCardFooter = styled.span`
  display: block;

  @media (min-width: 1024px) {
    background: var(--zoe-bg-ligth-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    margin-top: 1rem;
  }
`

export const AgentCardIncome = styled.span`
  margin-left: 0.25rem;
  font-weight: 700;
`
