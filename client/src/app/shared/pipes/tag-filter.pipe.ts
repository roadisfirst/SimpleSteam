import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagFilter',
})
export class TagFilterPipe implements PipeTransform {

  public transform(value: any[], tags: any[]): any[] {
    if (tags.length === 0) return value;
    return value.filter((elem) => {
      if (tags.some(item => elem.tags.includes(item))){
        return elem;
      }
    });
  }
}
