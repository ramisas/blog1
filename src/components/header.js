import { Link } from "gatsby"
import React from "react"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const styles = {
  root: {
    flexGrow: "1 !important",
  },
  appbar: {
    backgroundColor: "#AC493A",
  },
  grow:{
    flexGrow:1
  },
  link: {
    color: `white`,
    textDecoration: `none`,
  },
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <div className={classes.grow}>
              <Link to='/' >
                <StaticQuery
                  query={graphql`
                  query {
                    file(relativePath: { eq: "icon-512x512.png" }) {
                      childImageSharp {
                        # Specify the image processing specifications right in the query.
                        # Makes it trivial to update as your page's design changes.
                        fixed(width: 100) {
                          ...GatsbyImageSharpFixed_noBase64
                        }
                      }
                    }
                  }
                `}
                  render={data => <Img  critical={true} fadeIn fixed={data.file.childImageSharp.fixed} />}
                />
              </Link>
            </div>
            <div>
              <Link to="/" className={classes.link}>
                <Button color="inherit">Home</Button>
              </Link>

              <Link to="/mytest" className={classes.link}>
                <Button color="inherit">Mytest</Button>
              </Link>

              <Link to="/courses" className={classes.link}>
                <Button color="inherit">Courses</Button>
              </Link>

              <Link to="/iframe" className={classes.link}>
                <Button color="inherit">Iframe</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header)