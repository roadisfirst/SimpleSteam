import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {

  transform(value: any[], ev: boolean | undefined | null, tags: any[], getProperty: (item: any) => string[]): any[] {
    console.log('IN TAGS PIPE tags', tags);
    console.log('IN TAGS PIPE value', value);
    if (tags.length === 0) return value;
    return value;
    // return value.filter((elem) => {
    //   const elemTagArray = getProperty(elem);
    //   console.log(elemTagArray);
    //   let isMatch = false;
    //   for (const tag of tags){
    //     console.log(tag.name);
    //     if(elemTagArray.includes(tag.name)){
    //       isMatch = true;
    //       console.log('here')
    //     }
    //   }
    //   if(isMatch) return elem;
    // })
  }

}
