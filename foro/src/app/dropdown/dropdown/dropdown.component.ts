import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface Item {
  id : string;
  name : string;
}

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers : [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {

  @Input('options') options : Item[] = [];

  toggle : boolean = false;

  selected : Item = null;

  isDiabled : boolean = false;

  value : string = null;

  constructor() { }

  ngOnInit(): void {
  }

  select(item : Item) {
    debugger;
    this.selected = item;
    this.writeValue(this.selected);
    this.onChange(this.value);
    this.onTouch(this.value);
    this.switchToggle();
  }

  switchToggle() {
    this.toggle = !this.toggle;
  }

  onChange: any = () => { }
  onTouch: any = () => { }

  writeValue(obj: Item): void {
    this.value = obj.id;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDiabled = isDisabled;
  }

}
