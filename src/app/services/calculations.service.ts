import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import  AppSettings  from '../AppSettings'


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
}
