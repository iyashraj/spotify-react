import styled from "styled-components"

const SidebarOption = ({title, Icon}) => {
  return (
    <SidebarOptionMain>
      {Icon && <Icon className="sidebarOption__icon"/>}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </SidebarOptionMain>
  )
}

const SidebarOptionMain = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in-out;
  :hover{
    color: white;
  }
  .sidebarOption__icon{
    padding-left: 10px;
    padding-right: 10px;
  }
  p{
    margin-top: 10px;
    margin-left: 20px;
    font-size: 14px;
  }
`

export default SidebarOption