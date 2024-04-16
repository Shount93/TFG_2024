import { Component, OnInit } from '@angular/core';
import { Clothe_item } from '../../interfaces/Clothe_item.interface';
import { ClothesService } from '../../services/clothes.service';


@Component({
  selector: 'app-clothes-list-page',
  templateUrl: './clothes-list-page.component.html',
  styles: [
  ]
})
export class ClothesListPageComponent implements OnInit {

  public clothes: Clothe_item[] = [];

  constructor(private ClothesService: ClothesService) {}

  ngOnInit(): void {
    this.ClothesService.getClothes().subscribe( clothes => this.clothes = clothes);
  }

}
