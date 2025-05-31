import { Card } from '../../../types';
export declare const DefaultCard: <TCard extends Card>({ children: card, dragging, allowRemoveCard, onCardRemove, }: Props<TCard>) => import("react/jsx-runtime").JSX.Element;
interface Props<TCard extends Card> {
    children: TCard;
    dragging: boolean;
    allowRemoveCard: boolean;
    onCardRemove?: (card: TCard) => void;
}
export {};
