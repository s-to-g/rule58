import styled, {createGlobalStyle} from 'styled-components'
import {Theme} from 'styled-system'

export const theme: Theme = {
  colors: {
    primary: '#0070f3',
  },
}

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; -webkit-font-smoothing: antialiased; }
  body, p { margin: 0; }
`

export const RootStyle = styled.div`
  font-family: system-ui, sans-serif;
  line-height: 1.5;
`

export default theme
