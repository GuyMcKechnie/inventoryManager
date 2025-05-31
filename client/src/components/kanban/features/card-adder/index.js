import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { CardForm } from './components';
export const CardAdder = function ({ column, onConfirm }) {
    function confirmCard(card) {
        onConfirm(column, card);
        setAddingCard(false);
    }
    const [addingCard, setAddingCard] = useState(false);
    return (_jsx(_Fragment, { children: addingCard ? (_jsx(CardForm, { onConfirm: confirmCard, onCancel: () => setAddingCard(false) }, void 0)) : (_jsx("button", Object.assign({ className: 'react-kanban-card-adder-button', onClick: () => setAddingCard(!addingCard) }, { children: "+" }), void 0)) }, void 0));
};
