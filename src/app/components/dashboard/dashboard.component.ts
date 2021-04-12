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
        { x: ['ABR/2020', 'MAI/2020', 'JUN/2020', 'JUL/2020', 'AGO/2020', 'SET/2020', 'OUT/2020', 'NOV/2020', 'DEZ/2020', 'JAN/2021', 'FEV/2021', 'MAR/2021'], y: [200, 166, 130, 111, 102, 177, 101, 45, 41, 154, 455], type: 'scatter', mode: 'Pie', name: 'Média', marker: {color: 'red' } },
        { x: ['ABR/2020', 'MAI/2020', 'JUN/2020', 'JUL/2020', 'AGO/2020', 'SET/2020', 'OUT/2020', 'NOV/2020', 'DEZ/2020', 'JAN/2021', 'FEV/2021', 'MAR/2021'], y: [215, 254, 191, 74, 301, 149, 95, 51, 84, 257, 404], type: 'bar', name: 'Contratações', marker: { color: '#344a4a' }},
    ],
    layout: {
      width: this.innerWidthGraph + 100,
      showlegend: true,
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
      values: [3540, 3412, 1554, 6551, 4587, 5448, 3558, 540, 610, 415, 220],
      labels: ['Santander', 'Fleury', 'Natura', 'Espro', 'Callink', 'Sequoia', 'CIE', 'Movile', 'Avantia', 'Vocação', 'Albert Einstein'],
      text: 'CO2',
      textposition: 'inside',
      domain: {column: 1},
      name: 'Vagas',
      hoverinfo: 'label+value+name',
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
        x: ['Contabilidade', 'Saúde', 'Administrativo', 'TI', 'Não Informadas', 'Atendente', 'Advocacia', 'Psicologia', 'Design', 'Arquiteto', 'Engenehiros'],
        y: [20, 14, 23, 54, 77, 3, 45, 22, 9, 18, 11],
        offsetgroup: '3',
        type: 'bar',
        marker: {
          opacity: 0.6,
          color: 'rgb(158,202,225)',
          line: {
            color: [''],
            width: 1.5
        }}
      },
    ],
    layout: {
      xaxis: {range: [-0.75, 5.5]},
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
        y: ['Tecnologia', 'Ensino médio', 'Direito', 'Administração', 'Pedagogia', 'Enfermagem'],
        name: 'Não preenchido',
        hoverinfo: 'y',
        orientation: 'h',
        marker: {
          color: '#ff5745',
          width: 1
        },
        type: 'bar'
      },
      {
        x: [3521, 9451, 8302, 1215, 3342, 488, 2210],
        y: ['Tecnologia', 'Ensino médio', 'Direito', 'Administração', 'Pedagogia', 'Enfermagem', 'Psicologia'],
        name: 'São Paulo',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: 'rgba(57,125,202)',
          width: 1
        }
      },
      {
        x: [8210, 2451, 802, 815, 242, 188],
        y: ['Tecnologia', 'Ensino médio', 'Direito', 'Administração', 'Pedagogia', 'Enfermagem'],
        name: 'Belo horizonte',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: '#07d1ff',
          width: 1
        }
      },
      {
        x: [4555, 344, 3454, 44, 3453, 455, 233],
        y: ['Tecnologia', 'Ensino médio', 'Direito', 'Administração', 'Pedagogia', 'Psicologia', 'Enfermagem'],
        name: 'Santos',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: '#8dc53a',
          width: 1
        }
      },
      {
        x: [401, 78, 99, 102, 2201, 354, 10],
        y: ['Tecnologia', 'Ensino médio', 'Direito', 'Administração', 'Pedagogia', 'Psicologia', 'Enfermagem'],
        name: 'São Bernardo',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: '#0068b4',
          width: 1
        }
      },
      {
        x: [9584, 3452, 2454, 1545, 242, 188, 325],
        y: ['Tecnologia', 'Ensino médio', 'Direito', 'Administração', 'Pedagogia', 'Psicologia', 'Enfermagem'],
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
        y: ['Tecnologia', 'Ensino médio', 'Direito', 'Administração', 'Pedagogia', 'Psicologia', 'Enfermagem'],
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
      barmode: 'stack',
      width: this.innerWidthGraph + 420,
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
