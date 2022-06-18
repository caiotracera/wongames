import styled, { css, DefaultTheme } from 'styled-components';

import { LinkProps } from '@/components/ProfileMenu/types';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    @media (min-width: 768px) {
      flex-direction: column;
      border: 0;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    }
  `}
`;

export const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  `,
  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
};

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive = false }) => css`
    text-decoration: none;

    display: flex;
    align-items: center;

    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    @media (max-width: 768px) {
      justify-content: center;
      flex: 1;
    }

    ${isActive && linkModifiers.active(theme)}
    ${!isActive && linkModifiers.default(theme)}
  `}
`;

export const LinkText = styled.span`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};

    @media (max-width: 768px) {
      display: none;
    }
  `}
`;
