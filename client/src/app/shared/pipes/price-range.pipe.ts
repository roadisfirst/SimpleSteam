import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  transform(value: any[], min: number, max: number, getProperty: (item: any) => string): any[] {
    if (min === undefined || max === undefined) return value;
      return value.filter((elem) => {
        if ((Number(getProperty(elem)) <= max && Number(getProperty(elem)) >= min)){
          return elem;
        }
      });
  }

}
