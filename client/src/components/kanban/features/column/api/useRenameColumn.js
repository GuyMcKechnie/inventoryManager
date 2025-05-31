import { useState } from 'react';
export const useRenameColumn = ({ onColumnRename, children: column }) => {
    const [canRename, setCanRename] = useState(false);
    const toggleCanRename = () => {
        setCanRename((currentCanRename) => !currentCanRename);
    };
    const [titleInput, setTitleInput] = useState('');
    const handleRenameColumn = (event) => {
        event.preventDefault();
        onColumnRename?.(column, titleInput);
        toggleCanRename();
    };
    const handleCanRename = () => {
        setTitleInput(column.title);
        toggleCanRename();
    };
    const handleTitleChange = ({ target: { value } }) => setTitleInput(value);
    return {
        titleBind: {
            value: titleInput,
            onChange: handleTitleChange,
        },
        canRename,
        handleRenameColumn,
        handleCanRename,
    };
};
