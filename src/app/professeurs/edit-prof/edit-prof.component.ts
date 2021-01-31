import { Component, Input, OnInit } from '@angular/core';
import { ProfesseurModel } from 'src/app/models/professeur-model.model';

@Component({
  selector: 'app-edit-prof',
  templateUrl: './edit-prof.component.html',
  styleUrls: ['./edit-prof.component.css']
})
export class EditProfComponent implements OnInit {
  @Input() professeur : ProfesseurModel;
  constructor() { }

  ngOnInit(): void {
  }

}
