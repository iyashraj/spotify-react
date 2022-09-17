import React from "react";
import { Search } from "@material-ui/icons";
// import "./Header.css";
import { Avatar } from "@material-ui/core";
// import { useDataLayerValue } from "./DataLayer";
import {useSelector} from 'react-redux'
import styled from "styled-components";

function Header() {

  const user = useSelector(state=>(state.user))
  console.log(user,"user is consoling")
  return (
    <HeaderMain>
      <HeaderLeft>
        <Search />
        <HeaderInput placeholder="Search for Artists, Songs, or Albums" type="text" />
      </HeaderLeft>
      <HeaderRight>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </HeaderRight>
    </HeaderMain>
  );
}
const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`  
const HeaderLeft = styled.div`
  flex: 0.5;
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 30px;
  color: gray;
  align-items: center;
`
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  h4{
    margin-left: 10px;
  }
`

const HeaderInput = styled.input`
width: 100%;
border: none;
height: 40px;
letter-spacing: 1px;
font-size: 14px;  
`

export default Header;