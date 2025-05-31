import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRenameColumn } from '../api';
import { ColumnTitle } from './ColumnTitle';
export const DefaultColumn = function (props) {
    const { children: column, allowRemoveColumn, allowRenameColumn, onColumnRemove } = props;
    const { canRename, handleCanRename, titleBind, handleRenameColumn } = useRenameColumn(props);
    return (_jsx("div", Object.assign({ className: 'react-kanban-column-header' }, { children: canRename ? (_jsxs("form", Object.assign({ onSubmit: handleRenameColumn }, { children: [_jsx("span", { children: _jsx("input", Object.assign({ type: 'text' }, titleBind, { autoFocus: true }), void 0) }, void 0), _jsxs("span", { children: [_jsx("button", Object.assign({ className: 'react-kanban-column-header__button', type: 'submit' }, { children: "Rename" }), void 0), _jsx("button", Object.assign({ className: 'react-kanban-column-header__button', type: 'button', onClick: handleCanRename }, { children: "Cancel" }), void 0)] }, void 0)] }), void 0)) : (_jsxs("div", Object.assign({ className: 'react-kanban-column-header__spacer' }, { children: [_jsx(ColumnTitle, Object.assign({ allowRenameColumn: allowRenameColumn, onClick: handleCanRename }, { children: column.title }), void 0), allowRemoveColumn && _jsx("span", Object.assign({ onClick: onColumnRemove ? () => onColumnRemove(column) : undefined }, { children: "X" }), void 0)] }), void 0)) }), void 0));
};
