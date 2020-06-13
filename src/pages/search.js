import React from "react"
import { Link } from "gatsby"

import { SEO, Layout } from "../components"

const SearchPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Search page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SearchPage