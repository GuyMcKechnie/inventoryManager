import { Column, Card } from '../../../types';
export declare const useRenameColumn: <TCard extends Card>({ onColumnRename, children: column }: Props<TCard>) => {
    titleBind: {
        value: string;
        onChange: import("react").ChangeEventHandler<HTMLInputElement>;
    };
    canRename: boolean;
    handleRenameColumn: import("react").FormEventHandler<HTMLFormElement>;
    handleCanRename: () => void;
};
export interface Props<TCard extends Card> {
    children: Column<TCard>;
    allowRemoveColumn: boolean;
    onColumnRemove?: (column: Column<TCard>) => void;
    allowRenameColumn: boolean;
    onColumnRename?: (column: Column<TCard>, titleInput: string) => void;
}
