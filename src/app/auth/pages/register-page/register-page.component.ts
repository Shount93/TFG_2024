import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public userForm = new FormGroup({
    id: new FormControl(''),
    user: new FormControl(''),
    password: new FormControl(''),
    Nombre: new FormControl(''),
    Apellido: new FormControl(''),
    Email: new FormControl(''),
  })

  constructor ( private authService: AuthService){}

}
