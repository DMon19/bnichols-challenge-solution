import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

    // Pipe used purely to filter through a table using a "name" field

      transform(value: any, input: string) {
          if (input) {
              input = input.toLowerCase();
              return value.filter(function (el: any) {
                  return el.name.toLowerCase().indexOf(input) > -1;
              })
          }
          return value;
      }
  }

