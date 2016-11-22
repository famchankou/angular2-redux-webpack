import { UUID } from 'angular2-uuid';

export class Entry {
    public id: string;
    public record: string;
    public completed: boolean = false;

    public constructor(record: string) {
        this.id = UUID.UUID();
        this.record = record;
    }
}
