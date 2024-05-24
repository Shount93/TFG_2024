import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
    
  ]
})
export class LoginPageComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor( 
    private authService:AuthService ,
    private router:Router
  ){}

  ngOnInit(): void {
    this.authService.userList();
  }

  onLogin():void { 
    
    this.authService.otherLogin(this.username,this.password)
      .subscribe( user => {

        this.router.navigate(['/']);

      });

  }
}
