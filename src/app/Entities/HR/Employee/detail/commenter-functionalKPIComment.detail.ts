import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { FunctionalKPIComment } from '../../../PMS/FunctionalKPIComment/functionalKPIComment';
import { FunctionalKPICommentMasterUI } from '../../../PMS/FunctionalKPIComment/master/functionalKPIComment.master';
import { FunctionalKPICommentEditUI } from '../../../PMS/FunctionalKPIComment/edit/functionalKPIComment.edit';
import { FunctionalKPICommentDeleteUI } from '../../../PMS/FunctionalKPIComment/delete/functionalKPIComment.delete';



@Component({
  selector: 'commenter-functionalKPIComment-detail',
  templateUrl: './commenter-functionalKPIComment.detail.html',
  styleUrls: ['./commenter-functionalKPIComment.detail.css']
})
export class Commenter_FunctionalKPIComment_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public FunctionalKPICommentList : FunctionalKPIComment[] = [];
  
  public currentFunctionalKPIComment : FunctionalKPIComment = new FunctionalKPIComment();

  private commenter: Employee = new Employee();

  @Input()
  public set Commenter(value: Employee) {
    this.commenter = value;
    this.onReload();
  }

  public get Commenter(): Employee { return this.commenter }

  public onReload(){
    if (Employee.NotConfirm(this.commenter))
      return;
    this.employeeService
      .ServiceCollection
      .CollectionOfFunctionalKPIComment_Commenter(this.commenter)
      .then(functionalKPICommentList => {
        this.FunctionalKPICommentList = functionalKPICommentList;
        this.currentFunctionalKPIComment = new FunctionalKPIComment();
      });
  }

  public onSelect(i: number) {
    this.currentFunctionalKPIComment = this.FunctionalKPICommentList[i];
    if (FunctionalKPIComment.NotConfirm(this.currentFunctionalKPIComment))
      this.currentFunctionalKPIComment = new FunctionalKPIComment();
  }

  public onDblClicked(masterUI: FunctionalKPICommentMasterUI) {
    if (FunctionalKPIComment.NotConfirm(this.currentFunctionalKPIComment))
      return;
    masterUI.ShowDialog(this.currentFunctionalKPIComment);
  }

  public onAdd(editUI: FunctionalKPICommentEditUI) {
    editUI.Commenter = this.commenter;
    editUI.ShowDialog(new FunctionalKPIComment());
  }

  public onEdit(editUI: FunctionalKPICommentEditUI) {
    if (FunctionalKPIComment.NotConfirm(this.currentFunctionalKPIComment))
      return;
    editUI.ShowDialog(this.currentFunctionalKPIComment);
  }

  public onDelete(deleteUI: FunctionalKPICommentDeleteUI) {
    if (FunctionalKPIComment.NotConfirm(this.currentFunctionalKPIComment))
      return;
    deleteUI.ShowDialog(this.currentFunctionalKPIComment);
  }

  public onEditModal_Closed(functionalKPIComment: FunctionalKPIComment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}