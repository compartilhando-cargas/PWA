import React from "react"

import { SEO, Layout, News } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Noticias" />
    <News />
  </Layout>
)

export default IndexPage
