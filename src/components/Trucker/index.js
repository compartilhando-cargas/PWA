import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styles"

const Trucker = () => {
  const data = useStaticQuery(graphql`
    query TruckerQuery {
      allContentfulTruckerPost {
        edges {
          node {
            idTrucker
            name
            description
            phoneNumber
            photo {
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
    <S.TruckerList>
      {data.allContentfulTruckerPost.edges.map(edge => {
        return (
          <S.ListItem key={edge.node.idTrucker}>
            <S.Item>
              <S.ItemImage src={edge.node.photo?.file.url} />

              <S.ProfileLink to={`/trucker/${edge.node.idTrucker}`}>
                <S.ItemName>{edge.node.name}</S.ItemName>
              </S.ProfileLink>
              <S.ItemDescription>{edge.node.description}</S.ItemDescription>

              <S.PhoneLink href={`https://wa.me/${edge.node.phoneNumber}`}>
                <S.WhatsappIcon />
              </S.PhoneLink>
            </S.Item>
          </S.ListItem>
        )
      })}
    </S.TruckerList>
  )
}
export default Trucker
