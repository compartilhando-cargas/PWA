import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query NewsPost($slug: String!) {
    contentfulNewsPost(slug: { eq: $slug }) {
      slug
      title
      date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      thumbnail {
        description
        file {
          url
        }
      }
      body {
        json
      }
    }
  }
`

const NewsPost = props => {
  const { title, date, thumbnail } = props.data.contentfulNewsPost

  return (
    <Layout>
      <h1>{title}</h1>
      <h4>{date}</h4>
      <img
        width="300"
        src={`http:${thumbnail?.file.url}`}
        alt={thumbnail?.description}
        hidden={!thumbnail?.file}
      />
      {documentToReactComponents(props.data.contentfulNewsPost.body.json)}
    </Layout>
  )
}

export default NewsPost
