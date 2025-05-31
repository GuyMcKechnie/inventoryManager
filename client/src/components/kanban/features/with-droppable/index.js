import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Droppable } from '@hello-pangea/dnd';
export const withDroppable = function (Component) {
    return function WrapperComponent({ children, ...droppableProps }) {
        return (_jsx(Droppable, Object.assign({}, droppableProps, { children: (provided) => (_jsxs(Component, Object.assign({ ref: provided.innerRef }, provided.droppableProps, { children: [children, provided.placeholder] }), void 0)) }), void 0));
    };
};
