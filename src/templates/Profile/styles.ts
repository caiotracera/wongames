import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 32rem 1fr;
      gap: calc(${theme.grid.gutter} * 2);
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.white};

    color: ${theme.colors.black};

    padding: ${theme.spacings.xsmall};
  `}
`;
