import React from 'react';
import { useHistory } from 'react-router-dom';

import { leftArrow } from '../../../../assets/images';
import { HomeContainer } from '../components/HomeContainer/HomeContainer';
import HomeForm from '../components/HomeForm/HomeForm';
import { HomeFormButton, HomeFormContainer } from '../components/HomeForm/HomeForm.styled';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import { useHomeManager } from '../features/homeManager';

function HomePage() {
  const history = useHistory()
  const { searchValue, updateValue, error, validateSearch } = useHomeManager()

  const goToAgent = () => {
    if (validateSearch())
      history.push(`/agents/${searchValue}`);
  }

  return (
    <HomeContainer>
      <HomeHeader />

      <HomeFormContainer>
        <HomeForm error={error} goToAgent={goToAgent} updateValue={updateValue} />

        <HomeFormButton onClick={goToAgent}>
          Get matches
          <img src={leftArrow} alt=""/>
        </HomeFormButton>
      </HomeFormContainer>
    </HomeContainer>
  )
}

export default HomePage;
