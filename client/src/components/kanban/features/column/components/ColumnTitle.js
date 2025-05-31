import { jsx as _jsx } from "react/jsx-runtime";
export const ColumnTitle = ({ allowRenameColumn, onClick, children: title }) => {
    return allowRenameColumn ? (_jsx("span", Object.assign({ style: { cursor: 'pointer' }, onClick: onClick }, { children: title }), void 0)) : (_jsx("span", { children: title }, void 0));
};
