import React from 'react';
import logo from '../../assets/img/logo.png';

import * as S from './styled';

const Header = () => (
  <S.Container>
    <S.Logo src={logo} alt="logo" />

    <S.ListWrapper>
      <S.List>
        <S.Item active>Home</S.Item>
        <S.Item>Destinations</S.Item>
        <S.Item>About</S.Item>
        <S.Item>Partner</S.Item>
      </S.List>
    </S.ListWrapper>
  </S.Container>
);

export default Header;
