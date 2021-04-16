import { Component, OnInit } from '@angular/core';
import { CalculationsService } from 'src/app/services/calculations.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  addPeople: any = {
    nome: '',
    sobrenome: '',
    idade: '',
    cidadeEstado: '',
    profissao: '',
    salario: '',
  }

  constructor(private calculationService: CalculationsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.calculationService.postPeople(this.addPeople).subscribe(() => {
      console.log('Data added successfully!')
    }, (error)=> {
      console.log('error during post is ', error)
    })
  }

}
