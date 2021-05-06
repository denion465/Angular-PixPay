import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CalculationsService } from 'src/app/services/calculations.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  peoples: any;
  
  graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'Pie', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width: '50%', height: 240, title: 'A Fancy Plot'}
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private calculationService: CalculationsService) { }

  ngOnInit(): void {
    // this.getAllPeoples()
  };

  // async getAllPeoples(){
  //   this.http.get('http://localhost:4100/all').subscribe((resultado) => {
  //     this.peoples = resultado
  //   }) 
  // };    
  
};
