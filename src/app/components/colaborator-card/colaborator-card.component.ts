import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-colaborator-card',
  templateUrl: './colaborator-card.component.html',
  styleUrls: ['./colaborator-card.component.css']
})
export class ColaboratorCardComponent {
  @Input() name!:string;
  @Input() role!:string;

}
