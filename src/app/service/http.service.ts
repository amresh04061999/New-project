import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../core/registration/model/user.model';

@Injectable()
export class HttpService {
 private baseUrl:string
  constructor(private _http: HttpClient) {
    this.baseUrl='http://localhost:3000/user';
   }
/**
 * Add user in json server
 * @param user 
 * @returns 
 */
    adduser(user:User): Observable<User>{
      const URL: string = `${this.baseUrl}`;
      return this._http.post<User>(URL,user)
    }
    getUser(): Observable<User[]>{
      const URL: string = `${this.baseUrl}`;
      return this._http.get<User[]>(URL)
    }
}
