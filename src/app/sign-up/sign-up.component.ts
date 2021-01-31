import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { UsersService } from '../models/users.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = new User();

  constructor(private userService: UsersService) { 
    this.user.nom='aaa';
    this.user.prenom='';
    this.user.email='';
    this.user.mdp='';
  }

  ngOnInit(): void {
    
  }
  addUser(){ 
    let useer= new User();
    useer.nom = this.user.nom;
    useer.prenom = this.user.prenom;
    useer.email = this.user.email;
    useer.mdp = this.user.mdp;

    this.userService.addUser(this.user).subscribe(
      res => console.log(res),
      err =>console.log(err)
    )
  }
}
