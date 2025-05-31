import { Card, Column } from '../../types';
export declare const CardAdder: <TCard extends Card>({ column, onConfirm }: Props<TCard>) => import("react/jsx-runtime").JSX.Element;
interface Props<TCard extends Card> {
    column: Column<TCard>;
    onConfirm: (column: Column<TCard>, card: TCard) => void;
}
export {};
