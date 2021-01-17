import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: Array<any>): string {

    if(!images){
      return 'assets/img/no-image.png';
    }

    return images.length > 0 ? images[0].url : 'assets/img/no-image.png';
  }

}
