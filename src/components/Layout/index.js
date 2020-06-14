import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"
import * as S from "./styles"
import { TabBar } from "../../components"

const Layout = ({ children }) => {
  return (
    <>
      <TabBar />
      <S.LayoutWrapper>
        <GlobalStyles />
        <S.LayoutContent>{children}</S.LayoutContent>
        <S.LayoutFooter>
          © {new Date().getFullYear()}, Feito com 💓 para os 🚚
        </S.LayoutFooter>
      </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
