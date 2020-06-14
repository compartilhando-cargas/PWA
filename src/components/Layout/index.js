import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "../../styles/global"
import * as S from "./styles"
import { Header, TabBar } from "../../components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <TabBar />
      <S.LayoutWrapper>
        <GlobalStyles />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
