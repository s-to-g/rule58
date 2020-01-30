import styled, {createGlobalStyle} from 'styled-components'
import {Theme} from 'styled-system'

type Colors = 'black' | 'white' | 'primary'

interface ColorProps {
  colors: {[key in Colors]: string}
}

type FontSizes = 'xs' | 's' | 'm' | 'l' | 'xl'

interface FontSizesProps {
  fontSizes: {[key in FontSizes]: number}
}

type Space = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

interface SpaceProps {
  space: {[key in Space]: number}
}

type Breakpoints = '400px' | '800px'

interface BreakpointProps {
  breakpoints: Breakpoints[]
}

export const theme: Theme &
  ColorProps &
  BreakpointProps &
  FontSizesProps &
  SpaceProps = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    primary: '#0070f3',
  },
  breakpoints: ['400px', '800px'],
  fontSizes: {
    xs: 11,
    s: 13,
    m: 14,
    l: 17,
    xl: 32,
  },
  space: {
    xs: 4,
    s: 8,
    sm: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 42,
    xxxl: 50,
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