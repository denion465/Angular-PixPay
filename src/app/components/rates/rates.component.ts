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

  async calcularImposto() {

    try {
      this.impostos = await this.calculationsService.getCalculateImpostos(this.valorProduto)
    } catch (error) {
      
    }

  }
  
}
