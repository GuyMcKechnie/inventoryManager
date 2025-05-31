import { DropResult } from '@hello-pangea/dnd';
import { Card, Column, KanbanBoard } from '../types';
export interface Coordinates {
    source: {
        fromPosition: number;
        fromColumnId?: number;
    };
    destination: {
        toPosition?: number;
        toColumnId?: number;
    };
}
export declare const getCoordinates: <TCard extends Card>(event: DropResult, board: KanbanBoard<TCard>) => Partial<Coordinates>;
export declare const isAColumnMove: (type: string) => boolean;
export declare const getCard: <TCard extends Card>(board: KanbanBoard<TCard>, sourceCoordinate: Coordinates['source']) => TCard;
export declare const getColumn: <TCard extends Card>(board: KanbanBoard<TCard>, droppableId: string) => Column<TCard> | undefined;
export declare const getColumnStrict: <TCard extends Card>(board: KanbanBoard<TCard>, droppableId: any) => Column<TCard>;
export declare const isMovingAColumnToAnotherPosition: (coordinates: Partial<Coordinates>) => boolean;
export declare const isMovingACardToAnotherPosition: (coordinates: Partial<Coordinates>) => boolean;
