import { DestinationModel } from './destination-model.model';
import { User } from './user.model';

export class MissionModel {
    dateDepart: string;
    dateRetour: string;
    professeur: User;
    destination: DestinationModel;
    statut: boolean;
}
