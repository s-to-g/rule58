import React, {useState} from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

import {getSpacing, getColor} from 'config/theme';
import Box from 'ui/Box';
import Text from 'ui/Text';
import Link from 'ui/Link';
import Image from 'ui/Image';
import logo from 'assets/images/logo.svg';
import sv from 'assets/lang/sv';

interface NavLinkProps {
  isLastItem: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  padding: ${getSpacing('s')}px;
  margin: 0 ${getSpacing('xs')}px;
  ${(p) => p.isLastItem && 'padding-right: 0;'}
  ${(p) => p.isLastItem && 'margin-right: 0;'}
`;

interface MobileNavLinkProps {
  isLastItem: boolean;
}

const MobileNavLink = styled(Link)<MobileNavLinkProps>`
  display: block;
  padding: ${getSpacing('l')}px 0;
  width: 85%;
  text-align: center;
  ${(p) => !p.isLastItem && `border-bottom: 1px solid ${getColor('greyDark')}`}
`;

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = styled(Box)<MobileMenuProps>`
  position: fixed;
  background-color: ${getColor('black')};
  top: 0;
  left: 100%;
  bottom: 0;
  right: 0;
  width: 100%;
  transition: all 0.2s ease-in-out;
  transform: ${(p) => (p.isOpen ? `translateX(-100%)` : `translateX(0)`)};
  z-index: 9;
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
  const LINKS = sv.header.links;
  return (
    <Box paddingY="m" paddingX={['l', 'xl', 'xl']} alignItems="center">
      <Box width="130px">
        <NextLink href="/" passHref>
          <Link>
            <Image src={logo} alt="Rule 58 bike shop logo" />
          </Link>
        </NextLink>
      </Box>
      <Box marginLeft="auto">
        <Box display={['none', 'none', 'block']}>
          <nav>
            {LINKS.map((link, index) => {
              console.log(
                'index === LINKS.length - 1',
                index === LINKS.length - 1,
              );
              return (
                <NextLink href={`/${link.route}`} key={link.route} passHref>
                  <NavLink isLastItem={index === LINKS.length - 1}>
                    {link.title}
                  </NavLink>
                </NextLink>
              );
            })}
          </nav>
        </Box>
        <MenuHamburger
          display={['block', 'block', 'none']}
          position="relative"
          right="-16px"
          padding="m"
          onClick={() => {
            setIsOpen(() => !isOpen);
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
            paddingRight={['s', 'm', 'm']}
            margin="m"
            onClick={() => {
              setIsOpen(() => !isOpen);
            }}
          >
            <Bar isRotatedTop isOpen />
            <Bar isRotatedBottom isOpen />
          </MenuHamburger>
        </Box>
        <Box flexDirection="column" width="100%">
          <nav>
            {LINKS.map((link, index) => (
              <Box justifyContent="center" key={link.route}>
                <NextLink href={`/${link.route}`} key={link.route} passHref>
                  <MobileNavLink
                    onClick={() => {
                      if (window.location.pathname === `/${link.route}`) {
                        console.log('samma!!!!!!!!!');
                        // needed for mobile menu to close when navigating to same page as you already are on
                        setIsOpen(false);
                      }
                    }}
                    isLastItem={index === LINKS.length - 1}
                  >
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
