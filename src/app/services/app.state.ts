import { List } from 'immutable';
import { createStore } from 'redux';
import { UUID } from 'angular2-uuid';
import { IEntryAction } from '../actions/entry.actions';
import { entryReducer } from '../reducers/entries.reducer';

export class Entry {
    public id: string;
    public record: string;
    public completed: boolean = false;

    public constructor(record: string) {
        this.id = UUID.UUID();
        this.record = record;
    }
}

export class EntryStore {

    public constructor() {}

    private _store = createStore(entryReducer, List<Entry>());

    public get entries(): List<Entry> {
        return this._store.getState();
    }

    public dispatch(action: any): void {
        this._store.dispatch(action);
    }
}

export const DEFAULT_ENTRIES: Array<Entry> = [
    {id: '83dbc752-0761-41d6-b73c-097ac00088ab', record: 'Learn TypeScript (Generics, Interfaces)', completed: false},
    {id: '375a8b54-8f20-4e16-93a7-1e17e6877d38', record: 'Learn WebPack and the packages', completed: false},
    {id: '65208ec6-021f-4548-a2b4-e88cc34072a6', record: 'Learn Redux - different approaches', completed: false},
    {id: '34568ec6-021f-7268-a2b4-e88ff34072a6', record: 'Learn Semantic-UI', completed: false},
    {id: '09838ec6-065f-9067-e4b4-e88cc3s567g6', record: 'Learn ECMAScript6 - ECMAScript7', completed: false},
    {id: '09834ec6-021f-4568-j5j4-e88ff340df78', record: 'Learn Reactive Programming', completed: false}
]