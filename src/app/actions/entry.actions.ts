import { Entry } from '../services/app.state';

export interface IEntryAction {
    type: string;
    id?: string;
    record?: string;
    completed?: boolean;
}

export function addEntry(record: string): IEntryAction {
    return {
        type: 'ADD_ENTRY',
        record
    };
}

export function removeEntry(id: string): IEntryAction {
    return {
        type: 'REMOVE_ENTRY',
        id
    };
}

export function updateEntry(id: string, record: string, completed: boolean): IEntryAction {
    return {
        type: 'UPDATE_ENTRY',
        id,
        record,
        completed
    };
}