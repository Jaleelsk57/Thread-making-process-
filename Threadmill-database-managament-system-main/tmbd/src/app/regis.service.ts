import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
  RegisDetails,
  UniqueConstraintError,
} from './regis';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisService   {
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';

  Insert(
    Details: RegisDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'regis/Insert',
      Details,
      { headers: this.headers }
    );
  
  }
  Read(name: string): Observable<Read> {
    return this.http.get<Read>(`${this.url}regis/Read${name}`);
  }
  Dlogin(name: string): Observable<Read> {
    return this.http.get<Read>(`${this.url}regis/Dlogin${name}`);
  }
  Delete(name: string): Observable<InsertedSuccess> {
    console.log(`${this.url}regis/Delete${name}`);
    return this.http.delete<InsertedSuccess>(`${this.url}regis/Delete${name}`
    );
  }
  Update(name: string, Details: RegisDetails) {
    return this.http.put(`${this.url}regis/Update${name}`, Details, {
      headers: this.headers,
    });
  }
  view():Observable<Read>{
    return this.http.get<Read>(`${this.url}regis/ReadAll`);
  }
}