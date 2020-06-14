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
                src={`http:${edge?.node?.thumbnail?.file.url}`}
                alt={edge?.node?.thumbnail?.description}
                hidden={!edge.node?.thumbnail?.file}
              />
              <Link to={`/news/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <h4>{edge.node.date}</h4>
              </Link>
            </S.Card>
          </S.CardItem>
        )
      })}
    </S.Cards>
  )
}
export default News
