import { Column as ColumnType, Card as CardType } from '../../types';
export declare const Column: <TCard extends CardType>({ children: column, index: columnIndex, renderCard, renderColumnHeader, disableColumnDrag, disableCardDrag, onCardNew, allowAddCard, }: Props<TCard>) => import("react/jsx-runtime").JSX.Element;
export declare type RenderColumnHeader<TCard extends CardType> = (column: ColumnType<TCard>) => JSX.Element;
export declare type RenderCard<TCard extends CardType> = (column: ColumnType<TCard>, card: TCard, dragging: boolean) => JSX.Element;
interface Props<TCard extends CardType> {
    children: ColumnType<TCard>;
    index: number;
    renderCard: RenderCard<TCard>;
    renderColumnHeader: RenderColumnHeader<TCard>;
    disableColumnDrag: boolean;
    disableCardDrag: boolean;
    onCardNew: (column: ColumnType<TCard>, card: TCard) => void | Promise<void>;
    allowAddCard: boolean;
}
export * from './components';
