import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import  AppSettings from '../AppSettings'
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { People } from './People';

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

  postPeople(addPeople: People): Observable<any>{
    let API_ENDPOINT = `${AppSettings.API_ENDPOINT}/add-people`;
    return this.http.post(API_ENDPOINT, addPeople)
    .pipe(
      catchError(this.handleError)
    )
  }

  getPeople(){
    return this.http.get(`${AppSettings}/api`)
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message
    } else {
      // Handle server error
      errorMessage = `Error Code ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage)
  }

}
