import React from "react"
import {
  FaNewspaper,
  FaTruck,
  FaBell,
  FaSearch,
  FaEllipsisV,
} from "react-icons/fa"

import * as S from "./styles"

const TabBar = () => {
  return (
    <S.TabWrapper>
      <S.TabNav>
        <S.TabList>
          <S.TabItem>
            <S.TabLink to="/news/" activeClassName="active">
              <FaNewspaper size={26} color="#FFFFFF" />
              <span>Notícias</span>
            </S.TabLink>
          </S.TabItem>
          <S.TabItem>
            <S.TabLink to="/trucker/" activeClassName="active">
              <FaTruck size={26} color="#FFFFFF" />
              <span>Caminhoneiros</span>
            </S.TabLink>
          </S.TabItem>
          <S.TabItem>
            <S.TabLink to="/notification/" activeClassName="active">
              <FaBell size={26} color="#FFFFFF" />
              <span>Notificações</span>
            </S.TabLink>
          </S.TabItem>
        </S.TabList>
      </S.TabNav>
    </S.TabWrapper>
  )
}

export default TabBar
