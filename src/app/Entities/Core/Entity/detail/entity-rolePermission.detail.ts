import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Entity } from '../entity';
import { EntityService } from '../entity.service';

import { RolePermission } from '../../RolePermission/rolePermission';
import { RolePermissionMasterUI } from '../../RolePermission/master/rolePermission.master';
import { RolePermissionEditUI } from '../../RolePermission/edit/rolePermission.edit';
import { RolePermissionDeleteUI } from '../../RolePermission/delete/rolePermission.delete';



@Component({
  selector: 'entity-rolePermission-detail',
  templateUrl: './entity-rolePermission.detail.html',
  styleUrls: ['./entity-rolePermission.detail.css'],
  providers: [EntityService]
}) 

@Injectable()
export class Entity_RolePermission_DetailUI extends DetailView<Entity> {

  constructor(private entityService: EntityService) {
    super(entityService);
  }

  public RolePermissionList : RolePermission[] = [];
  
  public currentRolePermission : RolePermission = new RolePermission();

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
      .CollectionOfRolePermission(this.entity)
      .then(rolePermissionList => {
        this.RolePermissionList = rolePermissionList;
        this.currentRolePermission = new RolePermission();
      });
  }

  public onSelect(i: number) {
    this.currentRolePermission = this.RolePermissionList[i];
    if (RolePermission.NotConfirm(this.currentRolePermission))
      this.currentRolePermission = new RolePermission();
  }

  public onDblClicked(masterUI: RolePermissionMasterUI) {
    if (RolePermission.NotConfirm(this.currentRolePermission))
      return;
    masterUI.ShowDialog(this.currentRolePermission);
  }

  public onAdd(editUI: RolePermissionEditUI) {
    editUI.Entity = this.entity;
    editUI.ShowDialog(new RolePermission());
  }

  public onEdit(editUI: RolePermissionEditUI) {
    if (RolePermission.NotConfirm(this.currentRolePermission))
      return;
    editUI.ShowDialog(this.currentRolePermission);
  }

  public onDelete(deleteUI: RolePermissionDeleteUI) {
    if (RolePermission.NotConfirm(this.currentRolePermission))
      return;
    deleteUI.ShowDialog(this.currentRolePermission);
  }

  public onEditModal_Closed(rolePermission: RolePermission) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}