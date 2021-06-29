import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { CriticalIncident } from '../../../PMS/CriticalIncident/criticalIncident';
import { CriticalIncidentMasterUI } from '../../../PMS/CriticalIncident/master/criticalIncident.master';
import { CriticalIncidentEditUI } from '../../../PMS/CriticalIncident/edit/criticalIncident.edit';
import { CriticalIncidentDeleteUI } from '../../../PMS/CriticalIncident/delete/criticalIncident.delete';



@Component({
  selector: 'employee-criticalIncident-detail',
  templateUrl: './employee-criticalIncident.detail.html',
  styleUrls: ['./employee-criticalIncident.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Employee_CriticalIncident_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public CriticalIncidentList : CriticalIncident[] = [];
  
  public currentCriticalIncident : CriticalIncident = new CriticalIncident();

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
      .CollectionOfCriticalIncident(this.employee)
      .then(criticalIncidentList => {
        this.CriticalIncidentList = criticalIncidentList;
        this.currentCriticalIncident = new CriticalIncident();
      });
  }

  public onSelect(i: number) {
    this.currentCriticalIncident = this.CriticalIncidentList[i];
    if (CriticalIncident.NotConfirm(this.currentCriticalIncident))
      this.currentCriticalIncident = new CriticalIncident();
  }

  public onDblClicked(masterUI: CriticalIncidentMasterUI) {
    if (CriticalIncident.NotConfirm(this.currentCriticalIncident))
      return;
    masterUI.ShowDialog(this.currentCriticalIncident);
  }

  public onAdd(editUI: CriticalIncidentEditUI) {
    editUI.Employee = this.employee;
    editUI.ShowDialog(new CriticalIncident());
  }

  public onEdit(editUI: CriticalIncidentEditUI) {
    if (CriticalIncident.NotConfirm(this.currentCriticalIncident))
      return;
    editUI.ShowDialog(this.currentCriticalIncident);
  }

  public onDelete(deleteUI: CriticalIncidentDeleteUI) {
    if (CriticalIncident.NotConfirm(this.currentCriticalIncident))
      return;
    deleteUI.ShowDialog(this.currentCriticalIncident);
  }

  public onEditModal_Closed(criticalIncident: CriticalIncident) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}