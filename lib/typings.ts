import {Comparator} from './util';

export interface Sort<T> extends Function {
    (array: T[], comparator?: Comparator<T>): T[];
}
