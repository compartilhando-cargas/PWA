import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Trucker = () => {
  const data = useStaticQuery(graphql`
    query TruckerQuery {
      allContentfulTruckerPost {
        edges {
          node {
            idTrucker
            name
            description
            phone
          }
        }
      }
    }
  `)
  return (
    <div>
      {data.allContentfulTruckerPost.edges.map(edge => {
        return (
          <li key={edge.node.idTrucker}>
            <Link to={`/trucker/${edge.node.idTrucker}`}>
              <h2>{edge.node.name}</h2>
            </Link>
            <h3>{edge.node.description}</h3>
            <h4>{edge.node.phone}</h4>
          </li>
        )
      })}
    </div>
  )
}
export default Trucker
