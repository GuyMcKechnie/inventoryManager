import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { ColumnAdder } from '../../column-adder';
import { when, partialRight } from '../../../services/utils';
import { DefaultCard } from '../../card';
import { moveCard, moveColumn, addColumn, removeColumn, changeColumn, addCard, removeCard } from '../../../services/helpers';
import { BoardContainer } from './Container';
import { DefaultColumn } from '../../column';
export const UncontrolledBoard = function ({ initialBoard, onCardDragEnd, onColumnDragEnd, allowAddColumn = true, renderColumnAdder, onNewColumnConfirm, onColumnRemove, renderColumnHeader, allowRemoveColumn = true, allowRenameColumn = true, onColumnRename, onCardNew, renderCard, allowRemoveCard = true, onCardRemove, onColumnNew, disableCardDrag = false, disableColumnDrag = false, allowAddCard = true, onNewCardConfirm, }) {
    const [board, setBoard] = useState(initialBoard);
    // @ts-expect-error TS(7031) FIXME: Binding element 'source' implicitly has an 'any' t... Remove this comment to see the full error message
    const handleOnDragEnd = ({ source, destination, subject }, { moveCallback, notifyCallback }) => {
        const reorderedBoard = moveCallback(board, source, destination);
        when(notifyCallback)((callback) => callback(reorderedBoard, subject, source, destination));
        setBoard(reorderedBoard);
    };
    const handleColumnAdd = async (newColumn) => {
        // TODO: Need to check if confirms fire w/o IDs
        const column = renderColumnAdder ? newColumn : await onNewColumnConfirm?.(newColumn);
        if (!column)
            throw new Error('Cant add falsy column');
        const boardWithNewColumn = addColumn(board, column);
        onColumnNew?.({ board: boardWithNewColumn, column: column });
        setBoard(boardWithNewColumn);
    };
    const handleColumnRemove = (column) => {
        const filteredBoard = removeColumn(board, column);
        onColumnRemove?.({ board: filteredBoard, column });
        setBoard(filteredBoard);
    };
    const handleColumnRename = (column, title) => {
        const boardWithRenamedColumn = changeColumn(board, column, { title });
        onColumnRename?.({ board: boardWithRenamedColumn, column: { ...column, title } });
        setBoard(boardWithRenamedColumn);
    };
    const handleCardAdd = (column, card, options = {}) => {
        const boardWithNewCard = addCard(board, column, card, options);
        const targetColumn = boardWithNewCard.columns.find(({ id }) => id === column.id);
        if (!targetColumn)
            throw new Error('Cannot find target column');
        onCardNew?.({ board: boardWithNewCard, column: targetColumn, card });
        setBoard(boardWithNewCard);
    };
    const handleDraftCardAdd = async (column, card, options = {}) => {
        const newCard = await onNewCardConfirm?.(card);
        if (!newCard)
            throw new Error('Cant add falsy card');
        handleCardAdd(column, newCard, options);
    };
    const handleCardRemove = (column, card) => {
        const boardWithoutCard = removeCard(board, column, card);
        const targetColumn = boardWithoutCard.columns.find(({ id }) => id === column.id);
        if (!targetColumn)
            throw new Error('Cannot find target column');
        onCardRemove?.({ board: boardWithoutCard, column: targetColumn, card });
        setBoard(boardWithoutCard);
    };
    const handleOnCardDragEnd = partialRight(handleOnDragEnd, { moveCallback: moveCard, notifyCallback: onCardDragEnd });
    const handleOnColumnDragEnd = partialRight(handleOnDragEnd, {
        moveCallback: moveColumn,
        notifyCallback: onColumnDragEnd,
    });
    return (_jsx(BoardContainer, { onCardDragEnd: handleOnCardDragEnd, onColumnDragEnd: handleOnColumnDragEnd, renderColumnAdder: () => {
            if (!allowAddColumn)
                return null;
            if (renderColumnAdder)
                return renderColumnAdder({ addColumn: handleColumnAdd });
            if (!onNewColumnConfirm)
                return null;
            return _jsx(ColumnAdder, { onConfirm: (title) => handleColumnAdd({ title, cards: [] }) }, void 0);
        }, 
        // TODO: Check because og this could be falsy, also no idea what bound thing is
        renderColumnHeader: (column) => {
            if (renderColumnHeader) {
                // TODO: Refactor this into a better signature
                return renderColumnHeader(column, {
                    removeColumn: handleColumnRemove.bind(null, column),
                    renameColumn: handleColumnRename.bind(null, column),
                    addCard: handleCardAdd.bind(null, column),
                });
            }
            else {
                return (_jsx(DefaultColumn, Object.assign({ allowRemoveColumn: allowRemoveColumn, onColumnRemove: (updatedColumn) => onColumnRemove?.({ board, column: updatedColumn }), allowRenameColumn: allowRenameColumn, onColumnRename: (renamedColumn) => onColumnRename?.({ board, column: renamedColumn }) }, { children: column }), void 0));
            }
        }, renderCard: (column, card, dragging) => {
            if (renderCard)
                return renderCard(card, { removeCard: handleCardRemove.bind(null, column, card), dragging });
            return (_jsx(DefaultCard, Object.assign({ dragging: dragging, allowRemoveCard: allowRemoveCard, onCardRemove: (card) => handleCardRemove(column, card) }, { children: card }), void 0));
        }, allowRemoveColumn: allowRemoveColumn, onColumnRemove: handleColumnRemove, allowRenameColumn: allowRenameColumn, onColumnRename: handleColumnRename, disableColumnDrag: disableColumnDrag, disableCardDrag: disableCardDrag, onCardNew: async (column, card) => await handleDraftCardAdd(column, card, allowAddCard), allowAddCard: !!allowAddCard && !!onNewCardConfirm, board: board }, void 0));
};
