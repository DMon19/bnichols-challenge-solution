import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSubject'
})
export class SearchSubjectPipe implements PipeTransform {

  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
            return el.subject.toLowerCase().indexOf(input) > -1;
        })
    }
    return value;
}

}
