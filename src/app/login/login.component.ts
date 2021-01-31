import { Component, OnInit } from '@angular/core';
import { AuthModel } from '../models/auth-model.model';
import { AuthModelService } from '../models/auth-model.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formAuth = new AuthModel();
  authModelService: AuthModelService;
  constructor(auth: AuthModelService ) {
    this.authModelService = auth;
   }

  ngOnInit(): void {
  }
  loginUser(){
    const email: string = this.formAuth.email;
    const pwd: string = this.formAuth.mdp;
    let authhhh: AuthModel;
    authhhh.email = email;
    authhhh.mdp = pwd;
    this.authModelService.sendAuth(authhhh).subscribe(
      res => console.log(res),
      err =>console.log(err)
    )

  }
  
    
    
}
