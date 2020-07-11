import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OverallCasesService {

  constructor(private http: HttpClient) { }
  // getService(): Observable<any> {
  //   return this.http.get(
  //     "https://covid19.mathdro.id/api/countries/india"
  //   ).pipe(
  //     catchError(err => {
  //       console.log(err)
  //       return err
  //     })
  //   );
  // }
  getService() {
    let data = this.http.get(`"https://covid19.mathdro.id/api/countries/india"`)
    return data;
  }
}
