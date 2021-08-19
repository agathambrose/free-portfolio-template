import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query TitleInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>
        {title}{" "}
        <span
          style={{
            borderRadius: "50%",
            backgroundColor: "#fff",
            width: "10px",
            height: "10px",
            display: "inline-block",
          }}
        ></span>
      </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
