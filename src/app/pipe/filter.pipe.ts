import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], titleFilter: string, keyword: string): any {
    if (!titleFilter || !keyword) {
      return list;
    }
    return list.filter(item => {
      const filedValue = item[titleFilter];
      return filedValue.indexOf(keyword) >= 0;
    });
  }
}
