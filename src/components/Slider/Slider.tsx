import { forwardRef } from 'react';
import SlickSlider from 'react-slick';

import { SliderProps } from '@/components/Slider/types';
import * as S from './styles';

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref,
) => {
  return (
    <S.Wrapper>
      <SlickSlider {...settings} ref={ref}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  );
};

export default forwardRef(Slider);
