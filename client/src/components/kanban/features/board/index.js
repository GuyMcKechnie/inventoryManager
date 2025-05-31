import { jsx as _jsx } from "react/jsx-runtime";
import { ControlledBoard, UncontrolledBoard } from './components';
export const Board = function ({ initialBoard, children, ...restProps }) {
    if (initialBoard)
        return _jsx(UncontrolledBoard, Object.assign({ initialBoard: initialBoard }, restProps), void 0);
    if (children)
        return _jsx(ControlledBoard, Object.assign({}, restProps, { children: children }), void 0);
    throw new Error('Must provide either "children" or "initialBoard" props');
};
export * from './components';
