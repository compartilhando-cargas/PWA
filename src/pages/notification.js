import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "../styles/notification"
import { SEO, Layout, TabBar } from "../components"
import { FaWhatsapp, FaShare } from "react-icons/fa"

const NotificationPage = () => {
  const data = useStaticQuery(graphql`
    query notifications {
      allContentfulNotification {
        edges {
          node {
            idNotification
            title
            desc
            link
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <TabBar />
      <SEO title="notification" />
      <S.Title>NOTIFICAÇÕES</S.Title>
      {data.allContentfulNotification.edges.map(edge => {
        return (
          <S.NotificationLayoutLink key={edge.node.idNotification}>
            <S.NotificationCard to={edge.node.link}>
              <h4>{edge.node.title}</h4>
              <p>{edge.node.desc}</p>
              <div>
                <FaShare size={24} color="#999999" />
                <FaWhatsapp size={24} color="#128C7E" />
              </div>
            </S.NotificationCard>
          </S.NotificationLayoutLink>
        )
      })}
    </Layout>
  )
}

export default NotificationPage
