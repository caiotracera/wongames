import styled, { css } from 'styled-components';

import { WrapperProps } from '@/components/Highlight/types';
import media from 'styled-media-query';

const wrapperModifiers = {
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `,
  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,
};

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    height: 23rem;

    display: grid;

    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;

    &::after {
      content: '';

      position: absolute;
      width: 100%;
      height: 100%;

      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${wrapperModifiers[alignment!]()};
  `}
`;

export const FloatImage = styled.img`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};

    max-height: 23rem;
    max-width: 100%;

    grid-area: floatimage;
    align-self: end;

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};

    padding: ${theme.spacings.xsmall};

    grid-area: content;

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.light};

    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
