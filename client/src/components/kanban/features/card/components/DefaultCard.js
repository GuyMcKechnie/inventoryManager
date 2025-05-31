import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const DefaultCard = function ({ children: card, dragging, allowRemoveCard, onCardRemove, }) {
    return (_jsxs("div", Object.assign({ className: `react-kanban-card ${dragging ? 'react-kanban-card--dragging' : ''}` }, { children: [_jsx("span", { children: _jsxs("div", Object.assign({ className: 'react-kanban-card__title' }, { children: [_jsx("span", { children: card.title }, void 0), allowRemoveCard && (_jsx("span", Object.assign({ style: { cursor: 'pointer' }, onClick: onCardRemove ? () => onCardRemove(card) : undefined }, { children: "X" }), void 0))] }), void 0) }, void 0), _jsx("div", Object.assign({ className: 'react-kanban-card__description' }, { children: card.description }), void 0)] }), void 0));
};
