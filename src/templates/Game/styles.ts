import styled, { css } from 'styled-components';

import { Container } from '@/components/Container';

import { CoverProps } from '@/templates/Game/types';

export const Wrapper = styled.main`
  margin-top: 20rem;

  @media (min-width: 768px) {
    margin-top: 45rem;
  }
`;

export const Cover = styled.div<CoverProps>`
  ${({ theme, src }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    height: 39.5rem;

    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;

    @media (min-width: 768px) {
      height: 70rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    }
  `}
`;

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    @media (min-width: 768px) {
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`;

export const SectionGameInfo = styled(Section)``;

export const SectionGallery = styled(Section)`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const SectionDescription = styled(Section)`
  ${({ theme }) => css`
    .description__copyrights {
      text-align: center;
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray};
      margin-top: ${theme.spacings.medium};
    }
  `}
`;

export const SectionGameDetails = styled(Section)`
  ${({ theme }) => css`
    > div {
      padding-bottom: ${theme.spacings.xlarge};
      border-bottom: 0.1rem solid rgba(181, 181, 181, 0.3);

      @media (min-width: 768px) {
        padding-bottom: calc(${theme.spacings.xxlarge} * 2);
      }
    }
  `}
`;
