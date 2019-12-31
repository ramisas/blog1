import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'


import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"
import BlogItem from "../components/FrontPageTabs"
import { withStyles, withTheme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const styles = theme => ({
  mainBlogArea: {
    paddingTop: '20px !important',

  },
  redBox:{
    padding:30,
    paddingTop:50,
    height:200,
    backgroundColor:'#AC4839',
    marginBottom:30
  },
  greyBox:{
    padding:30,
    paddingTop:50,
    height:200,
    backgroundColor:'#D9D8D8'
  },
  blackButton:{
    backgroundColor:'black',
    color:'white'

  },
  redButton:{
    backgroundColor:'#AC4839',
    color:'white'

  },
  TabsSection:{
    marginTop:30,
    backgroundColor:'white',
    border:'1px solid grey',
    height:300,
  },
  Tab:{
    width:10
  }


})


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Welcome to" keywords={[`Courses`, `Training`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <Img fixed={document.node.image.childImageSharp.fixed}/>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
        }
      }
    }
  }
`