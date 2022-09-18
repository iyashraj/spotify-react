import React from "react";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  PlaylistPlay,
  Shuffle,
  Repeat,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider} from "@material-ui/core";
import styled from "styled-components";

const FooterMain = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  height: 65px;
  width: 100%;
  background-color: #282828;
  padding: 20px;
`;
const FooterCenter = styled.div`
  flex: 0.4;
  padding: 0 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  .footer__green {
    color: #1ed15e;
    :hover {
      transition: transform 0.2 ease-in;
      transform: scale(1.2) !important;
    }
  }
  .footer__icon:hover {
    transition: transform 0.2 ease-in;
    transform: scale(1.2) !important;
  }
`;
const FooterLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  color: white;
  max-width: 300px;
`;
const FooterRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  MuiSlider-root{
    color: #1ed15e;
  }
`;
const FooterImg = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  object-fit: contain;
`;
const FooterSongInfo = styled.div`
  h4 {
    margin-bottom: 5px;
  }
  p {
    font-size: 12px;
  }
`;
function Footer() {
  return (
    <FooterMain>
      <FooterLeft>
        <FooterImg
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt=""
        />
        <FooterSongInfo>
          <h4>My fav song</h4>
          <p>Atharva</p>
        </FooterSongInfo>
      </FooterLeft>
      <FooterCenter>
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </FooterRight>
    </FooterMain>
  );
}

export default Footer;
