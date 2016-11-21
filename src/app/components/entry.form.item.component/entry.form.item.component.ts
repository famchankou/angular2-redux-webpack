import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from "../../services/app.state";

@Component({
    selector: 'entry-form-item',
    templateUrl: './templates/entry.form.item.html'
})

export class EntryFormItemComponent {

    @Input() entry: string;
    @Output() entryAction: EventEmitter<any> = new EventEmitter();

    public constructor() { }

    public removeEntry(id: string): void {
        this.entryAction.emit(id);
    }

    public updateEntry(entry: Entry): void {
        this.entryAction.emit(entry);
    }

}