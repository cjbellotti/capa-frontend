import { Component, Input, OnInit } from '@angular/core';

interface Item {
  id : string;
  name : string;
}

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input('options') options : Item[] = [];

  toggle : boolean = false;

  selected : Item = null;

  constructor() { }

  ngOnInit(): void {
  }

  switchToggle() {
    this.toggle = !this.toggle;
  }
}
