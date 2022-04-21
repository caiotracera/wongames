import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { WrapperProps } from '@/components/Heading/types';

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 5rem;
      /* height: 0.7rem;
      background-color: ${theme.colors.primary}; */
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `,
};

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, color, lineLeft, lineBottom, size }) => css`
    color: ${theme.colors[color!]};

    ${!!lineLeft && wrapperModifiers.lineLeft(theme)};
    ${!!lineBottom && wrapperModifiers.lineBottom(theme)};
    ${!!size && wrapperModifiers[size](theme)};
  `}
`;
