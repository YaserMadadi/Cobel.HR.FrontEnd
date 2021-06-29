import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Entity } from '../entity';
import { EntityService } from '../entity.service';
import { EntityMasterUI } from '../master/entity.master';
import { EntityEditUI } from '../edit/entity.edit';
import { EntityDeleteUI } from '../delete/entity.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { RolePermissionEditUI } from '../../RolePermission/edit/rolePermission.edit';
import { RolePermission } from '../../RolePermission/rolePermission';
import { PropertyEditUI } from '../../Property/edit/property.edit';
import { Property } from '../../Property/property';



@Component({
  selector: 'core-entity-index',
  templateUrl: './entity.index.html',
  styleUrls: ['./entity.index.css']
})
export class EntityIndexUI extends IndexView<Entity> implements AfterViewInit, IIndexView<Entity> {

  constructor(private entityService: EntityService) {
    super(entityService);
    this.filterInstance = Entity.SeekInstance();
    this.currentInstance = new Entity();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region RolePermission

  public rolePermission_Clicked(rolePermissionEditUI: RolePermissionEditUI) {
    rolePermissionEditUI.Entity = this.currentInstance;
    rolePermissionEditUI.ShowDialog(new RolePermission());
  }
                    
  public rolePermissionEditUI_Closed(rolePermission: RolePermission) {
    if (!rolePermission)
      return;
    this.onRefresh();
  }
  
  //#endregion RolePermission

  //#region Property

  public property_Clicked(propertyEditUI: PropertyEditUI) {
    propertyEditUI.Entity = this.currentInstance;
    propertyEditUI.ShowDialog(new Property());
  }
                    
  public propertyEditUI_Closed(property: Property) {
    if (!property)
      return;
    this.onRefresh();
  }
  
  //#endregion Property


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(entityEditUI: EntityEditUI){
    entityEditUI.ShowDialog(new Entity());
  }

  resetFilter() {
    this.filterInstance = Entity.SeekInstance();
    
    
  }

  public onEditModalClosed(entity: Entity) {
    this.onRefresh();
    this.currentInstance = new Entity();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}