import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {

  public transform(value: any[], ev: boolean | undefined, tags: any[],
    getProperty: (item: any) => string[]): any[] {
    if (tags.length === 0) return value;
    return value.filter((elem) => {
      const elemTagArray = getProperty(elem);
      let isMatch = false;
      for (const tag of tags){
        if(elemTagArray.includes(tag)){
          isMatch = true;
        }
      }
      if (isMatch) return elem;
    })
  }

}
