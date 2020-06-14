const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const NewsTemplate = path.resolve("./src/templates/NewsPost/index.js")
  const resNews = await graphql(`
    query NewsQuery {
      allContentfulNewsPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  resNews.data.allContentfulNewsPost.edges.forEach(edge => {
    createPage({
      component: NewsTemplate,
      path: `/news/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  const TruckerTemplate = path.resolve("./src/templates/TruckerPost/index.js")
  const resTrucker = await graphql(`
    query TruckerQuery {
      allContentfulTruckerPost {
        edges {
          node {
            idTrucker
          }
        }
      }
    }
  `)

  resTrucker.data.allContentfulTruckerPost.edges.forEach(edge => {
    createPage({
      component: TruckerTemplate,
      path: `/trucker/${edge.node.idTrucker}`,
      context: {
        idTrucker: edge.node.idTrucker,
      },
    })
  })
}
