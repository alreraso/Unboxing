import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = 'http://localhost:5000/api/v1';

  constructor(
    private http:HttpClient
  ) { }

  login(login:Login){
    return this.http.post(`${this.API_URI}/auth`,login);
  }
}
