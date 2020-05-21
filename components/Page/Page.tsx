import React from 'react';
import Head from 'next/head';

import Box from 'ui/Box';
import Header from 'components/Header';
import Footer from 'components/Footer';
import sv from 'assets/lang/sv';

interface Props {
  children: React.ReactNode;
  head: {
    title: string;
    desc: string;
  };
}

const Page = ({children, head}: Props) => (
  <>
    <Head>
      <title>
        {head.title}
        {sv.app.title}
      </title>
      <meta name="description" content={head.desc} />
    </Head>
    <Box display="block">
      <Header />
      <Box display="block" minHeight="calc(100vh - 73px)">
        {children}
      </Box>
      <Footer />
    </Box>
  </>
);

export default Page;
