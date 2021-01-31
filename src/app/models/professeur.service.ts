import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfesseurModel } from './professeur-model.model';
import { apiRest } from '../constante';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {
  professeur = new ProfesseurModel();
  constructor(private httpc: HttpClient) { }
  getProfesseurs() {
    return this.httpc.get(`${apiRest}/professeurs`);
  }

  addProfesseur(user: ProfesseurModel) {
    return this.httpc.post(`${apiRest}/professeurs`, user);
  }
  getProfById(id: number){
    return this.httpc.get(`${apiRest}/professeurs`+ id);
  }
  getProfByNom(nom: string){
    return this.httpc.get(`${apiRest}/professeurs/`+ nom);
  }
}
