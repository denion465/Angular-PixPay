import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login = {
    username: '',
    password: '',
  }


  constructor() { }

  ngOnInit(): void {
  }



  authentication(){
    console.log(this.login)
  };


}
