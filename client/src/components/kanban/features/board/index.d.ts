import { Card } from '../../types';
import { ControlledBoardProps, UncontrolledBoardProps } from './components';
export declare const Board: <TCard extends Card>({ initialBoard, children, ...restProps }: Props<TCard>) => import("react/jsx-runtime").JSX.Element;
export declare type Props<TCard extends Card> = (Partial<UncontrolledBoardProps<TCard>> & {
    children?: never;
}) | (Partial<ControlledBoardProps<TCard>> & {
    initialBoard?: never;
});
export * from './components';
