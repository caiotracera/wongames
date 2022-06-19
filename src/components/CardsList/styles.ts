import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};

    color: ${theme.colors.black};

    padding: 1.3rem ${theme.spacings.xsmall};

    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;

export const AddCard = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};

    border-radius: 0.2rem;

    color: ${theme.colors.black};

    display: flex;
    align-items: center;
    cursor: pointer;

    padding: 0 ${theme.spacings.xxsmall};

    height: 5rem;

    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};

      width: 2.4rem;
    }
  `}
`;
