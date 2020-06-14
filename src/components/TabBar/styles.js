import styled from "styled-components"
import { Link } from "gatsby"

export const TabWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 72px;
  left: 0px;
  top: 0px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 4px 5px rgba(0, 0, 0, 0.14);
`
export const TabNav = styled.nav``
export const TabList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 72px;
  background: #075e54;
`
export const TabItem = styled.li`
  height: 72px;
  flex: 1;
`

export const TabLink = styled(Link)`
  text-decoration: none;
  color: #eee;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.active {
    background: #128c7e;
    border-bottom: 4px solid #fff;
  }

  svg,
  span {
    margin: 6px 0px;
  }

  svg.menu {
    margin-top: 20px;
  }
`
