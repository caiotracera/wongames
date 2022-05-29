import { forwardRef, ForwardRefRenderFunction } from 'react';

import { ButtonProps, WrapperProps } from '@/components/Button/types';
import * as S from '@/components/Button/styles';

const Button: ForwardRefRenderFunction<WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    fullWidth = false,
    icon,
    minimal = false,
    ...props
  },
  ref,
) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      ref={ref}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};

export default forwardRef(Button);
