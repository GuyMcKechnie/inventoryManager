export const getCoordinates = (event, board) => {
    if (event.destination === null)
        return {};
    const columnSource = { fromPosition: event.source.index };
    const columnDestination = { toPosition: event.destination?.index };
    if (isAColumnMove(event.type)) {
        return { source: columnSource, destination: columnDestination };
    }
    return {
        source: { ...columnSource, fromColumnId: getColumnStrict(board, event.source.droppableId).id },
        destination: { ...columnDestination, toColumnId: getColumnStrict(board, event.destination?.droppableId).id },
    };
};
export const isAColumnMove = (type) => {
    return type === 'BOARD';
};
export const getCard = (board, sourceCoordinate) => {
    const column = board.columns.find((column) => column.id === sourceCoordinate.fromColumnId);
    if (!column)
        throw new Error(`Cannot find column: ${sourceCoordinate.fromColumnId}`);
    return column.cards[sourceCoordinate.fromPosition];
};
export const getColumn = (board, droppableId) => {
    return board.columns.find(({ id }) => String(id) === droppableId);
};
export const getColumnStrict = (board, droppableId) => {
    const column = getColumn(board, droppableId);
    if (!column)
        throw new Error(`Cannot find column with ID: ${droppableId}`);
    return column;
};
export const isMovingAColumnToAnotherPosition = (coordinates) => {
    return coordinates.source?.fromPosition !== coordinates.destination?.toPosition;
};
export const isMovingACardToAnotherPosition = (coordinates) => {
    return !(coordinates.source?.fromPosition === coordinates.destination?.toPosition &&
        coordinates.source?.fromColumnId === coordinates.destination?.toColumnId);
};
