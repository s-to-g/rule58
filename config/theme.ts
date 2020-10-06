import {createGlobalStyle} from 'styled-components';
import {Theme} from 'styled-system';

export type Colors =
  | 'primary'
  | 'black'
  | 'white'
  | 'green'
  | 'grey'
  | 'greyDark'
  | 'greyDarker'
  | 'greyLight'
  | 'yellow'
  | 'coral'
  | 'blue'
  | 'orange'
  | 'sand';

interface ColorProps {
  colors: {[key in Colors]: string};
}

export const getColor = (colorName: Colors) => theme.colors[colorName];

const palette = {
  black: '#000000',
  white: '#ffffff',
  green: '#546C5E',
  grey: '#c5c4c4',
  greyDark: '#404040',
  greyDarker: '#333333',
  greyLight: '#F7F5F5',
  yellow: '#FDE53C',
  coral: '#FF6048',
  blue: '#005CF0',
  orange: '#FAAF65',
  sand: '#D3A57A',
};

type FontSizes = 'xs' | 's' | 'm' | 'l' | 'xl';

interface FontSizesProps {
  fontSizes: {[key in FontSizes]: number};
}

type Space = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

interface SpaceProps {
  space: {[key in Space]: number};
}

export const getSpacing = (spacing: Space) => theme.space[spacing];

type Breakpoints = '500px' | '900px' | '1100px' | '1500px';

interface BreakpointProps {
  breakpoints: Breakpoints[];
}

export const getMaxwidth = () =>
  theme.breakpoints[theme.breakpoints.length - 1];

export const theme: Theme &
  ColorProps &
  BreakpointProps &
  FontSizesProps &
  SpaceProps = {
  colors: {
    primary: palette.greyDark,
    black: palette.black,
    white: palette.white,
    green: palette.green,
    grey: palette.grey,
    greyDark: palette.greyDark,
    greyDarker: palette.greyDarker,
    greyLight: palette.greyLight,
    yellow: palette.yellow,
    coral: palette.coral,
    blue: palette.blue,
    orange: palette.orange,
    sand: palette.sand,
  },
  breakpoints: ['500px', '900px', '1100px', '1500px'],
  fontSizes: {
    xs: 11,
    s: 13,
    m: 17,
    l: 24,
    xl: 36,
    xxl: 54,
    xxxl: 74,
    xxxxl: 94,
  },
  space: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 52,
    xxxl: 80,
  },
};

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; -webkit-font-smoothing: antialiased; }
  body, p { margin: 0; }
  body { overflow-x: hidden; font-family: 'Karla', system-ui, sans-serif; line-height: 1.5; }
`;

export default theme;
