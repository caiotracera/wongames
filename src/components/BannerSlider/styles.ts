import styled, { css } from 'styled-components';

import * as BannerStyles from '@/components/Banner/styles';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;

      display: flex !important;
      align-items: center;
      justify-content: center;

      margin-top: ${theme.spacings.small};

      li {
        background: white;

        width: 1.2rem;
        height: 1.2rem;

        border-radius: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        margin: 0 ${theme.spacings.xxsmall};

        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        opacity: 0;

        width: 1.2rem;
        height: 1.2rem;

        cursor: pointer;
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Wrapper} {
        max-width: 104rem;
        margin: 0 auto;
      }

      .slick-dots {
        position: absolute;
        right: 0;
        top: 0;

        flex-direction: column;

        height: 100%;

        margin: 0;

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    `}
  `}
`;
