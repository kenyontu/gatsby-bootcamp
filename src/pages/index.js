import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

function IndexPage() {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Kenyon</h2>

      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  );
}

export default IndexPage;
