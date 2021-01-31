import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DestinationModel } from '../models/destination-model.model';
import { MissionModel } from '../models/mission-model.model';
import { MissionService } from '../models/mission.service';
import { ProfesseurModel } from '../models/professeur-model.model';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  missionModel = new MissionModel();
  destinationModel = new DestinationModel();
  professeur = new ProfesseurModel();
  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
  }
  addMission(){
    let mission = new MissionModel();
    let destination = new DestinationModel();
    mission.dateDepart = this.missionModel.dateDepart;
    mission.dateRetour = this.missionModel.dateRetour;
    destination.ville = this.destinationModel.ville;
    destination.codePostale = this.destinationModel.codePostale;
    mission.destination = destination;
    this.missionService.addMission(mission).subscribe(
      res => console.log(res),
      err =>console.log(err)
    )
  }
}
