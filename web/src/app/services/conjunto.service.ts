import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Conjunto } from '../models/conjunto';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ConjuntoService {

  API_URI = 'http://localhost:5000/api/v1';

  constructor(
    private http:HttpClient
  ) { }

  createUserConjunto(user:User){
    return this.http.post(`${this.API_URI}/register`,user);
  }

  createConjunto(conjunto:Conjunto){
    return this.http.post(`${this.API_URI}/apartment-complex`,conjunto);
  }
}
