import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent implements OnInit {

  constructor( private authService:AuthService ){}

  ngOnInit(): void {
    this.authService.userList();
  }

  onLogin():void { 
    //if (this.authService.login()){

    //}
  }
}
