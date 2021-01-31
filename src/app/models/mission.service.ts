import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRest } from './../constante';
import { MissionModel } from './mission-model.model';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  missionModel= new MissionModel();
  constructor(private httpc: HttpClient) {
   }
  addMission(mission : MissionModel){
    return this.httpc.post(`${apiRest}/missions`, mission);
  }
  getMission(){
    return this.httpc.get(`${apiRest}/missions`);
  }
  putMission(mission : MissionModel){
    return this.httpc.put(`${apiRest}/missions`, mission);
  }
}
