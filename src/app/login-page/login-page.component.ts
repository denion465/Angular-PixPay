import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login = {
    username: '',
    password: '',
  };

  users = {
    username: 'admin',
    password: 'admin'
  }

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  authentication(){
    if( !this.login.username || !this.login.password) {
      alert('Dados incompletos')
    }else if(this.login.username != this.users.username && this.login.password != this.users.password ||  this.login.username == this.users.username && this.login.password != this.users.password || this.login.username != this.users.username && this.login.password == this.users.password) {
      alert('Dados incorretos')
    }else {
      this.router.navigate(['main-page'])
    };
  };
};
