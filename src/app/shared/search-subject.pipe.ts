import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSubject'
})
export class SearchSubjectPipe implements PipeTransform {

  // Pipe used purely to filter through a table using a "subject" field

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
