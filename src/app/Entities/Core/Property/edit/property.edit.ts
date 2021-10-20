import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Property } from '../property';
import { PropertyService } from '../property.service';
import { Entity } from '../../Entity/entity';
import { EntityEditUI } from '../../Entity/edit/entity.edit';



@Component({
  selector: 'core-property-edit',
  templateUrl: './property.edit.html',
  styleUrls: ['./property.edit.css']
})
export class PropertyEditUI extends EditModal<Property> implements IEditModal<Property>  {
  
  constructor(private propertyService: PropertyService) {
    super(propertyService); 
    this.currentInstance = new Property();
  }

  //#region Foreign Entities
	
	//#region -- Entity --

  entityComponent : ForeignComponent<Entity> = new ForeignComponent<Entity>(this.propertyService.EntityService);

  @Input()
  public set Entity(value: Entity) {
    this.currentInstance.entity = this.entityComponent.instance = value;
  }  


  //#endregion -- Entity --
	//#endregion

  @ViewChild('propertyEditUI')
  private propertyEditUI: NgForm;

  Init(property: Property = new Property()) {
    if (property.isNew)
      this.propertyEditUI.reset();
    this.InitProperty(property);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitProperty(property: Property){
    this.currentInstance = this.service.CreateInstance();
    if (!property.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.entityComponent.instance = property.entity;
    } else {
      property.entity = this.entityComponent.instance;
    }
    this.currentInstance = property;
  }

  ResetForm() {
    this.Entity = new Entity();
  }
}