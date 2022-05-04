import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
} from '@styled-icons/material-outlined';

import { Slider } from '@/components/Slider';
import { SliderSettings } from '@/components/Slider/types';
import { GameCard } from '@/components/GameCard';

import { GameCardSliderProps } from '@/components/GameCardSlider/types';
import * as S from '@/components/GameCardSlider/styles';

const settings: SliderSettings = {
  nextArrow: <ArrowRight aria-label="Next games" />,
  prevArrow: <ArrowLeft aria-label="Previous games" />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
};

export function GameCardSlider({
  items,
  color = 'white',
}: GameCardSliderProps) {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items.map((item) => (
          <GameCard key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  );
}
