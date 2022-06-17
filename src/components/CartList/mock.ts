import { GameItemProps } from '@/components/GameItem/types';

export const items: GameItemProps[] = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00',
    downloadLink: '/',
    paymentInfo: {
      flag: 'mastercard',
      img: '/img/cards/mastercard.png',
      number: '**** **** **** 1234',
      purchaseDate: '12/12/2020',
    },
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/150x70',
    title: 'Borderlands 3',
    price: 'R$ 215,00',
  },
];
