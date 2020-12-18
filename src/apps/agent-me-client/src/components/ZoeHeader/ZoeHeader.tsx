import { Link } from "react-router-dom"
import styled from "styled-components"

import { logo } from '../../../../../assets/images'

const ZoeHeaderContainer = styled.div`
  background: var(--zoe-bg-ligth-gray);
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`

function ZoeHeader() {
  return (
    <ZoeHeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </ZoeHeaderContainer>
  )
}

export default ZoeHeader
