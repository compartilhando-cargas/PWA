import React from "react"

import * as S from "./styles"

const TabBar = () => {
  return (
    <S.TabWrapper>
      <S.TabNav>
        <S.TabList>
          <S.TabItem>
            <S.TabLink to="/" activeClassName="active">
              Notícias
            </S.TabLink>
          </S.TabItem>
          <S.TabItem>
            <S.TabLink to="/trucker/" activeClassName="active">
              Pesquisa
            </S.TabLink>
          </S.TabItem>
          <S.TabItem>
            <S.TabLink to="/profile/" activeClassName="active">
              Perfil
            </S.TabLink>
          </S.TabItem>
        </S.TabList>
      </S.TabNav>
    </S.TabWrapper>
  )
}

export default TabBar
