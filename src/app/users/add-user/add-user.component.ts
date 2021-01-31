import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/models/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  submitted: boolean= false;
  user = new User();
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }
  addUser(){
    const prof = new User();
    prof.nom = this.user.nom;
    prof.prenom = this.user.prenom;
    prof.email = this.user.email;
    prof.mdp = this.user.mdp;
    this.userService.addUser(prof).subscribe(
        (success) =>{
          alert("Utilisateur Bien Ajouté !");
        },
        (err) =>{
          alert("Erreur Rencontré Lors de l'Ajout de l'utilisateur !");
        }
      );
    }
}
