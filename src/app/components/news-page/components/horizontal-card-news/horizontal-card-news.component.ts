import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-horizontal-card-news',
  templateUrl: './horizontal-card-news.component.html',
  styleUrls: ['./horizontal-card-news.component.css']
})
export class HorizontalCardNewsComponent implements OnInit {
  // @Output() person: EventEmitter<string> = new EventEmitter<string>();

  @Input() title!: string;
  @Input() category!: string;
  @Input() content!: string;
  @Input() photo!: string;


  constructor(private dataService: DataServiceService){}

  ngOnInit(): void {
  }
}
