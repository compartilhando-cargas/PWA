import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components"

export const query = graphql`
  query TruckerPost($idTrucker: Int!) {
    contentfulTruckerPost(idTrucker: { eq: $idTrucker }) {
      name
      phone
      description
      photo {
        description
        file {
          url
        }
      }
    }
  }
`

const TruckerPost = props => {
  const {
    name,
    phone,
    description,
    photo: {
      description: alt,
      file: { url },
    },
  } = props.data.contentfulTruckerPost

  return (
    <Layout>
      <h1>{name}</h1>
      <h3>{phone}</h3>
      <h4>{description}</h4>
      <img width="300" src={`http:${url}`} alt={alt} />
    </Layout>
  )
}

export default TruckerPost
