import { List } from 'immutable';
import { IEntryAction } from '../actions/entry.actions';
import { Entry } from '../services/app.state';

export function entryReducer(state: List<Entry> = List<Entry>(), action: IEntryAction) {
    switch (action.type) {
        case 'ADD_ENTRY':
            return state.push(new Entry(action.record));
        case 'REMOVE_ENTRY':
            return state.delete(_findIndexById());
        case 'UPDATE_ENTRY':
            return (<any>state).update(_findIndexById(), (entry: Entry) => {
                return {
                    id: entry.id,
                    record: entry.record,
                    completed: !entry.completed
                };
            });
        default:
            return state;
    }

    function _findIndexById() {
        return state.findIndex(entry => entry.id === action.id);
    }
}