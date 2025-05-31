import { Card, Column, KanbanBoard } from '../../../types';
import { SharedProps } from './shared';
export declare const UncontrolledBoard: <TCard extends Card>({ initialBoard, onCardDragEnd, onColumnDragEnd, allowAddColumn, renderColumnAdder, onNewColumnConfirm, onColumnRemove, renderColumnHeader, allowRemoveColumn, allowRenameColumn, onColumnRename, onCardNew, renderCard, allowRemoveCard, onCardRemove, onColumnNew, disableCardDrag, disableColumnDrag, allowAddCard, onNewCardConfirm, }: UncontrolledBoardProps<TCard>) => import("react/jsx-runtime").JSX.Element;
interface ColumnAdderBag<TCard extends Card> {
    addColumn: (newColumn: Column<TCard>) => Promise<void>;
}
interface Position {
    on: 'top' | 'bottom';
}
interface ColumnHeaderBag<TCard extends Card> {
    removeColumn: () => void;
    renameColumn: (title: string) => void;
    addCard: (card: TCard, options?: Position) => void;
}
export interface UncontrolledBoardProps<TCard extends Card> extends SharedProps<TCard> {
    initialBoard: KanbanBoard<TCard>;
    /** If not provided , will render the default column adder */
    renderColumnAdder?: (options: ColumnAdderBag<TCard>) => JSX.Element;
    /** If not provided , will render the default column header */
    renderColumnHeader?: (column: Column<TCard>, options: ColumnHeaderBag<TCard>) => JSX.Element;
}
export {};
