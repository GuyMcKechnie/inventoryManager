import { Card, Column, KanbanBoard } from '../../../types';
import { OnDragEnd } from './Container';
import { SharedProps } from './shared';
export declare const ControlledBoard: <TCard extends Card>({ children: board, onCardDragEnd, onColumnDragEnd, onNewColumnConfirm, onColumnRemove, onColumnRename, onCardRemove, renderColumnAdder, renderColumnHeader, renderCard, allowAddColumn, allowRemoveColumn, allowRenameColumn, allowRemoveCard, allowAddCard, disableCardDrag, disableColumnDrag, }: ControlledBoardProps<TCard>) => import("react/jsx-runtime").JSX.Element;
export declare type OnDragEndNotification<TSubject> = (subject: TSubject, source: OnDragEnd<TSubject>['source'], destination: OnDragEnd<TSubject>['destination']) => void;
export interface ControlledBoardProps<TCard extends Card> extends SharedProps<TCard> {
    children: KanbanBoard<TCard>;
    /** If not provided , will render the default column adder */
    renderColumnAdder?: () => JSX.Element;
    /** If not provided , will render the default column header */
    renderColumnHeader?: (column: Column<TCard>) => JSX.Element;
}
