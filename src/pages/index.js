import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
//the above can also be done like this
//import {header} from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

const Home = ({ data }) => {
  const {description} = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Ideate</h2>
          <h3>Develop & Deploy</h3>
          <p>{description}</p>
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
        </div>
        <StaticImage
          src="../images/girl.png"
          alt="home"
          style={{
            width: "380px",
            borderRadius: "30px",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }}
        />
      </section>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query DescriptionInfo {
    site {
      siteMetadata {
        description
      }
    }
  }
`
