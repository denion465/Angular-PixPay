import { Component, OnInit } from '@angular/core';
import { CalculationsService } from 'src/app/services/calculations.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  valorProduto = '' 

  impostos:any = null

  constructor(private calculationsService: CalculationsService) { 
  
  }

  ngOnInit(): void {
    
  }

  calcularImposto(): void {
    this.calculationsService.getCalculateImpostos(this.valorProduto).subscribe((data) => {

    })
    console.log(this.impostos)
  }
  
}
