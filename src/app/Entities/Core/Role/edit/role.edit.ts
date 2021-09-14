import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Role } from '../role';
import { RoleService } from '../role.service';



@Component({
  selector: 'core-role-edit',
  templateUrl: './role.edit.html',
  styleUrls: ['./role.edit.css']
})
export class RoleEditUI extends EditModal<Role> implements IEditModal<Role>  {
  
  constructor(private roleService: RoleService) {
    super(roleService); 
    this.currentInstance = new Role();
  }

  

  @ViewChild('roleEditUI')
  private roleEditUI: NgForm;

  Init(role: Role = new Role()) {
    if (role.isNew)
      this.roleEditUI.reset();
    this.InitRole(role);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitRole(role: Role){
    this.currentInstance = this.service.CreateInstance();
    if (!role.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = role;
  }

  ResetForm() {
    
  }
}