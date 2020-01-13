import React from 'react'
import App from 'next/app'
import {ApolloProvider} from '@apollo/react-hooks'
import {ThemeProvider} from 'styled-components'

import theme, {GlobalStyle} from 'config/theme'
import withData from 'utils/apollo-client'

interface Props {
  apollo: any
}

class MyApp extends App<Props> {
  render() {
    const {Component, pageProps, apollo} = this.props
    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default withData(MyApp)
