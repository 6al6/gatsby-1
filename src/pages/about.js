import * as React from "react";
import { Link } from "gatsby";
import Layout from "./layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>Hi my name is Gal and I built this site with Gatsby. </p>
    </Layout>
  );
};

export const Head = () => <title>About me</title>;

export default AboutPage;
