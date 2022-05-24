import { createGlobalStyle, css } from 'styled-components';

type GlobalStyleProps = {
  removeBg?: boolean;
};

export const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  ${({ theme, removeBg }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before, &::after {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family.default};
      font-size: ${theme.font.sizes.medium}
      font-style: normal;
      font-weight: 400;
      font-display: swap;

      ${
        !removeBg &&
        css`
          background-color: ${theme.colors.mainBg};
        `
      }

    }
  `}
`;
