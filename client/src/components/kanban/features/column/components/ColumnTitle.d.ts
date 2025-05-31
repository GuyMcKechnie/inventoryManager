import { FC, DOMAttributes } from 'react';
interface ColumnTitleProps {
    allowRenameColumn: boolean;
    onClick: DOMAttributes<HTMLSpanElement>['onClick'];
    children: string;
}
export declare const ColumnTitle: FC<ColumnTitleProps>;
export {};
