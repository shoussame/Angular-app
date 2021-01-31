import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfesseurModel } from 'src/app/models/professeur-model.model';
import { ProfesseurService } from 'src/app/models/professeur.service';

@Component({
  selector: 'app-add-prof',
  templateUrl: './add-prof.component.html',
  styleUrls: ['./add-prof.component.css']
})
export class AddProfComponent implements OnInit {
  submitted: boolean= false;
  profModel = new ProfesseurModel();
  constructor(private professeurService : ProfesseurService) { }

  ngOnInit(): void {
  }
  
  addProf(){
    const prof = new ProfesseurModel();
    prof.nom = this.profModel.nom;
    prof.prenom = this.profModel.prenom;
    prof.email = this.profModel.email;
    prof.mdp = this.profModel.mdp;
    this.professeurService.addProfesseur(prof).subscribe(
        (success) =>{
          alert("Professeur Bien Ajouté !");
        },
        (err) =>{
          alert("Erreur Rencontré Lors de l'Ajout du professeur !");
        }
      );
    }
  
}