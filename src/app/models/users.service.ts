import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { apiRest } from './../constante';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userModel: User;
  constructor(private httpc: HttpClient) { }
  
  getUsers() {
    return this.httpc.get(`${apiRest}/personnes`);
  }

  addUser(user: User) {
    return this.httpc.post(`${apiRest}/personnes`, user);
  }
  getUserById(id: number){
    return this.httpc.get(`${apiRest}/personnes/`+ id);
  }
}
