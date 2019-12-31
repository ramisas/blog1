import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const CoursePage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Courses.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiCourse.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <Img fixed={document.node.picture.childImageSharp.fixed}/>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default CoursePage

export const pageQuery = graphql`  
  query CourseQuery {
    allStrapiCourse {
      edges {
        node {
          id
          picture {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          description
        }
      }
    }
  }
`