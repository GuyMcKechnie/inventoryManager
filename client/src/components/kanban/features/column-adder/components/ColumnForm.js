import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef } from 'react';
import { when } from '../../../services/utils';
export const ColumnForm = ({ onConfirm, onCancel }) => {
    // FIXME use hook
    const inputColumnTitle = createRef();
    function addColumn(event) {
        event.preventDefault();
        when(inputColumnTitle.current.value)(onConfirm);
    }
    return (_jsx("div", Object.assign({ className: 'react-kanban-column', style: { minWidth: '230px' } }, { children: _jsxs("form", Object.assign({ style: { display: 'flex', justifyContent: 'space-between' }, onSubmit: addColumn }, { children: [_jsx("input", { type: 'text', ref: inputColumnTitle, autoFocus: true }, void 0), _jsx("button", Object.assign({ type: 'submit' }, { children: "Add" }), void 0), _jsx("button", Object.assign({ type: 'button', onClick: onCancel }, { children: "Cancel" }), void 0)] }), void 0) }), void 0));
};
