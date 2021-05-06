import { Component, OnInit } from '@angular/core';
import { CalculationsService} from '../../services/calculations.service'

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

  salarioB = ''
  
  salBruto:any = ''

  constructor(private calculationsService: CalculationsService) { }

  ngOnInit(): void {
  }

  async calculoInss(){
    try {
      this.salBruto = await this.calculationsService.getCalculateSalarioInss(this.salarioB)
      console.log(this.salBruto)
    } catch (error) {
      
    }
  }

}
