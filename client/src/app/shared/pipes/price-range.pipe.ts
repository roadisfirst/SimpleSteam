import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  public transform(value: any[], min: number, max: number): any[] {
    if (min === undefined || max === undefined) return value;
    return value.filter((elem) => {
      if ((Number(elem.price) <= max && Number(elem.price) >= min)){
        return elem;
      }
    });
  }
}
