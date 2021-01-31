import { Component,Input, OnInit } from '@angular/core';
import { ProfesseurModel } from 'src/app/models/professeur-model.model';

@Component({
  selector: 'app-prof-item',
  templateUrl: './prof-item.component.html',
  styleUrls: ['./prof-item.component.css']
})
export class ProfItemComponent implements OnInit {
  @Input() professeur : ProfesseurModel;
  constructor() { }

  ngOnInit(): void {
  }

}
