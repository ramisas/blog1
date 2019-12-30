import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import styled from "styled-components";
import Image from "../components/image" // 💅 yay!

const CustomBox = styled.div`
  border: 1px solid rgb(0, 143, 104);
  padding: 20px;

  h3 {
    color: rgb(109, 182, 91);
    margin: 0 0 10px;
    padding: 0;
  }
`
const StyledLink = styled(Link)`
  color: red;
`


class SCDemoPage extends React.Component {
  render() {
    const siteData = this.props.data.site.siteMetadata;
    const siteTitle = siteData.title;
    const siteDescription = siteData.description;

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{
            name: 'description',
            content: siteDescription
          }]}
          title={siteTitle}
        />

        <section>
          <h2>Styled Components Demo</h2>

          <div>
            <h3>Banana Milkshakes</h3>
            <p>We'll definitely need frozen bananas
              and some milk.</p>

            <Link to='/'>To Homepage</Link>
          </div>

          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>

          <CustomBox>
            <h3>Banana Milkshakes</h3>
            <p>We'll definitely need frozen bananas
              and some milk.</p>
            <StyledLink to="/">To Homepage</StyledLink>
          </CustomBox>


        </section>
      </Layout>
    )
  }
};

export default SCDemoPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

