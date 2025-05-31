import { jsx as _jsx } from "react/jsx-runtime";
import { ColumnAdder } from '../../column-adder';
import { DefaultCard } from '../../card';
import { DefaultColumn } from '../../column';
import { BoardContainer } from './Container';
export const ControlledBoard = function ({ children: board, onCardDragEnd, onColumnDragEnd, onNewColumnConfirm, onColumnRemove, onColumnRename, onCardRemove, renderColumnAdder, renderColumnHeader, renderCard, allowAddColumn = true, allowRemoveColumn = true, allowRenameColumn = true, allowRemoveCard = true, allowAddCard = true, disableCardDrag = false, disableColumnDrag = false, }) {
    const handleOnCardDragEnd = ({ source, destination, subject }) => {
        if (onCardDragEnd) {
            onCardDragEnd(subject, source, destination);
        }
    };
    const handleOnColumnDragEnd = ({ source, destination, subject }) => {
        if (onColumnDragEnd) {
            onColumnDragEnd(subject, source, destination);
        }
    };
    return (_jsx(BoardContainer, { onCardDragEnd: handleOnCardDragEnd, onColumnDragEnd: handleOnColumnDragEnd, renderColumnAdder: () => {
            if (!allowAddColumn)
                return null;
            if (renderColumnAdder)
                return renderColumnAdder();
            if (!onNewColumnConfirm)
                return null;
            return _jsx(ColumnAdder, { onConfirm: (title) => onNewColumnConfirm({ title, cards: [] }) }, void 0);
        }, renderColumnHeader: renderColumnHeader
            ? renderColumnHeader
            : (column) => (_jsx(DefaultColumn, Object.assign({ allowRemoveColumn: allowRemoveColumn, onColumnRemove: (updatedColumn) => onColumnRemove?.({ board, column: updatedColumn }), allowRenameColumn: allowRenameColumn, onColumnRename: (renamedColumn) => onColumnRename?.({ board, column: renamedColumn }) }, { children: column }), void 0)), renderCard: (_column, card, dragging) => {
            if (renderCard)
                return renderCard(card, { dragging });
            return (_jsx(DefaultCard, Object.assign({ dragging: dragging, allowRemoveCard: !!allowRemoveCard, onCardRemove: (card) => onCardRemove?.({ board, column: _column, card }) }, { children: card }), void 0));
        }, allowRemoveColumn: allowRemoveColumn, onColumnRemove: (column) => onColumnRemove?.({ board, column }), allowRenameColumn: allowRenameColumn, onColumnRename: (column) => onColumnRename?.({ board, column }), disableColumnDrag: disableColumnDrag, disableCardDrag: disableCardDrag, 
        // TODO: Check these
        onCardNew: () => {
            //
        }, allowAddCard: allowAddCard, board: board }, void 0));
};
