import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const SiteLogoWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  padding: 20px 20px 20px 0;
`
const SiteLogoImage = styled.img`
  max-width: 100%;
`

const SiteLogo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpLogo {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
    `}
    render={props => (
      <SiteLogoWrapper>
        <SiteLogoImage
          src={props.allWordpressWpLogo.edges[0].node.url.source_url}
          alt=""
        />
      </SiteLogoWrapper>
    )}
  />
)
export default SiteLogo
