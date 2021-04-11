import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  innerWidth = null
  innerWidthGraph = 440

  graph = {
    data: [
        { x: [1, 2, 3, 5, 11, 4, 20], y: [2, 6, 3, 11, 8, 17, 14], type: 'scatter', mode: 'Pie', marker: {color: 'red'} },
        { x: [12, 3, 9, 7, 10, 14, 5], y: [2, 5, 3, 6, 9, 10, 8], type: 'bar', marker: { color: ['#FFFF00','#FF4500','#7CFC00','#483D8B','#FF1493','#2F4F4F','#00FFFF','#4F4F4F','#0000FF','#FF00FF'] }},
    ],
    layout: {
      width: this.innerWidthGraph + 100,
      showlegend: false,
      height: 380,
      margin: {
        l:40,
        r:40,
        b:40,
        t:40
      }
    }
  };

  graphDonut = {

    data: [{
      values: [27, 11, 25, 8, 1, 3, 25],
      labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
      text: 'CO2',
      textposition: 'inside',
      domain: {column: 1},
      name: 'CO2 Emissions',
      hoverinfo: 'label+percent+name',
      hole: .4,
      type: 'pie'
    }],

    layout: {
      height: 380,
      width: this.innerWidthGraph,
      showlegend: true,
      margin: {
        l:30,
        r:30,
        b:30,
        t:30
      },
      legend: {
        font: {
          family: 'sans-serif',
          size: 13,
          color: '#000'
        }
      }
    }
  };
 
  graphBar = {
    data: [
      {
        x: ['giraffes', 'orangutans', 'monkeys', 'dogs', 'cats', 'spider', 'chicken', 'donkey', 'fish', 'bat', 'camel'],
        y: [20, 14, 23, 54, 77, 3, 45, 22, 9, 18, 11],
        type: 'bar',
        marker: {
          color: ['#FFFF00', '#0000FF', '#00FF00', '	#FF0000', '#00FFFF', '#FF00FF', '#ff8c00', '#2f4f4f	', '#4b0082	', '#4F4F4F	', '#0000FF	'],
          line: {
            width: 0.5
        }}
      },
    ],
    layout: {
      showlegend: false,
      width: this.innerWidthGraph + 450,
      margin: {
        l:30,
        r:30,
        b:30,
        t:40
      },
      legend: {
        font: {
          family: 'sans-serif',
          size: 13,
          color: '#000'
        }
      }
    },
    config: {
      responsive: true
    }
  } 

  graphFormation = {
    data: [{
      values: [54221, 13254, 9544, 8549, 8777, 4540, 1520],
      labels: ['Não preenchido', 'Superior cursando', 'Médio cursando', 'Médio completo', 'Técnico completo', 'Complementar completo', 'Complementar cursando' ],
      text: 'CO2',
      textposition: 'inside',
      domain: {column: 1},
      name: 'CO2 Emissions',
      hoverinfo: 'label+percent+name',
      hole: .5,
      type: 'pie'
    }],

    layout: {
      height: 380,
      width: this.innerWidthGraph,
      showlegend: true,
      margin: {
        l:10,
        r:10,
        b:10,
        t:30
      },
      legend: {
        font: {
          family: 'sans-serif',
          size: 13,
          color: '#000'
        }
      }
    }
  }

  graphEndCourse = {
    data: [{
      values: [63551, 145454, 9221, 8549, 8777, 3221, 554],
      labels: ['Não preenchido', '12/20', '12/21', '12/19', '12/24', '06/19', '06/21' ],
      text: 'CO2',
      textposition: 'inside',
      name: 'Formantes',
      domain: {column: 1},
      hoverinfo: 'label+percent+name',
      type: 'pie'
    }],

    layout: {
      height: 380,
      width: this.innerWidthGraph,
      showlegend: true,
      margin: {
        l:10,
        r:10,
        b:10,
        t:30
      },
      legend: {
        font: {
          family: 'sans-serif',
          size: 13,
          color: '#000'
        }
      }
    }
  }

  graphBarHorizontal = {
    data: [
      {
        x: [11210, 1451, 1202, 985, 854, 232],
        y: ['Não preenchido', 'Ensino médio', 'Direito', 'Administração', 'Pedagogia', 'Psicologia'],
        name: 'Não preenchido',
        hoverinfo: 'y',
        orientation: 'h',
        marker: {
          color: 'rgba(202,69,57)',
          width: 1
        },
        type: 'bar'
      },
      {
        x: [8210, 2451, 802, 815, 242, 188],
        y: ['Não preenchido', 'Ensino médio', 'Direito', 'Administração', 'Pedagogia', 'Psicologia'],
        name: 'São Paulo',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: 'rgba(57,125,202)',
          width: 1
        }
      },
      {
        x: [9584, 3452, 2454, 1545, 242, 188, 325],
        y: ['Não preenchido', 'Ensino médio', 'Direito', 'Administração', 'Pedagogia', 'Psicologia', 'Tecnologia'],
        name: 'Diadema',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: 'rgba(212,200,37)',
          width: 1
        }
      },
      {
        x: [4542, 45, 4800, 1545, 642, 888, 3655],
        y: ['Não preenchido', 'Ensino médio', 'Direito', 'Administração', 'Pedagogia', 'Psicologia', 'Tecnologia'],
        name: 'Diadema',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: 'rgba(236,23,27)',
          width: 1
        }
      }
    ],
    layout: {
      title: 'Curso/Cidade',
      barmode: 'stack',
      width: this.innerWidthGraph + 400,
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.setSizeRight();
  }

  setSizeRight() {
    const width = screen.width

    if (this.innerWidth <= 1366) {
      this.innerWidth = 440;
    } else {
      this.innerWidth = 585;
    }

  }

}
