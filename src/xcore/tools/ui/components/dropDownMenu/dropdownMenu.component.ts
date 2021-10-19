import { Component, Input } from '@angular/core';

@Component({
  selector: 'dropDownMenu',
  templateUrl: './dropdownMenu.component.html',
  styleUrls: ['./dropdownMenu.component.css']
})
export class DropDownComponent {
  constructor() {
    
  }

  @Input()
  public disabled: boolean = false;

  @Input()
  public className: string = '';

  @Input()
  public MenuTitle: string = '';
}