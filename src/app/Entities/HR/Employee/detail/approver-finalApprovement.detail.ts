import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { FinalApprovement } from '../../../PMS/FinalApprovement/finalApprovement';
import { FinalApprovementMasterUI } from '../../../PMS/FinalApprovement/master/finalApprovement.master';
import { FinalApprovementEditUI } from '../../../PMS/FinalApprovement/edit/finalApprovement.edit';
import { FinalApprovementDeleteUI } from '../../../PMS/FinalApprovement/delete/finalApprovement.delete';



@Component({
  selector: 'approver-finalApprovement-detail',
  templateUrl: './approver-finalApprovement.detail.html',
  styleUrls: ['./approver-finalApprovement.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Approver_FinalApprovement_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public FinalApprovementList : FinalApprovement[] = [];
  
  public currentFinalApprovement : FinalApprovement = new FinalApprovement();

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
      .CollectionOfFinalApprovement_Approver(this.approver)
      .then(finalApprovementList => {
        this.FinalApprovementList = finalApprovementList;
        this.currentFinalApprovement = new FinalApprovement();
      });
  }

  public onSelect(i: number) {
    this.currentFinalApprovement = this.FinalApprovementList[i];
    if (FinalApprovement.NotConfirm(this.currentFinalApprovement))
      this.currentFinalApprovement = new FinalApprovement();
  }

  public onDblClicked(masterUI: FinalApprovementMasterUI) {
    if (FinalApprovement.NotConfirm(this.currentFinalApprovement))
      return;
    masterUI.ShowDialog(this.currentFinalApprovement);
  }

  public onAdd(editUI: FinalApprovementEditUI) {
    editUI.Approver = this.approver;
    editUI.ShowDialog(new FinalApprovement());
  }

  public onEdit(editUI: FinalApprovementEditUI) {
    if (FinalApprovement.NotConfirm(this.currentFinalApprovement))
      return;
    editUI.ShowDialog(this.currentFinalApprovement);
  }

  public onDelete(deleteUI: FinalApprovementDeleteUI) {
    if (FinalApprovement.NotConfirm(this.currentFinalApprovement))
      return;
    deleteUI.ShowDialog(this.currentFinalApprovement);
  }

  public onEditModal_Closed(finalApprovement: FinalApprovement) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}