import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { MenuMobileProps } from '@/components/Menu/types';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    cursor: pointer;

    width: ${theme.spacings.small};
    height: ${theme.spacings.small};
  `}
`;

export const LogoWrapper = styled.div`
  ${() => css`
    ${media.lessThan('medium')`
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    `}
  `}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const MenuNav = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.medium};
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;

    margin: 0.3rem ${theme.spacings.small} 0;

    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    text-align: center;
    color: ${theme.colors.white};

    &:hover {
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }

      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const MenuMobile = styled.nav<MenuMobileProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    opacity: ${isOpen ? 1 : 0};

    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;

    background: ${theme.colors.white};
    pointer-events: ${isOpen ? 'all' : 'none'};

    transition: opacity 0.3s ease-in-out;

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      margin: ${theme.spacings.xsmall};
      width: ${theme.spacings.small};
      height: ${theme.spacings.small};
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;

      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.xlarge};

      margin-bottom: ${theme.spacings.small};

      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};

    font-size: ${theme.font.sizes.medium};
  `}
`;
