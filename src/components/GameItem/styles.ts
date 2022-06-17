import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    @media (min-width: 768px) {
      display: flex;
    }
  `}
`;

export const GameContent = styled.div`
  display: flex;
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    margin-right: 1.2rem;
    width: 9.6rem;
    height: 5.6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (min-width: 768px) {
      margin-right: ${theme.spacings.xsmall};
      width: 15rem;
      height: 7rem;
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.black};
    line-height: ${theme.font.sizes.small};

    margin-bottom: ${theme.spacings.xxsmall};

    @media (min-width: 768px) {
      font-size: 2rem;
      line-height: 2rem;
    }
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.bold};

    padding: calc(${theme.spacings.xxsmall} / 2) ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};

    background-color: ${theme.colors.secondary};
  `}
`;

export const DownloadLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-left: ${theme.spacings.xxsmall};
  `}
`;

export const PaymentContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};

    display: flex;
    flex-direction: column;

    min-width: 28rem;
    margin-top: ${theme.spacings.xsmall};

    @media (min-width: 768px) {
      margin-top: 0;

      flex: 1;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-end;
    }
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-left: ${theme.spacings.xxsmall};
    }

    @media (max-width: 768px) {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`;
