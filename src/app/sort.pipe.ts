import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {if (direction === 'asc') {
      return value.sort((a, b) => a > b ? 1 : -1);
    } else {
      return value.sort((a, b) => b > a ? 1 : -1);
    }
  }

}
