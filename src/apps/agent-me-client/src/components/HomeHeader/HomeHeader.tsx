import React from 'react';
import styled from 'styled-components';

import { users } from '../../../../../assets/images';
import { HeaderTitle } from '../HeaderTitle/HeaderTitle';

const HeaderContainer = styled.div`
  max-width: 85vw;
  margin-top: 4.75rem;
`

function HomeHeader() {
  return (
    <HeaderContainer>
      <img src={users} alt=""/>
      <HeaderTitle>Find the best agent for you!</HeaderTitle>
      <p>Fill the information below to get your matches.</p>
    </HeaderContainer>
  )
}

export default HomeHeader;
