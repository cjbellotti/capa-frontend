import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dialog-layout',
  templateUrl: './dialog-layout.component.html',
  styleUrls: ['./dialog-layout.component.css']
})
export class DialogLayoutComponent implements OnInit {

  @Input('titulo') titulo : string = '';

  @Output('close') closeEvent : EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeEvent.emit();
  }

}
