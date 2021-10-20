import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { PropertyOption } from '../propertyOption';
import { PropertyOptionService } from '../propertyOption.service';
import { Property } from '../../Property/property';
import { PropertyEditUI } from '../../Property/edit/property.edit';



@Component({
  selector: 'core-propertyOption-edit',
  templateUrl: './propertyOption.edit.html',
  styleUrls: ['./propertyOption.edit.css']
})
export class PropertyOptionEditUI extends EditModal<PropertyOption> implements IEditModal<PropertyOption>  {
  
  constructor(private propertyOptionService: PropertyOptionService) {
    super(propertyOptionService); 
    this.currentInstance = new PropertyOption();
  }

  //#region Foreign Entities
	
	//#region -- Property --

  propertyComponent : ForeignComponent<Property> = new ForeignComponent<Property>(this.propertyOptionService.PropertyService);

  @Input()
  public set Property(value: Property) {
    this.currentInstance.property = this.propertyComponent.instance = value;
  }  


  //#endregion -- Property --
	//#endregion

  @ViewChild('propertyOptionEditUI')
  private propertyOptionEditUI: NgForm;

  Init(propertyOption: PropertyOption = new PropertyOption()) {
    if (propertyOption.isNew)
      this.propertyOptionEditUI.reset();
    this.InitPropertyOption(propertyOption);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitPropertyOption(propertyOption: PropertyOption){
    this.currentInstance = this.service.CreateInstance();
    if (!propertyOption.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.propertyComponent.instance = propertyOption.property;
    } else {
      propertyOption.property = this.propertyComponent.instance;
    }
    this.currentInstance = propertyOption;
  }

  ResetForm() {
    this.Property = new Property();
  }
}