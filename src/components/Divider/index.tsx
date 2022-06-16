import styled, { css } from 'styled-components';

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};

    height: 0.1rem;

    background: rgba(181, 181, 181, 0.3);
    border: 0;

    @media (min-width: 768px) {
      margin: calc(${theme.spacings.xxlarge} * 2) auto ${theme.spacings.xxlarge};
    }
  `}
`;
