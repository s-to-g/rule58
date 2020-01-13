import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {useQuery} from '@apollo/react-hooks'
import styled from 'styled-components'

import BIKES_QUERY from 'graphql/bikes.query'

const LINKS = [
  {
    route: 'about',
    url: 'om-oss',
    title: 'Om oss',
  },
  {
    route: 'bikes',
    url: 'cyklar',
    title: 'Cyklar',
  },
  {
    route: 'events',
    url: 'event',
    title: 'Event',
  },
  {
    route: 'accessories',
    url: 'tillbehor',
    title: 'Tillbehör',
  },
  {
    route: 'apparel',
    url: 'klader-skor-hjalm',
    title: 'Kläder, skor och hjälm',
  },
  {
    route: 'contact',
    url: 'kontakt',
    title: 'Kontakta oss',
  },
]

const Title = styled.h1`
  color: ${({theme}) => theme.colors.primary};
`

const Home = () => {
  const {data, loading, error} = useQuery(BIKES_QUERY)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>En liten titel</Title>
      <ul>
        {LINKS.map((link) => (
          <li key={link.route}>
            <Link href={`/${link.route}`} as={`/${link.url}`}>
              <a>{link.title}</a>
            </Link>
          </li>
        ))}
        {data.bikes &&
          data.bikes.map((bike: any) => {
            return (
              <li key={`bike__${bike.id}`}>
                <p>{bike.title}</p>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Home
