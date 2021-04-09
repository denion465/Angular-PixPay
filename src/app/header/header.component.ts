import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  peoples: any;

  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {

    try {
      this.http.get('http://localhost:4100/all')
        .subscribe(resultado => this.peoples = resultado);
    } catch (error) {
      alert(error)
    }

  }

}
