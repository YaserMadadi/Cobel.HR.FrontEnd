import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { RoleMember } from '../roleMember';
import { RoleMemberService } from '../roleMember.service';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { Role } from '../../Role/role';
import { RoleEditUI } from '../../Role/edit/role.edit';



@Component({
  selector: 'core-roleMember-edit',
  templateUrl: './roleMember.edit.html',
  styleUrls: ['./roleMember.edit.css']
})
export class RoleMemberEditUI extends EditModal<RoleMember> implements IEditModal<RoleMember>  {
  
  constructor(private roleMemberService: RoleMemberService) {
    super(roleMemberService); 
    this.currentInstance = new RoleMember();
  }

  //#region Foreign Entities
	
	//#region -- Employee --

  employeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.roleMemberService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }  


  //#endregion -- Employee --
	//#region -- Role --

  roleComponent : ForeignComponent<Role> = new ForeignComponent<Role>(this.roleMemberService.RoleService);

  @Input()
  public set Role(value: Role) {
    this.currentInstance.role = this.roleComponent.instance = value;
  }  


  //#endregion -- Role --
	//#endregion

  @ViewChild('roleMemberEditUI')
  private roleMemberEditUI: NgForm;

  Init(roleMember: RoleMember = new RoleMember()) {
    if (roleMember.isNew)
      this.roleMemberEditUI.reset();
    this.InitRoleMember(roleMember);
    this.loadLists();
  }

  private loadLists() {
    
    this.roleComponent.LoadList();
  }
  
  InitRoleMember(roleMember: RoleMember) {
    if (!roleMember.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = roleMember.employee;
			this.roleComponent.instance = roleMember.role;
    } else {
      roleMember.employee = this.employeeComponent.instance;
			roleMember.role = this.roleComponent.instance;
    }
    this.currentInstance = roleMember;
  }

  ResetForm() {
    this.Employee = new Employee();
		this.Role = new Role();
  }
}