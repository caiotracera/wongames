import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { WrapperProps } from '@/components/Logo/types';

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
  hideLabelOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;

        & .text {
          display: none;
        }
      }
    `}
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, size, hideLabelOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!hideLabelOnMobile && wrapperModifiers.hideLabelOnMobile}
  `}
`;
