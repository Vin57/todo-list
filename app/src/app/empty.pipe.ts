import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empty',
})
export class EmptyPipe implements PipeTransform {
  transform(value: any): boolean {
    return value ? false : true;
  }
}
