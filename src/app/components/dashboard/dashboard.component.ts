import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'Pie', marker: {color: 'red'} },
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: {width: 545, height: 295, title: 'A Fancy Plot'}
  };

  graphPie = {
    data: [{
      values: [19, 26, 55],
      labels: ['Residential', 'Non-Residential', 'Utility'],
      type: 'pie'
    }],
    layout: {width: 545, height: 300, title: 'Pie'}
  };
  
  graphBar = [
    {
      x: ['giraffes', 'orangutans', 'monkeys', 'dogs', 'cats', 'spider'],
      y: [20, 14, 23, 54, 77, 3],
      marker_color: ['red', 'blue', '#334433'],
      type: 'bar'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
