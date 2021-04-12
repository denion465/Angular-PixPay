import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  baseUrl = "http://localhost:4100/add"

  peoples: any;
  
  addPeople = {
    nome: '',
    sobrenome: '',
    idade: '',
    cidadeEstado: '',
    profissao: '',
    salario: '',
  }
  
  login = {
    username: '',
    password: '',
  };

  users = {
    username: 'admin',
    password: 'admin'
  };

  graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'Pie', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width: '50%', height: 240, title: 'A Fancy Plot'}
};

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllPeoples()
  };

  async getAllPeoples(){
    this.http.get('http://localhost:4100/all').subscribe((resultado) => {
      this.peoples = resultado
    }) 
  };

    async sendPeople(){
    this.http.post(this.baseUrl,this.addPeople).subscribe((resultado) => {
      this.peoples = resultado
    })
    
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
