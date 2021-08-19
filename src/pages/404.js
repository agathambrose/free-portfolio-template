import React from "react"
import Layout from "../components/Layout"
import {StaticImage} from "gatsby-plugin-image"

const NotFound = () => {
  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "column",  alignItems: "center"}}>
        <h2>404</h2>
        <p>Sorry, that page doesn't exist (yet)!</p>
        <StaticImage
          src="../images/404.png"
          alt="not-found"
          style={{
            width: "400px",
            border: "none",
            borderRadius: "10px"
          }}
        />
      </div>
    </Layout>
  )
}

export default NotFound
