
import React from "react";
import styled from "styled-components";

function SongRow({ track }) {
  return (
    <SRMain>
      <img src={track.album.images[0].url} alt=""/>
      <SRInfo>
        <h1>{track.name}</h1>
        <p>
          {track?.artists?.map((artist) => artist.name).join(", ")} -{" "}
          {track?.album?.name}
        </p>
      </SRInfo>
    </SRMain>
  );
}

const SRMain = styled.div`
    margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  color: white;
  img{
  height: 40px;
  width: 40px;
  }
`
const SRInfo = styled.div`
  margin-left: 20px;
  h1{
    font-size: 16px;
  }
  p{
    font-size: 14px;
  margin-top: 3px;
  color: gray;
  }
`
export default SongRow;