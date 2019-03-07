import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`

export default ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <div>
      <strong>Website URL:</strong>
      <a href={pageContext.acf.portfolio_url}>
        {pageContext.acf.portfolio_url}
      </a>
    </div>
    <FeaturedImage src={pageContext.featured_media.source_url} alt="" />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)
