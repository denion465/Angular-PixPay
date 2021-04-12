import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import  AppSettings  from '../AppSettings'


@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  constructor(private http: HttpClient) { }

  getCalculateImpostos(valorProduto){
    this.http.get(`${AppSettings.API_ENDPOINT}/imposto-por-importados/${valorProduto}`).subscribe((imposto) => {
      console.log(imposto)
      return imposto
    })
  }
}
