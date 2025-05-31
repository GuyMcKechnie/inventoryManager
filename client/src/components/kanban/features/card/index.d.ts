import { FC } from 'react';
import { Card as CardType } from '../../types';
export declare const Card: FC<Props>;
declare type RenderCard = (isDragging: boolean) => JSX.Element;
interface Props {
    children: CardType;
    index: number;
    renderCard: RenderCard;
    disableCardDrag: boolean;
}
export * from './components';
