import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

function Contact() {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <ul>
        <li>
          <b>Phone: </b>12345678
        </li>
        <li>
          <b>Email: </b>email@email.com
        </li>
      </ul>
    </Layout>
  );
}

export default Contact;
