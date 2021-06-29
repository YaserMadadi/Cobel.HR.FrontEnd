import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { HoldingSection } from '../holdingSection';
import { HoldingSectionService } from '../holdingSection.service';

import { Employee } from '../../../HR/Employee/employee';
import { EmployeeMasterUI } from '../../../HR/Employee/master/employee.master';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { EmployeeDeleteUI } from '../../../HR/Employee/delete/employee.delete';



@Component({
  selector: 'lastHoldingSection-employee-detail',
  templateUrl: './lastHoldingSection-employee.detail.html',
  styleUrls: ['./lastHoldingSection-employee.detail.css'],
  providers: [HoldingSectionService]
}) 

@Injectable()
export class LastHoldingSection_Employee_DetailUI extends DetailView<HoldingSection> {

  constructor(private holdingSectionService: HoldingSectionService) {
    super(holdingSectionService);
  }

  public EmployeeList : Employee[] = [];
  
  public currentEmployee : Employee = new Employee();

  private lastHoldingSection: HoldingSection = new HoldingSection();

  @Input()
  public set LastHoldingSection(value: HoldingSection) {
    this.lastHoldingSection = value;
    this.onReload();
  }

  public get LastHoldingSection(): HoldingSection { return this.lastHoldingSection }

  public onReload(){
    if (HoldingSection.NotConfirm(this.lastHoldingSection))
      return;
    this.holdingSectionService
      .ServiceCollection
      .CollectionOfEmployee_LastHoldingSection(this.lastHoldingSection)
      .then(employeeList => {
        this.EmployeeList = employeeList;
        this.currentEmployee = new Employee();
      });
  }

  public onSelect(i: number) {
    this.currentEmployee = this.EmployeeList[i];
    if (Employee.NotConfirm(this.currentEmployee))
      this.currentEmployee = new Employee();
  }

  public onDblClicked(masterUI: EmployeeMasterUI) {
    if (Employee.NotConfirm(this.currentEmployee))
      return;
    masterUI.ShowDialog(this.currentEmployee);
  }

  public onAdd(editUI: EmployeeEditUI) {
    editUI.LastHoldingSection = this.lastHoldingSection;
    editUI.ShowDialog(new Employee());
  }

  public onEdit(editUI: EmployeeEditUI) {
    if (Employee.NotConfirm(this.currentEmployee))
      return;
    editUI.ShowDialog(this.currentEmployee);
  }

  public onDelete(deleteUI: EmployeeDeleteUI) {
    if (Employee.NotConfirm(this.currentEmployee))
      return;
    deleteUI.ShowDialog(this.currentEmployee);
  }

  public onEditModal_Closed(employee: Employee) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}