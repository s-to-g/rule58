import React from 'react';
import Head from 'next/head';

import Box from 'ui/Box';
import Header from 'ui/Header';

interface Props {
  children: React.ReactNode;
  head: {
    title: string;
  };
}

const Page = ({children, head}: Props) => (
  <>
    <Head>
      <title>{head.title} | Rule 58</title>
    </Head>
    <Box padding="m" display="block">
      <Header />
      {children}
    </Box>
  </>
);

export default Page;
