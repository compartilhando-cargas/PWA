import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "../styles/notification"
import { SEO, Layout, TabBar } from "../components"
import { FaShare } from "react-icons/fa"

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
      <S.NotificationLayoutList>
        {data.allContentfulNotification.edges.map(edge => {
          return (
            <S.NotificationLink
              key={edge.node.idNotification}
              to={`/news/${edge.node.link}`}
            >
              <S.NotificationCard>
                <h4>{edge.node.title}</h4>
                <p>{edge.node.desc}</p>
                <div>
                  <FaShare size={24} color="#999999" />
                </div>
              </S.NotificationCard>
            </S.NotificationLink>
          )
        })}
      </S.NotificationLayoutList>
    </Layout>
  )
}

export default NotificationPage
