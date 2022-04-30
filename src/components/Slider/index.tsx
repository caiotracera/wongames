import SlickSlider from 'react-slick';

import { SliderProps } from '@/components/Slider/types';
import * as S from './styles';

export function Slider({ children, settings }: SliderProps) {
  return (
    <S.Wrapper>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Wrapper>
  );
}
