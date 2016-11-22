import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Entry } from '../index';

@Component({
    selector: 'entry-form-item',
    templateUrl: './templates/entry-form-item.html',
    styles: [require('./less/entry-form-item.less')]
})

export class EntryFormItemComponent {

    @Input() public entry: string;
    @Output() public removeEntryAction: EventEmitter<any> = new EventEmitter();
    @Output() public updateEntryAction: EventEmitter<any> = new EventEmitter();

    public removeEntry(id: string): void {
        this.removeEntryAction.emit(id);
    }

    public updateEntry(entry: Entry): void {
        this.updateEntryAction.emit(entry);
    }

}
