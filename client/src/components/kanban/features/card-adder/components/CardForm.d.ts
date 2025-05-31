import { MouseEventHandler } from 'react';
import { Card } from '../../../types';
export declare const CardForm: <TCard = Card>({ onConfirm, onCancel }: Props<TCard>) => import("react/jsx-runtime").JSX.Element;
interface Props<TCard = Card> {
    onConfirm: (card: TCard) => void;
    onCancel: MouseEventHandler<HTMLButtonElement>;
}
export {};
