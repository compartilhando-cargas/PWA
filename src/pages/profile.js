import React from "react"
import { Link } from "gatsby"

import { SEO, Layout } from "../components"

const ProfilePage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the Profile page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProfilePage
