

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { RoleMenuItem } from '../roleMenuItem';
import { RoleMenuItemService } from '../roleMenuItem.service';
import { Role } from '../../Role/role';
import { RoleEditUI } from '../../Role/edit/role.edit';
import { MenuItem } from '../../MenuItem/menuItem';
import { MenuItemEditUI } from '../../MenuItem/edit/menuItem.edit';



@Component({
  selector: 'core-roleMenuItem-edit',
  templateUrl: './roleMenuItem.edit.html',
  styleUrls: ['./roleMenuItem.edit.css']
})
export class RoleMenuItemEditUI extends EditModal<RoleMenuItem> implements IEditModal<RoleMenuItem>  {
  
  constructor(private roleMenuItemService: RoleMenuItemService) {
    super(roleMenuItemService); 
    this.currentInstance = new RoleMenuItem();
  }

  //#region Foreign Entities
	
	//#region -- Role --

  roleComponent : ForeignComponent<Role> = new ForeignComponent<Role>(this.roleMenuItemService.RoleService);

  @Input()
  public set Role(value: Role) {
    this.currentInstance.role = this.roleComponent.instance = value;
  }  


  //#endregion -- Role --
	//#region -- MenuItem --

  menuItemComponent : ForeignComponent<MenuItem> = new ForeignComponent<MenuItem>(this.roleMenuItemService.MenuItemService);

  @Input()
  public set MenuItem(value: MenuItem) {
    this.currentInstance.menuItem = this.menuItemComponent.instance = value;
  }  


  //#endregion -- MenuItem --
	//#endregion

  @ViewChild('roleMenuItemEditUI')
  private roleMenuItemEditUI: NgForm;

  Init(roleMenuItem: RoleMenuItem = new RoleMenuItem()) {
    if (roleMenuItem.isNew)
      this.roleMenuItemEditUI.reset();
    this.InitRoleMenuItem(roleMenuItem);
    this.loadLists();
  }

  private loadLists() {
    
    this.roleComponent.LoadList();
  }
  
  InitRoleMenuItem(roleMenuItem: RoleMenuItem) {
    this.currentInstance = this.service.CreateInstance();
    if (!roleMenuItem.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.roleComponent.instance = roleMenuItem.role;
			this.menuItemComponent.instance = roleMenuItem.menuItem;
    } else {
      roleMenuItem.role = this.roleComponent.instance;
			roleMenuItem.menuItem = this.menuItemComponent.instance;
    }
    this.currentInstance = roleMenuItem;
  }

  async onSave(roleMenuItem: RoleMenuItem, editUI: NgForm, isContinue: boolean = false) {
   
    //// Pre Save Action Comes here...
   
    super.onSave(roleMenuItem, editUI, isContinue);
  }

  ResetForm() {
    this.Role = new Role();
		this.MenuItem = new MenuItem();
  }
}
