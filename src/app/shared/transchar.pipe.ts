import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';

@Pipe({
  name: 'transchar'
})
export class TranscharPipe implements PipeTransform {

  transform(value: Array<Task>, args?: any): any {
    return value.sort((a, b) => {
      if ( a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
