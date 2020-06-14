import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components"

import * as S from "../../styles/truckerPost"

export const query = graphql`
  query TruckerPost($idTrucker: Int!) {
    contentfulTruckerPost(idTrucker: { eq: $idTrucker }) {
      name
      phoneNumber
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
    phoneNumber,
    description,
    photo,
  } = props.data.contentfulTruckerPost

  return (
    <Layout>
      <S.TruckerWrapper>
        <img
          width="300"
          src={`https:${photo?.file.url}`}
          alt={photo?.description}
        />

        <S.TruckerName>{name}</S.TruckerName>
        <S.TruckerPhone>
          {phoneNumber}
          <S.PhoneLink href={`https://wa.me/${phoneNumber}`}>
            <S.WhatsappIcon />
          </S.PhoneLink>
        </S.TruckerPhone>
        <S.TruckerDescription>{description}</S.TruckerDescription>
      </S.TruckerWrapper>
    </Layout>
  )
}

export default TruckerPost
