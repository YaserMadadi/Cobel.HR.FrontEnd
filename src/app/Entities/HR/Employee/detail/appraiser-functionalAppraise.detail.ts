import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { FunctionalAppraise } from '../../../PMS/FunctionalAppraise/functionalAppraise';
import { FunctionalAppraiseMasterUI } from '../../../PMS/FunctionalAppraise/master/functionalAppraise.master';
import { FunctionalAppraiseEditUI } from '../../../PMS/FunctionalAppraise/edit/functionalAppraise.edit';
import { FunctionalAppraiseDeleteUI } from '../../../PMS/FunctionalAppraise/delete/functionalAppraise.delete';



@Component({
  selector: 'appraiser-functionalAppraise-detail',
  templateUrl: './appraiser-functionalAppraise.detail.html',
  styleUrls: ['./appraiser-functionalAppraise.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Appraiser_FunctionalAppraise_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public FunctionalAppraiseList : FunctionalAppraise[] = [];
  
  public currentFunctionalAppraise : FunctionalAppraise = new FunctionalAppraise();

  private appraiser: Employee = new Employee();

  @Input()
  public set Appraiser(value: Employee) {
    this.appraiser = value;
    this.onReload();
  }

  public get Appraiser(): Employee { return this.appraiser }

  public onReload(){
    if (Employee.NotConfirm(this.appraiser))
      return;
    this.employeeService
      .ServiceCollection
      .CollectionOfFunctionalAppraise_Appraiser(this.appraiser)
      .then(functionalAppraiseList => {
        this.FunctionalAppraiseList = functionalAppraiseList;
        this.currentFunctionalAppraise = new FunctionalAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentFunctionalAppraise = this.FunctionalAppraiseList[i];
    if (FunctionalAppraise.NotConfirm(this.currentFunctionalAppraise))
      this.currentFunctionalAppraise = new FunctionalAppraise();
  }

  public onDblClicked(masterUI: FunctionalAppraiseMasterUI) {
    if (FunctionalAppraise.NotConfirm(this.currentFunctionalAppraise))
      return;
    masterUI.ShowDialog(this.currentFunctionalAppraise);
  }

  public onAdd(editUI: FunctionalAppraiseEditUI) {
    editUI.Appraiser = this.appraiser;
    editUI.ShowDialog(new FunctionalAppraise());
  }

  public onEdit(editUI: FunctionalAppraiseEditUI) {
    if (FunctionalAppraise.NotConfirm(this.currentFunctionalAppraise))
      return;
    editUI.ShowDialog(this.currentFunctionalAppraise);
  }

  public onDelete(deleteUI: FunctionalAppraiseDeleteUI) {
    if (FunctionalAppraise.NotConfirm(this.currentFunctionalAppraise))
      return;
    deleteUI.ShowDialog(this.currentFunctionalAppraise);
  }

  public onEditModal_Closed(functionalAppraise: FunctionalAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}