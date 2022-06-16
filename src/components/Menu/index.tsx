import { useState } from 'react';
import Link from 'next/link';

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill';
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Close as CloseIcon,
} from '@styled-icons/material-outlined';

import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { MediaMatch } from '@/components/MediaMatch';

import { MenuProps } from '@/components/Menu/types';
import * as S from '@/components/Menu/styles';

export function Menu({ username }: MenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleClickMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <S.Wrapper isOpen={isMobileMenuOpen}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label="Open menu" onClick={handleClickMobileMenu} />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideLabelOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/explore">
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open shopping cart" />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a" aria-hidden={isMobileMenuOpen}>
                Sign in
              </Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuMobile aria-hidden={!isMobileMenuOpen} isOpen={isMobileMenuOpen}>
        <CloseIcon aria-label="Close menu" onClick={handleClickMobileMenu} />

        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button
                fullWidth
                size="large"
                as="a"
                aria-hidden={!isMobileMenuOpen}
              >
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Sign Up">Sign up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuMobile>
    </S.Wrapper>
  );
}
