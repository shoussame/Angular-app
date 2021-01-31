import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Observable, Subject } from 'rxjs';
import { apiRest } from '../constante';
import { User } from '../models/user.model';
import { UsersService } from '../models/users.service';
import { ProfesseursComponent } from '../professeurs/professeurs.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  editedProf: boolean = false;
  professeur = new User();
  professeurs = new Array<User>();
  constructor( private professeurService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  
  }
  getUsers(){
      this.professeurService.getUsers().subscribe(
      (res: any) => {
        this.professeurs = res;
        },
      (err) =>console.log(err)
    );
    
  }

  getUser(id: number){
    this.professeurService.getUserById(id).subscribe(
      res => console.log(res),
      err =>console.log(err)
    );
  }
  editProfEvent(produit){
    this.editedProf = true;
    this.professeur = produit;
  }
}
