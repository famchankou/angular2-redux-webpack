import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'search'
})

export class SearchPipe implements PipeTransform {
    public transform(value: any, key: string, term: string): any {
        return value.filter((item: any) => {
            if (item.hasOwnProperty(key)) {
                if (term) {
                    let regExp = new RegExp('\\b' + term, 'gi');
                    return regExp.test(item[key]);
                } else {
                    return true;
                }
            } else {
                return false;
            }
        });
    }
}
