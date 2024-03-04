import React from 'react';
import styled from 'styled-components';
import { Search } from '@mui/icons-material';

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-right: 20px; 
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-right: 20px; 
`;
const Input = styled.input`
  border: none;
  margin-left: 5px; 
`;
const Logo = styled.h2`
  font-weight: bold;
  margin-right: auto;
`;
const Right = styled.div`
  margin-left: auto; /* Pushes the right content to the right end */
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Language>English</Language>
        <SearchContainer>
          <Input />
          <Search />
        </SearchContainer>
        <Logo>Ecommerce</Logo>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
