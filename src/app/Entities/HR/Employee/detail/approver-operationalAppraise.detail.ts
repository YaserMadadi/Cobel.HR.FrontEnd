import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { OperationalAppraise } from '../../../PMS/OperationalAppraise/operationalAppraise';
import { OperationalAppraiseMasterUI } from '../../../PMS/OperationalAppraise/master/operationalAppraise.master';
import { OperationalAppraiseEditUI } from '../../../PMS/OperationalAppraise/edit/operationalAppraise.edit';
import { OperationalAppraiseDeleteUI } from '../../../PMS/OperationalAppraise/delete/operationalAppraise.delete';



@Component({
  selector: 'approver-operationalAppraise-detail',
  templateUrl: './approver-operationalAppraise.detail.html',
  styleUrls: ['./approver-operationalAppraise.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Approver_OperationalAppraise_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public OperationalAppraiseList : OperationalAppraise[] = [];
  
  public currentOperationalAppraise : OperationalAppraise = new OperationalAppraise();

  private approver: Employee = new Employee();

  @Input()
  public set Approver(value: Employee) {
    this.approver = value;
    this.onReload();
  }

  public get Approver(): Employee { return this.approver }

  public onReload(){
    if (Employee.NotConfirm(this.approver))
      return;
    this.employeeService
      .ServiceCollection
      .CollectionOfOperationalAppraise_Approver(this.approver)
      .then(operationalAppraiseList => {
        this.OperationalAppraiseList = operationalAppraiseList;
        this.currentOperationalAppraise = new OperationalAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentOperationalAppraise = this.OperationalAppraiseList[i];
    if (OperationalAppraise.NotConfirm(this.currentOperationalAppraise))
      this.currentOperationalAppraise = new OperationalAppraise();
  }

  public onDblClicked(masterUI: OperationalAppraiseMasterUI) {
    if (OperationalAppraise.NotConfirm(this.currentOperationalAppraise))
      return;
    masterUI.ShowDialog(this.currentOperationalAppraise);
  }

  public onAdd(editUI: OperationalAppraiseEditUI) {
    editUI.Approver = this.approver;
    editUI.ShowDialog(new OperationalAppraise());
  }

  public onEdit(editUI: OperationalAppraiseEditUI) {
    if (OperationalAppraise.NotConfirm(this.currentOperationalAppraise))
      return;
    editUI.ShowDialog(this.currentOperationalAppraise);
  }

  public onDelete(deleteUI: OperationalAppraiseDeleteUI) {
    if (OperationalAppraise.NotConfirm(this.currentOperationalAppraise))
      return;
    deleteUI.ShowDialog(this.currentOperationalAppraise);
  }

  public onEditModal_Closed(operationalAppraise: OperationalAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}