import React from "react"
import { Link } from "gatsby"

import { SEO, Layout, Trucker } from "../components"

const SearchPage = () => (
  <Layout>
    <SEO title="Caminhoneiros" />
    <Trucker />
  </Layout>
)

export default SearchPage
