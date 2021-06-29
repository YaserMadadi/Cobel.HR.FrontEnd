import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { RoleMember } from '../../../Core/RoleMember/roleMember';
import { RoleMemberMasterUI } from '../../../Core/RoleMember/master/roleMember.master';
import { RoleMemberEditUI } from '../../../Core/RoleMember/edit/roleMember.edit';
import { RoleMemberDeleteUI } from '../../../Core/RoleMember/delete/roleMember.delete';



@Component({
  selector: 'employee-roleMember-detail',
  templateUrl: './employee-roleMember.detail.html',
  styleUrls: ['./employee-roleMember.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Employee_RoleMember_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public RoleMemberList : RoleMember[] = [];
  
  public currentRoleMember : RoleMember = new RoleMember();

  private employee: Employee = new Employee();

  @Input()
  public set Employee(value: Employee) {
    this.employee = value;
    this.onReload();
  }

  public get Employee(): Employee { return this.employee }

  public onReload(){
    if (Employee.NotConfirm(this.employee))
      return;
    this.employeeService
      .ServiceCollection
      .CollectionOfRoleMember(this.employee)
      .then(roleMemberList => {
        this.RoleMemberList = roleMemberList;
        this.currentRoleMember = new RoleMember();
      });
  }

  public onSelect(i: number) {
    this.currentRoleMember = this.RoleMemberList[i];
    if (RoleMember.NotConfirm(this.currentRoleMember))
      this.currentRoleMember = new RoleMember();
  }

  public onDblClicked(masterUI: RoleMemberMasterUI) {
    if (RoleMember.NotConfirm(this.currentRoleMember))
      return;
    masterUI.ShowDialog(this.currentRoleMember);
  }

  public onAdd(editUI: RoleMemberEditUI) {
    editUI.Employee = this.employee;
    editUI.ShowDialog(new RoleMember());
  }

  public onEdit(editUI: RoleMemberEditUI) {
    if (RoleMember.NotConfirm(this.currentRoleMember))
      return;
    editUI.ShowDialog(this.currentRoleMember);
  }

  public onDelete(deleteUI: RoleMemberDeleteUI) {
    if (RoleMember.NotConfirm(this.currentRoleMember))
      return;
    deleteUI.ShowDialog(this.currentRoleMember);
  }

  public onEditModal_Closed(roleMember: RoleMember) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}