import { Pipe, PipeTransform } from '@angular/core';
import { Clothe_item } from '../interfaces/Clothe_item.interface';

@Pipe({
  name: 'clothesAltImage'
})
export class ClothesAltImagePipe implements PipeTransform {

  transform(clothes: Clothe_item): string {
    
    if (clothes.alt_image) return clothes.alt_image;

    return  `assets/no-image.jpg`

  }

}
