import { Component, OnInit } from '@angular/core';
import { Clothe_item } from '../../interfaces/Clothe_item.interface';
import { ClothesService } from '../../services/clothes.service';
import { Clothe_brand } from '../../interfaces/Clothe_brand.interface';
import { Clothe_type } from '../../interfaces/Clothe_type.iterface';


@Component({
  selector: 'app-clothes-list-page',
  templateUrl: './clothes-list-page.component.html',
  styles: [
  ]
})
export class ClothesListPageComponent implements OnInit {

  public clothes: Clothe_item[] = [];
  filteredClothes: Clothe_item[] = [];

  // Filtros seleccionados
  selectedTipo: string = '';
  selectedColor: string = '';
  selectedMarca: string = '';
  selectedEstacion: string = '';
  selectedEstilo: string = '';

  // Opciones de filtro
  tipos: string[] = ['Zapatillas', 'Zapatos', 'Gorro', 'Camiseta', 'Camisa', 'Pantalon', 'Falda', 'Vestido', 'Chaqueta', 'Sudadera', 'Jersei'];
  colores: string[] = ['Negro','Blanco','Azul','Rojo','Verde','Gris','Amarillo','Rosado','Morado','Naranja','Marrón','Beige','Celeste','Turquesa','Azul marino','Coral','Crema','Ocre','Violeta','Salmon','Otro'];
  marcas: string[] = ['Zara','Mango','MassimoDutti', 'Pull&Bear', 'Bershka', 'Stradivarius', 'Desigual', 'H&M', 'C&A', 'Springfield', 'Cortefiel', 'AdolfoDominguez', 'Primark', 'Levis', 'Tommy Hilfiger', 'Diesel', 'Pepe Jeans', 'Punto Roma', 'Oysho', 'Otro'];
  estaciones: string[] = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
  estilos: string[] = ['Casual', 'Formal', 'Deportivo', 'Bohemio', 'Urbano', 'Minimalista', 'Playero', 'Gótico', 'Hipster', 'Militar', 'Tradicional', 'Otro'];

  constructor(private ClothesService: ClothesService) {}

  ngOnInit(): void {
    this.ClothesService.getClothes().subscribe( 
      (data: Clothe_item[]) => {
        this.clothes = data;
        this.filteredClothes = [...this.clothes];
      },
      (error) => {
        console.error('Error al obtener la ropa:', error);
    });
  }

  applyFilters() {
    this.filteredClothes = this.clothes.filter(item =>
      (this.selectedTipo ? item.IdTipo === this.selectedTipo : true) &&
      (this.selectedColor ? item.Color === this.selectedColor : true) &&
      (this.selectedMarca ? item.IdMarca === this.selectedMarca : true) &&
      (this.selectedEstacion ? item.Estacion === this.selectedEstacion : true) &&
      (this.selectedEstilo ? item.Estilo === this.selectedEstilo : true)
    );
  }

}
