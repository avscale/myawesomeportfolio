/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import MainMenu from "./MainMenu"
//import Header from "./header"
import styled, { createGlobalStyle } from "styled-components"
import SiteFavicon from "./SiteFavicon"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`
const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`
const Layout = ({ children }) => (
  <div>
    <SiteFavicon />
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
)

export default Layout
