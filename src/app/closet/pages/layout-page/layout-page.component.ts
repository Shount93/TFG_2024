import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidenavItems = [
    { label:'Armario', icon:'local_library', url:'./list' },
    { label:'Añadir', icon:'add', url:'./add-clothes' },
    { label:'Crear set', icon:'style', url:'./create-set' },
  ]

}
