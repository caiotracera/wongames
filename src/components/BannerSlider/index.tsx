import { Slider } from '@/components/Slider';
import { SliderSettings } from '@/components/Slider/types';
import { Banner } from '@/components/Banner';

import { BannerSliderProps } from '@/components/BannerSlider/types';
import * as S from '@/components/BannerSlider/styles';

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

export function BannerSlider({ items }: BannerSliderProps) {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  );
}
