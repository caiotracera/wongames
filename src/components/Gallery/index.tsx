import { useState, useEffect, useRef } from 'react';
import SlickSlider from 'react-slick';
import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
  Close,
} from '@styled-icons/material-outlined';

import { Slider } from '@/components/Slider';
import { SliderSettings } from '@/components/Slider/types';

import { GalleryProps } from '@/components/Gallery/types';
import * as S from '@/components/Gallery/styles';

const commonSettings: SliderSettings = {
  nextArrow: <ArrowRight aria-label="Next image" />,
  prevArrow: <ArrowLeft aria-label="Previous image" />,
  infinite: false,
  lazyLoad: 'ondemand',
};

const gallerySettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
  ],
};

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1,
};

export function Gallery({ items, color = 'white' }: GalleryProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const slider = useRef<SlickSlider>(null);

  function handleOpenModal(index: number) {
    setModalIsOpen(true);
    slider.current!.slickGoTo(index, true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setModalIsOpen(false);
    };

    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <S.Wrapper color={color}>
      <Slider settings={gallerySettings} ref={slider}>
        {items.map((item, index) => (
          <img
            key={`thumb-${item.src}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            role="button"
            onClick={() => handleOpenModal(index)}
          />
        ))}
      </Slider>

      <S.Modal
        aria-label="modal"
        aria-hidden={!modalIsOpen}
        isOpen={modalIsOpen}
      >
        <S.Close
          role={'button'}
          aria-label={'Close modal'}
          onClick={handleCloseModal}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider settings={modalSettings} ref={slider}>
            {items.map((item) => (
              <img
                key={`gallery-${item.src}`}
                src={item.src}
                alt={item.label}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  );
}
