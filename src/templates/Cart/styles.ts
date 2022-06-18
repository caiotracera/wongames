import styled, { css } from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.large};

    margin: ${theme.spacings.large} 0;

    @media (min-width: 768px) {
      grid-template-columns: 2fr 1fr;
    }
  `}
`;
