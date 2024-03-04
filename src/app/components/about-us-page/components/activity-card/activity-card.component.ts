import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent {

  @Input() name!:string;
  @Input() data!:string;
  @Input() pre_content!:string;
}
