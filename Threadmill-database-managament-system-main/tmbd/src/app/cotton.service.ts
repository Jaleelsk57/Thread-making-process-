// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CottonService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  CottonDetails,
  UniqueConstraintError,
} from './cotton';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CottonService   {
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';

  Insert(
    Details: CottonDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'cotton/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(ID: string): Observable<Read> {
    return this.http.get<Read>(`${this.url}cotton/Read${ID}`);
  }
  Delete(ID: string): Observable<InsertedSuccess> {
    console.log(`${this.url}cotton/Delete${ID}`);
    return this.http.delete<InsertedSuccess>(`${this.url}cotton/Delete${ID}`
    );
  }
  Update(ID: string, Details: CottonDetails) {
    return this.http.put(`${this.url}cotton/Update${ID}`, Details, {
      headers: this.headers,
    });
  }
  view():Observable<Read>{
    return this.http.get<Read>(`${this.url}cotton/ReadAll`);
  }
}