import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Card } from '../card';
import { withDroppable } from '../with-droppable';
import { CardAdder } from '../card-adder';
import { pickPropOut } from '../../services/utils';
const ColumnEmptyPlaceholder = forwardRef((props, ref) => (_jsx("div", Object.assign({ ref: ref, style: { minHeight: 'inherit', height: 'inherit' } }, props), void 0)));
const DroppableColumn = withDroppable(ColumnEmptyPlaceholder);
export const Column = function ({ children: column, index: columnIndex, renderCard, renderColumnHeader, disableColumnDrag, disableCardDrag, onCardNew, allowAddCard, }) {
    return (_jsx(Draggable, Object.assign({ draggableId: `column-draggable-${column.id}`, index: columnIndex, isDragDisabled: disableColumnDrag }, { children: (columnProvided) => {
            const draggablePropsWithoutStyle = pickPropOut(columnProvided.draggableProps, 'style');
            return (_jsxs("div", Object.assign({ ref: columnProvided.innerRef }, draggablePropsWithoutStyle, { style: {
                    height: '100%',
                    minHeight: '28px',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    ...columnProvided.draggableProps.style,
                }, className: 'react-kanban-column', "data-testid": `column-${column.id}` }, { children: [_jsx("div", Object.assign({}, columnProvided.dragHandleProps, { children: renderColumnHeader(column) }), void 0), allowAddCard && _jsx(CardAdder, { column: column, onConfirm: onCardNew }, void 0), _jsx(DroppableColumn, Object.assign({ droppableId: String(column.id) }, { children: column.cards.length ? (column.cards.map((card, index) => (_jsx(Card, Object.assign({ index: index, renderCard: (dragging) => renderCard(column, card, dragging), disableCardDrag: disableCardDrag }, { children: card }), card.id)))) : (_jsx("div", { className: 'react-kanban-card-skeleton' }, void 0)) }), void 0)] }), void 0));
        } }), void 0));
};
export * from './components';
