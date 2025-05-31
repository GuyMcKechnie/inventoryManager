import { jsx as _jsx } from "react/jsx-runtime";
import { Draggable } from '@hello-pangea/dnd';
export const Card = ({ children: card, index, renderCard, disableCardDrag }) => {
    return (_jsx(Draggable, Object.assign({ draggableId: String(card.id), index: index, isDragDisabled: disableCardDrag }, { children: (provided, { isDragging }) => {
            return (_jsx("div", Object.assign({ ref: provided.innerRef }, provided.draggableProps, provided.dragHandleProps, { "data-testid": `card-${card.id}` }, { children: _jsx("div", Object.assign({ style: { display: 'inline-block', whiteSpace: 'normal' } }, { children: renderCard(isDragging) }), void 0) }), void 0));
        } }), void 0));
};
export * from './components';
