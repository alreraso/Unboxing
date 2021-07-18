import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/user';
import { Recolector } from '../models/recolector';

@Injectable({
  providedIn: 'root'
})
export class RecolectorService {

  API_URI = 'http://localhost:5000/api/v1';

  constructor(
    private http:HttpClient
  ) { }

  createUserColector(user:User){
    return this.http.post(`${this.API_URI}/register`,user);
  }

  createrColector(recolector:Recolector){
    return this.http.post(`${this.API_URI}/collector`,recolector);
  }

}
