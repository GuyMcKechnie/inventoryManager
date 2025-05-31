import { FC, MouseEventHandler } from 'react';
export declare const ColumnForm: FC<Props>;
interface Props {
    onConfirm: (title: string) => void;
    onCancel: MouseEventHandler<HTMLButtonElement>;
}
export {};
