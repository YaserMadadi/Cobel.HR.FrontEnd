import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Entity } from '../entity';
import { EntityService } from '../entity.service';

import { Property } from '../../Property/property';
import { PropertyMasterUI } from '../../Property/master/property.master';
import { PropertyEditUI } from '../../Property/edit/property.edit';
import { PropertyDeleteUI } from '../../Property/delete/property.delete';



@Component({
  selector: 'entity-property-detail',
  templateUrl: './entity-property.detail.html',
  styleUrls: ['./entity-property.detail.css'],
  providers: [EntityService]
}) 

@Injectable()
export class Entity_Property_DetailUI extends DetailView<Entity> {

  constructor(private entityService: EntityService) {
    super(entityService);
  }

  public PropertyList : Property[] = [];
  
  public currentProperty : Property = new Property();

  private entity: Entity = new Entity();

  @Input()
  public set Entity(value: Entity) {
    this.entity = value;
    this.onReload();
  }

  public get Entity(): Entity { return this.entity }

  public onReload(){
    if (Entity.NotConfirm(this.entity))
      return;
    this.entityService
      .ServiceCollection
      .CollectionOfProperty(this.entity)
      .then(propertyList => {
        this.PropertyList = propertyList;
        this.currentProperty = new Property();
      });
  }

  public onSelect(i: number) {
    this.currentProperty = this.PropertyList[i];
    if (Property.NotConfirm(this.currentProperty))
      this.currentProperty = new Property();
  }

  public onDblClicked(masterUI: PropertyMasterUI) {
    if (Property.NotConfirm(this.currentProperty))
      return;
    masterUI.ShowDialog(this.currentProperty);
  }

  public onAdd(editUI: PropertyEditUI) {
    editUI.Entity = this.entity;
    editUI.ShowDialog(new Property());
  }

  public onEdit(editUI: PropertyEditUI) {
    if (Property.NotConfirm(this.currentProperty))
      return;
    editUI.ShowDialog(this.currentProperty);
  }

  public onDelete(deleteUI: PropertyDeleteUI) {
    if (Property.NotConfirm(this.currentProperty))
      return;
    deleteUI.ShowDialog(this.currentProperty);
  }

  public onEditModal_Closed(property: Property) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}