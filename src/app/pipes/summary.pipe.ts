import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform{

  transform(value: string, limit?: number, another?: boolean) {
    if (!value) {
      return null;
    }
    console.log(another);
    const actualLimit = (limit) ? limit : 50;
    return value.substr(0, actualLimit) + '...';
  }

}
