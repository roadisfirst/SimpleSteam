import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  public transform(value: any[], input: string, getProperty: (item: any) => string): any[] | null {
    if (!value) return null;
    if (!input) return value;

    const query = input.toLowerCase();

    return value.filter((item) => {
      return getProperty(item) &&
        getProperty(item).toLowerCase().includes(query);
    });
  }
}
