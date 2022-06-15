import styled, { css } from 'styled-components';

import { ModalProps } from '@/components/Gallery/types';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      cursor: pointer;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    @media (max-width: 768px) {
      overflow-x: hidden;
    }
  `}
`;

export const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,
  closed: () => css`
    opacity: 0;
    pointer-events: none;
  `,
};

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${theme.layers.modal};

    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.7);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: opacity ${theme.transition.default};

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.closed()}
  `}
`;

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: right;

    position: absolute;
    left: 0;
    top: 0;

    cursor: pointer;

    width: 100%;
    height: 100%;
  `}
`;

export const Content = styled.div`
  max-width: min(120rem, 100%);
  max-height: 80rem;
`;
