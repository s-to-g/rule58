import React from 'react';
import Head from 'next/head';

import Box from 'ui/Box';

interface Props {
  children: React.ReactNode;
  head: {
    title: string;
  };
}

const Page = ({children, head}: Props) => (
  <Box>
    <Head>
      <title>{head.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box padding="m">{children}</Box>
  </Box>
);

export default Page;
