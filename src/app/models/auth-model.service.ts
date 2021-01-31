import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRest } from './../constante';
import { AuthModel } from './auth-model.model';

@Injectable({
  providedIn: 'root'
})
export class AuthModelService {
  authent: AuthModel;
  constructor(private httpc: HttpClient) { }
  auth(email: string, mdp: string){
    this.authent.email = email;
    this.authent.mdp = mdp;
  }
  sendAuth(authhh: AuthModel){
    return this.httpc.post(`${apiRest}/login`, authhh);
  }
}
