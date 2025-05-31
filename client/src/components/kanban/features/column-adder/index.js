import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { ColumnForm } from './components';
export const ColumnAdder = ({ onConfirm }) => {
    const [isAddingColumn, setAddingColumn] = useState(false);
    const confirmColumn = (title) => {
        onConfirm(title);
        setAddingColumn(false);
    };
    return isAddingColumn ? (_jsx(ColumnForm, { onConfirm: confirmColumn, onCancel: () => setAddingColumn(false) }, void 0)) : (_jsx("div", Object.assign({ style: { display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '230px' }, className: 'react-kanban-column-adder-button', onClick: () => setAddingColumn(true), role: 'button' }, { children: "+" }), void 0));
};
