import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { RolePermission } from '../rolePermission';
import { RolePermissionService } from '../rolePermission.service';
import { Role } from '../../Role/role';
import { RoleEditUI } from '../../Role/edit/role.edit';
import { Entity } from '../../Entity/entity';
import { EntityEditUI } from '../../Entity/edit/entity.edit';



@Component({
  selector: 'core-rolePermission-edit',
  templateUrl: './rolePermission.edit.html',
  styleUrls: ['./rolePermission.edit.css']
})
export class RolePermissionEditUI extends EditModal<RolePermission> implements IEditModal<RolePermission>  {
  
  constructor(private rolePermissionService: RolePermissionService) {
    super(rolePermissionService); 
    this.currentInstance = new RolePermission();
  }

  //#region Foreign Entities
	
	//#region -- Role --

  roleComponent : ForeignComponent<Role> = new ForeignComponent<Role>(this.rolePermissionService.RoleService);

  @Input()
  public set Role(value: Role) {
    this.currentInstance.role = this.roleComponent.instance = value;
  }  


  //#endregion -- Role --
	//#region -- Entity --

  entityComponent : ForeignComponent<Entity> = new ForeignComponent<Entity>(this.rolePermissionService.EntityService);

  @Input()
  public set Entity(value: Entity) {
    this.currentInstance.entity = this.entityComponent.instance = value;
  }  


  //#endregion -- Entity --
	//#endregion

  @ViewChild('rolePermissionEditUI')
  private rolePermissionEditUI: NgForm;

  Init(rolePermission: RolePermission = new RolePermission()) {
    if (rolePermission.isNew)
      this.rolePermissionEditUI.reset();
    this.InitRolePermission(rolePermission);
    this.loadLists();
  }

  private loadLists() {
    
    this.roleComponent.LoadList();
  }
  
  InitRolePermission(rolePermission: RolePermission){
    this.currentInstance = this.service.CreateInstance();
    if (!rolePermission.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.roleComponent.instance = rolePermission.role;
			this.entityComponent.instance = rolePermission.entity;
    } else {
      rolePermission.role = this.roleComponent.instance;
			rolePermission.entity = this.entityComponent.instance;
    }
    this.currentInstance = rolePermission;
  }

  ResetForm() {
    this.Role = new Role();
		this.Entity = new Entity();
  }
}