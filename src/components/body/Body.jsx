import React from "react";
import Header from "./Header";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "./SongRow";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Body({ spotify }) {
  const [{ discover_weekly }] = useSelector((state) => state);

  return (
    <BodyMain>
      <Header spotify={spotify} />
      <BodyInfo>
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <BodyInfoText>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </BodyInfoText>
      </BodyInfo>
      <BodySongs>
        <BodyIcons>
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </BodyIcons>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </BodySongs>
    </BodyMain>
  );
}

const BodyMain = styled.div`
  padding: 30px;
  width: 100%;
  height: 100vh;
  overflow-y: overlay;
  flex: 0.8;
  color: white;
  background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(91, 87, 115);
  ::-webkit-scrollbar {
    display: none;
  }
`;

const BodyInfo = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  img {
    height: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  }
`;

const BodyIcons = styled.div`
  display: flex;
  align-items: center;
  .MuiSvgIcon-root {
    margin-right: 20px;
  }
  .body__shuffle {
    font-size: 80px !important;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    :hover {
      transition: 100ms transform ease-in;
      transform: scale(1.08);
    }
  }
`;

const BodySongs = styled.div`
  z-index: 1;
  margin: 20px -30px;
`;

const BodyInfoText = styled.div`
  flex: 1;
  p {
    font-size: 14px;
  }
  h2 {
    font-size: 48px;
    margin-bottom: 10px;
  }
`;

export default Body;
