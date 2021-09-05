import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagFilter',
  pure: false
})
export class TagFilterPipe implements PipeTransform {

  public transform(value: any[], tags: any[], getProperty: (item: any) => string[]): any[] {
    if (tags.length === 0) return value;
    return value.filter((elem) => {
      const gameTagArray = getProperty(elem);
      if (tags.some(item => gameTagArray.includes(item))){
        return elem;
      }
    });
  }

}
