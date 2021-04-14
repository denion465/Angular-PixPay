import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import  AppSettings from '../AppSettings'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {
 
  constructor(private http: HttpClient) { }

  getCalculateImpostos(valorProduto): Promise<any> {

    return new Promise(async (resolve, reject) => {

      const res = await this.http.get(`${AppSettings.API_ENDPOINT}/imposto-por-importados/${valorProduto}`).toPromise();

      try {
        const res = await this.http.get(`${AppSettings.API_ENDPOINT}/imposto-por-importados/${valorProduto}`).toPromise();
        resolve(res);
      } catch (error) {
        console.log('Error on get impostos', error)
      }

    })

  }

  getCalculateSalarioInss(salarioB): Promise<any> {

    return new Promise(async (resolve, reject) =>{

      const res = await this.http.get(`${AppSettings.API_ENDPOINT}/salario-liquido/${salarioB}`).toPromise();

      try {
        const res = await this.http.get(`${AppSettings.API_ENDPOINT}/salario-liquido/${salarioB}`).toPromise();
        resolve(res)
      } catch (error) {
        console.log('Error on get SalarioB')
      }
    })
  }

  sendPeople(addPeople: any): Observable<any> {
    let params = new HttpParams()
    params.set('pessoa', addPeople)
    params.set('test', '2018')
    return this.http.post<any>('http://localhost:4100/add', params.toString())
  }


}
