import { Component, Input, OnInit } from '@angular/core';
import { Clothe_item } from '../../interfaces/Clothe_item.interface';

@Component({
  selector: 'clothes-item-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {
  
  ngOnInit(): void {
    if (!this.Clothe_item) {
      throw new Error('No se recibio la prenda en el componente card');
    }
  }

  @Input()
  public Clothe_item!: Clothe_item

}
