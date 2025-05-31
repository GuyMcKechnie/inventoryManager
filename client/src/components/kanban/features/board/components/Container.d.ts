import { Coordinates } from '../../../services/board';
import { RenderCard } from '../../column';
import { Card, Column as ColumnType, KanbanBoard } from '../../../types';
import { ControlledBoardProps } from './Controlled';
export declare const BoardContainer: <TCard extends Card>({ board, renderCard, disableColumnDrag, disableCardDrag, renderColumnHeader, renderColumnAdder, allowRemoveColumn, onColumnRemove, allowRenameColumn, onColumnRename, onColumnDragEnd, onCardDragEnd, onCardNew, allowAddCard, }: Props<TCard>) => import("react/jsx-runtime").JSX.Element;
export interface OnDragEnd<TSubject> extends Partial<Coordinates> {
    subject: TSubject;
}
interface Props<TCard extends Card> {
    board: KanbanBoard<TCard>;
    renderCard: RenderCard<TCard>;
    disableColumnDrag: boolean;
    disableCardDrag: boolean;
    renderColumnHeader: ControlledBoardProps<TCard>['renderColumnHeader'];
    renderColumnAdder: () => JSX.Element | null;
    allowRemoveColumn: boolean;
    onColumnRemove?: (column: ColumnType<TCard>) => void;
    allowRenameColumn: boolean;
    onColumnRename?: (column: ColumnType<TCard>, title: string) => void;
    onColumnDragEnd: (event: OnDragEnd<ColumnType<TCard>>) => void;
    onCardDragEnd: (event: OnDragEnd<TCard>) => void;
    onCardNew: (column: ColumnType<TCard>, card: TCard) => void | Promise<void>;
    allowAddCard: boolean;
}
export {};
