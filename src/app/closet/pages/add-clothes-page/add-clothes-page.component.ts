import { Component, OnInit } from '@angular/core';
import { Clothe_type } from '../../interfaces/Clothe_type.iterface';
import { ClothesService } from '../../services/clothes.service';
import { Clothe_brand } from '../../interfaces/Clothe_brand.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Clothe_item, Estacion, Estilo } from '../../interfaces/Clothe_item.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-add-clothes-page',
  templateUrl: './add-clothes-page.component.html',
  styles: [
  ]
})
export class AddClothesPageComponent implements OnInit{

  public ClotheForm = new FormGroup({
    id: new FormControl<string>(''),
    Talla: new FormControl<number>(0),
    Color: new FormControl<string>(''),
    IdMarca: new FormControl<string>(''),
    IdTipo: new FormControl<string>(''),
    IdUsuario: new FormControl<string>('1'),
    alt_image: new FormControl<string>(''),
    Estacion: new FormControl<Estacion>(Estacion.Primavera),
    Estilo: new FormControl<Estilo>(Estilo.Otro),
  });

  public types: Clothe_type[] = [];
  public brands: Clothe_brand[] = [];

  colores: string[] = ['Negro','Blanco','Azul','Rojo','Verde','Gris','Amarillo','Rosado','Morado','Naranja','Marrón','Beige','Celeste','Turquesa','Azul marino','Coral','Crema','Ocre','Violeta','Salmon','Otro'];

  estacion: string[] = ['Primavera', 'Verano', 'Otoño', 'Invierno']

  estilo: string[] = ['Casual', 'Formal', 'Deportivo', 'Bohemio', 'Urbano', 'Minimalista', 'Playero', 'Gótico', 'Hipster', 'Militar', 'Tradicional', 'Otro']

  constructor(
    private ClothesService: ClothesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar : MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.ClothesService.getClothesTypes().subscribe( clothes_types => this.types = clothes_types);
    this.ClothesService.getClothesBrands().subscribe( clothes_brands => this.brands = clothes_brands);
    console.log(this.brands);

    if(!this.router.url.includes('edit-clothes')) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.ClothesService.getClothesById(id) ),
      ).subscribe( cloth =>{

        if (!cloth) return this.router.navigateByUrl('/');

        this.ClotheForm.reset(cloth);
        return;

      });

  }

  get currentClothe():Clothe_item{
    const cloth = this.ClotheForm.value as Clothe_item;
    return cloth;
  }

  onSubmit():void{

    if(this.ClotheForm.invalid) return;

    if(this.currentClothe.id){
      this.ClothesService.updateClothes(this.currentClothe)
        .subscribe(cloth =>{
          this.router.navigate(['/closet/list']);
          this.showSnackbar('Registro actualizado');
        });

        return;
    }

    this.ClothesService.addClothes(this.currentClothe)
      .subscribe(cloth =>{
        this.router.navigate(['/closet/list']);
        this.showSnackbar('Registro creado');
        
      })

    console.log(this.currentClothe)
  }

  onDeleteCloth(){
    if (!this.currentClothe.id) throw Error('Cloth id is requiered')

      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: this.currentClothe
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (!result) return;

        this.ClothesService.deleteClothes(this.currentClothe.id)
          .subscribe( wasDeleted => {
            if(wasDeleted){
              this.router.navigate(['/closet/list'])
            }
          })
      });
  }
  

  showSnackbar( message: string):void{
    this.snackbar.open(message, 'listo',{
      duration: 2500,
    })
  }

}
