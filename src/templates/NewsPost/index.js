import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import * as S from "../../styles/newsPost"

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
      <S.PostArticle>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDate>{date}</S.PostDate>
        <img
          width="300"
          src={`https:${thumbnail?.file.url}`}
          alt={thumbnail?.description}
          hidden={!thumbnail?.file}
        />
        {documentToReactComponents(props.data.contentfulNewsPost.body.json)}
      </S.PostArticle>
    </Layout>
  )
}

export default NewsPost
