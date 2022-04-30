import { Story, Meta } from '@storybook/react/types-6-0';
import { Settings } from 'react-slick';

import { Slider } from '@/components/Slider';
import { SliderProps } from '@/components/Slider/types';
import styled from 'styled-components';

export default {
  title: 'Slider',
  component: Slider,
} as Meta;

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

const horizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export const Horizontal: Story<SliderProps> = (args) => (
  <Slider {...args} settings={horizontalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
    <Slide>8</Slide>
  </Slider>
);

const verticalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
};

export const Vertical: Story<SliderProps> = (args) => (
  <Slider {...args} settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
    <Slide>8</Slide>
  </Slider>
);
