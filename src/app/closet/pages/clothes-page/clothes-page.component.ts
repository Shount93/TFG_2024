import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../../services/clothes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Clothe_item } from '../../interfaces/Clothe_item.interface';

@Component({
  selector: 'app-clothes-page',
  templateUrl: './clothes-page.component.html',
  styles: [
  ]
})
export class ClothesPageComponent implements OnInit {

  public Clothe_item?: Clothe_item;

  constructor ( 
    private ClothesService:ClothesService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ){}
 
  
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.ClothesService.getClothesById(id))
      ).subscribe( clothes => {
        if ( !clothes) return this.router.navigate([ '/closet/list' ]);

        this.Clothe_item = clothes;
        console.log({clothes});
        return;
      })
  }

  goBack():void {
    this.router.navigateByUrl('closet/list')
  }

}
