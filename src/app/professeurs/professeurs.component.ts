import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MissionModel } from '../models/mission-model.model';
import { ProfesseurModel } from '../models/professeur-model.model';
import { ProfesseurService } from '../models/professeur.service';

@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.css']
})
export class ProfesseursComponent implements OnInit {
  editedProf: boolean = false;
  professeur = new ProfesseurModel();
  professeurs = new Array<ProfesseurModel>();
  constructor(private httpc : HttpClient, private professeurService: ProfesseurService) { }

  ngOnInit(): void {
    this.getProfs();
  }
  getProfs(){
    this.professeurService.getProfesseurs().subscribe(
      res => console.log(res),
      err =>console.log(err)
    );
  }
  getProf(id: number){
    this.professeurService.getProfById(id).subscribe(
      res => console.log(res),
      err =>console.log(err)
    );
  }
  editProfEvent(produit){
    this.editedProf = true;
    this.professeur = produit;
  }
}
