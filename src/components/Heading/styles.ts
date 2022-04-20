import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { WrapperProps } from '@/components/Heading/types';

const wrapperModifiers = {
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
  ${({ theme, color, lineLeft, lineBottom }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color!]};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${!!lineLeft && wrapperModifiers.lineLeft(theme)};
    ${!!lineBottom && wrapperModifiers.lineBottom(theme)};
  `}
`;
