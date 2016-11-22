import { List } from 'immutable';
import { IEntryAction } from '../actions/entry.actions';
import { Entry } from '../services/entry';

export function entryReducer(state: List<Entry> = List<Entry>(), action: IEntryAction): any {
    switch (action.type) {
        case 'ADD_ENTRY':
            return state.push(new Entry(action.record));
        case 'REMOVE_ENTRY':
            return state.delete(_findIndexById());
        case 'UPDATE_ENTRY':
            return (state).update(_findIndexById(), (entry: Entry) => {
                return {
                    id: entry.id,
                    record: entry.record,
                    completed: !entry.completed
                };
            });
        default:
            return state;
    }

    function _findIndexById(): number {
        return state.findIndex(entry => entry.id === action.id);
    }
}
