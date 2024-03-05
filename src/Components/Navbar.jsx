import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

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
  flex: 1;
  display: flex;
  aligh-item: center;
  justify-content: flex-end
`;
const Right = styled.div`
  margin-left: auto; 
  flex: 1;
  display: flex;
  aligh-item: center;
  justify-content: flex-end
`;

const MenuItem = styled.div`
font-size: 14px;
curson: pointer;
margin-left: 25px
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Language>English</Language>
        <SearchContainer>
          <Input style={{height: "25px", width: "250px"}}/>
          <Search style={{color: "gray", fontSize: "18px"}} />
        </SearchContainer>
        <Logo>Ecommerce</Logo>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>
                <Badge badgeContent= {4} color='primary'>
                        <ShoppingCartOutlined/> 
                </Badge>
            </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
