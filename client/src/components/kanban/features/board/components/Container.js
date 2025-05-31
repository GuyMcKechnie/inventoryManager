import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { Column } from '../../column';
import { DefaultColumn } from '../../column';
import { getCard, getCoordinates, isAColumnMove, isMovingAColumnToAnotherPosition, isMovingACardToAnotherPosition, } from '../../../services/board';
import { withDroppable } from '../../with-droppable';
const Columns = forwardRef((props, ref) => (_jsx("div", Object.assign({ ref: ref, style: { whiteSpace: 'nowrap' } }, props), void 0)));
const DroppableBoard = withDroppable(Columns);
export const BoardContainer = function ({ board, renderCard, disableColumnDrag, disableCardDrag, renderColumnHeader, renderColumnAdder, allowRemoveColumn, onColumnRemove, allowRenameColumn, onColumnRename, onColumnDragEnd, onCardDragEnd, onCardNew, allowAddCard, }) {
    const handleOnDragEnd = (event) => {
        const coordinates = getCoordinates(event, board);
        if (!coordinates.source)
            return;
        isAColumnMove(event.type)
            ? isMovingAColumnToAnotherPosition(coordinates) &&
                onColumnDragEnd({ ...coordinates, subject: board.columns[coordinates.source.fromPosition] })
            : isMovingACardToAnotherPosition(coordinates) &&
                onCardDragEnd({ ...coordinates, subject: getCard(board, coordinates.source) });
    };
    return (_jsx(DragDropContext, Object.assign({ onDragEnd: handleOnDragEnd }, { children: _jsxs("div", Object.assign({ style: { overflowY: 'hidden', display: 'flex', alignItems: 'flex-start' }, className: 'react-kanban-board' }, { children: [_jsx(DroppableBoard, Object.assign({ droppableId: 'board-droppable', direction: 'horizontal', type: 'BOARD' }, { children: board.columns.map((column, index) => (_jsx(Column, Object.assign({ index: index, renderCard: renderCard, renderColumnHeader: (column) => renderColumnHeader ? (renderColumnHeader(column)) : (_jsx(DefaultColumn, Object.assign({ allowRemoveColumn: !!allowRemoveColumn, onColumnRemove: onColumnRemove, allowRenameColumn: !!allowRenameColumn, onColumnRename: onColumnRename }, { children: column }), void 0)), disableColumnDrag: !!disableColumnDrag, disableCardDrag: !!disableCardDrag, onCardNew: onCardNew, allowAddCard: allowAddCard }, { children: column }), column.id))) }), void 0), renderColumnAdder()] }), void 0) }), void 0));
};
