import { Card, Column, KanbanBoard } from '../types';
declare function moveColumn(board: any, { fromPosition }: any, { toPosition }: any): any;
declare function moveCard(board: any, { fromPosition, fromColumnId }: any, { toPosition, toColumnId }: any): any;
declare function addColumn<TCard extends Card>(board: KanbanBoard<TCard>, column: Partial<Column<TCard>>): {
    columns: any[];
};
declare function removeColumn<TCard extends Card>(board: KanbanBoard<TCard>, column: Column<TCard>): {
    columns: Column<TCard>[];
};
declare function changeColumn<TCard extends Card>(board: KanbanBoard<TCard>, column: Column<TCard>, newColumn: Partial<Column<TCard>>): {
    columns: any;
};
declare function addCard<TCard extends Card>(board: KanbanBoard<TCard>, inColumn: any, card: TCard, { on }?: any): KanbanBoard<TCard>;
declare function removeCard<TCard extends Card>(board: any, fromColumn: any, card: any): KanbanBoard<TCard>;
declare function changeCard(board: any, cardId: any, newCard: any): any;
export { moveColumn, moveCard, addColumn, removeColumn, changeColumn, addCard, removeCard, changeCard };
