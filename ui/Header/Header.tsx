import React, {useState} from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

import {getSpacing, getColor} from 'config/theme';
import Box from 'ui/Box';
import Text from 'ui/Text';
import Link from 'ui/Link';

const LINKS = [
  {
    route: 'bikes',
    url: 'cyklar',
    title: 'Cyklar',
  },
  {
    route: 'apparel',
    url: 'klader-skor-hjalm',
    title: 'Kläder, skor och hjälm',
  },
  {
    route: 'accessories',
    url: 'tillbehor',
    title: 'Tillbehör',
  },
  {
    route: 'events',
    url: 'event',
    title: 'Event',
  },
  {
    route: 'about',
    url: 'om-oss',
    title: 'Om oss',
  },
  {
    route: 'contact',
    url: 'kontakt',
    title: 'Kontakta oss',
  },
];

const NavLink = styled(Link)`
  padding: ${getSpacing('s')}px;
  margin: 0 ${getSpacing('xs')}px;
`;

interface MobileNavLinkProps {
  isLastItem: boolean;
}

const MobileNavLink = styled(Link)<MobileNavLinkProps>`
  display: block;
  padding: ${getSpacing('l')}px 0;
  width: 95%;
  text-align: center;
  ${(p) =>
    !p.isLastItem && `border-bottom: 1px solid ${getColor('greenLight')}`}
`;

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = styled(Box)<MobileMenuProps>`
  position: absolute;
  background-color: ${getColor('green')};
  top: 0;
  left: 100%;
  bottom: 0;
  right: 0;
  width: 100%;
  transition: all 0.2s ease-in-out;
  transform: ${(p) => (p.isOpen ? `translateX(-100%)` : `translateX(0)`)};
`;

const MenuHamburger = styled(Box)`
  cursor: pointer;
`;

interface BarProps {
  isRotatedTop?: boolean;
  isRotatedBottom?: boolean;
  isOpen?: boolean;
}

const Bar = styled(Box).attrs((props: BarProps) => ({
  backgroundColor: props.isOpen ? 'white' : 'black',
  position: props.isOpen && 'relative',
  marginTop: !props.isOpen && 'xs',
}))<BarProps>`
  width: 20px;
  height: 3px;
  ${(p) => p.isRotatedTop && `transform: rotate(-45deg) translate(-9px, 4px)`};

  ${(p) => p.isRotatedBottom && `transform: rotate(45deg) translate(2px, 6px)`};
  ${(p) => (p.isRotatedTop || p.isRotatedBottom) && `top: -6px; right: -3px;`};
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box padding="m" alignItems="center">
      <Box>
        <NextLink href="/" passHref>
          <Link>
            <Text fontSize="xl">Rule 58</Text>
          </Link>
        </NextLink>
      </Box>
      <Box marginLeft="auto">
        <Box display={['none', 'none', 'block']}>
          <nav>
            {LINKS.map((link) => (
              <NextLink href={`/${link.route}`} key={link.route} passHref>
                <NavLink>{link.title}</NavLink>
              </NextLink>
            ))}
          </nav>
        </Box>
        <MenuHamburger
          display={['block', 'block', 'none']}
          padding="m"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Bar />
          <Bar />
          <Bar />
        </MenuHamburger>
      </Box>
      <MobileMenu
        isOpen={isOpen}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box marginLeft="auto" position="absolute" top="6px" right="0">
          <MenuHamburger
            display="block"
            padding="m"
            margin="m"
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
          >
            <Bar isRotatedTop isOpen />
            <Bar isRotatedBottom isOpen />
          </MenuHamburger>
        </Box>
        <Box flexDirection="column" width="100%">
          <nav>
            {LINKS.map((link, index) => (
              <Box justifyContent="center">
                <NextLink href={`/${link.route}`} key={link.route} passHref>
                  <MobileNavLink isLastItem={index === LINKS.length - 1}>
                    <Text fontSize="xl" color="white">
                      {link.title}
                    </Text>
                  </MobileNavLink>
                </NextLink>
              </Box>
            ))}
          </nav>
        </Box>
      </MobileMenu>
    </Box>
  );
};

export default Header;
