import { Pipe, PipeTransform } from '@angular/core';
import { Clothe_item } from '../interfaces/Clothe_item.interface';

@Pipe({
  name: 'clothesImage'
})
export class ClothesImagePipe implements PipeTransform {

  transform(clothes: Clothe_item): string {
    
    if (!clothes.id && !clothes.IdTipo  && !clothes.alt_image) {
      return 'assets/no-image.jpg'
    }

    if (clothes.alt_image) return clothes.alt_image;

    return  `assets/Clothes/${clothes.IdTipo}${clothes.id}.jpg`

  }

}
