import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { when } from '../../../services/utils';
export const CardForm = function ({ onConfirm, onCancel }) {
    const inputCardTitle = useRef();
    const inputCardDescription = useRef();
    function addCard(event) {
        event.preventDefault();
        // @ts-expect-error TS(2532): Object is possibly 'undefined'.
        when(inputCardTitle.current.value)((value) => {
            // @ts-expect-error TS(2532): Object is possibly 'undefined'.
            onConfirm({ title: value, description: inputCardDescription.current.value });
        });
    }
    return (_jsx("div", Object.assign({ className: 'react-kanban-card-adder-form' }, { children: _jsxs("form", Object.assign({ onSubmit: addCard }, { children: [_jsx("input", { className: 'react-kanban-card-adder-form__title', name: 'title', autoFocus: true, defaultValue: 'Title', 
                    // @ts-expect-error TS(2322): Type 'MutableRefObject<undefined>' is not assignab... Remove this comment to see the full error message
                    ref: inputCardTitle }, void 0), _jsx("input", { className: 'react-kanban-card-adder-form__description', name: 'description', defaultValue: 'Description', 
                    // @ts-expect-error TS(2322): Type 'MutableRefObject<undefined>' is not assignab... Remove this comment to see the full error message
                    ref: inputCardDescription }, void 0), _jsxs("div", Object.assign({ style: { display: 'flex', justifyContent: 'space-between', marginTop: '5px' } }, { children: [_jsx("button", Object.assign({ className: 'react-kanban-card-adder-form__button', type: 'submit' }, { children: "Add" }), void 0), _jsx("button", Object.assign({ className: 'react-kanban-card-adder-form__button', type: 'button', onClick: onCancel }, { children: "Cancel" }), void 0)] }), void 0)] }), void 0) }), void 0));
};
