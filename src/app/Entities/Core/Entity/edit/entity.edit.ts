import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Entity } from '../entity';
import { EntityService } from '../entity.service';



@Component({
  selector: 'core-entity-edit',
  templateUrl: './entity.edit.html',
  styleUrls: ['./entity.edit.css']
})
export class EntityEditUI extends EditModal<Entity> implements IEditModal<Entity>  {
  
  constructor(private entityService: EntityService) {
    super(entityService); 
    this.currentInstance = new Entity();
  }

  

  @ViewChild('entityEditUI')
  private entityEditUI: NgForm;

  Init(entity: Entity = new Entity()) {
    if (entity.isNew)
      this.entityEditUI.reset();
    this.InitEntity(entity);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitEntity(entity: Entity){
    this.currentInstance = this.service.CreateInstance();
    if (!entity.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = entity;
  }

  ResetForm() {
    
  }
}