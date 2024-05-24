import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.inteface';
import { AuthService } from 'src/app/auth/services/auth.service';

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
  ]

  constructor( 
    private authService:AuthService ,
    private router:Router
  ){}

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  onLogout(){
    this.authService.otherLogout();
    this.router.navigate(['/auth/login']);
  }

}
