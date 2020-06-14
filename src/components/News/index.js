import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as S from "./styles"

const News = () => {
  const data = useStaticQuery(graphql`
    query NewsQuery {
      allContentfulNewsPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            idPost
            slug
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            title
            thumbnail {
              description
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <S.Cards>
      {data.allContentfulNewsPost.edges.map(edge => {
        return (
          <S.CardItem key={edge.node.idPost}>
            <S.Card>
              <img
                width="300"
                src={`https:${edge?.node?.thumbnail?.file.url}`}
                alt={edge?.node?.thumbnail?.description}
                hidden={!edge.node?.thumbnail?.file}
              />
              <S.CardLink to={`/news/${edge.node.slug}`}>
                <S.CardTitle>{edge.node.title}</S.CardTitle>
                <S.CardDate>{edge.node.date}</S.CardDate>
              </S.CardLink>
            </S.Card>
          </S.CardItem>
        )
      })}
    </S.Cards>
  )
}
export default News
