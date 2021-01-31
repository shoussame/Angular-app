import { MissionModel } from './mission-model.model';

export class ProfesseurModel {
    nom: string;
    prenom: string;
    email: string;
    mdp: string;
    fonction: string;
    missions : MissionModel[]
}
