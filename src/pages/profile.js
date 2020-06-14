import React from "react"
import { Link } from "gatsby"

import { SEO, Layout } from "../components"

const ProfilePage = () => (
  <Layout>
    <SEO title="Perfil" />
    <h1>Hi from the Profile page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProfilePage
