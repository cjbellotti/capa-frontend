import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  @Input('topics') topics : any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
