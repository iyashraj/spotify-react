import React from "react";
import styled from "styled-components";
import { loginUrl } from "../constant/spotify";

const Login = () => {
  return (
    <LoginMain>
      <img
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="spotifylogo"
      />
      <LoginBtn href={loginUrl}>LOGIN WITH SPOTIFY</LoginBtn>
    </LoginMain>
  );
};

const LoginMain = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;
  img {
    width: auto;
    height: 200px;
  }
`;
const LoginBtn = styled.a`
  padding: 20px;
  border-radius: 99px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  background-color: #1db954;
`;

export default Login;
