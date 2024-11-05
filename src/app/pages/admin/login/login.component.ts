import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginModel:any ={
    userName: '',
    password: ''
  }

  constructor(private router:Router){}

  onLogin(){
    if(this.loginModel.userName == "testuser" && this.loginModel.password == "223344"){
        this.router.navigateByUrl('/products');
    }
    else{
      alert('Error, user not found!!')
    }
  }
}
