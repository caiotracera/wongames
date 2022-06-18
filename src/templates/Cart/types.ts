import { GameCardProps } from '@/components/GameCard/types';
import { HighlightsProps } from '@/components/Highlight/types';
import { CartListProps } from '@/components/CartList/types';
import { PaymentOptionsProps } from '@/components/PaymentOptions/types';

export type CartTemplateProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightsProps;
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>;
