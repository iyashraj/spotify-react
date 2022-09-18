import styled from 'styled-components'
import React from 'react'
import SidebarOption from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from "@material-ui/icons";
import { useSelector } from 'react-redux';
// import { Store } from 'redux';

const Sidebar = () => {
  const {playlists
  } = useSelector(state => state)
  return (
    <SidebarMain>
        <Logo src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg" alt="spotify_logo"/>
        <SidebarOption title="Home" Icon={HomeIcon}/>
        <SidebarOption title="Search" Icon={SearchIcon} />
        <SidebarOption title="Your Library" Icon={LibraryMusic} />
        <br />
        <SidebarTitle>PLAYLISTS</SidebarTitle>
        <hr />
        {playlists?.item?.map((playlist)=>{
          <SidebarOption title={playlist.name} />
        })}
    </SidebarMain>
  )
}

const SidebarMain = styled.div`
    height: 100vh;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  flex: 0.2;
  min-width: 230px;
  background-color: #040404;
  hr{
    border: 1px solid #282828;
  width: 90%;
  margin: 10px auto;
  }
`

const Logo = styled.img`
      height: 100px;
  width: auto;
  padding: 10px;
  margin: auto;
`
const SidebarTitle = styled.b`
      margin-left: 5px;
  padding: 5px;
  font-size: 12px;
`
export default Sidebar