import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { FunctionalObjectiveComment } from '../../../PMS/FunctionalObjectiveComment/functionalObjectiveComment';
import { FunctionalObjectiveCommentMasterUI } from '../../../PMS/FunctionalObjectiveComment/master/functionalObjectiveComment.master';
import { FunctionalObjectiveCommentEditUI } from '../../../PMS/FunctionalObjectiveComment/edit/functionalObjectiveComment.edit';
import { FunctionalObjectiveCommentDeleteUI } from '../../../PMS/FunctionalObjectiveComment/delete/functionalObjectiveComment.delete';



@Component({
  selector: 'commenter-functionalObjectiveComment-detail',
  templateUrl: './commenter-functionalObjectiveComment.detail.html',
  styleUrls: ['./commenter-functionalObjectiveComment.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Commenter_FunctionalObjectiveComment_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public FunctionalObjectiveCommentList : FunctionalObjectiveComment[] = [];
  
  public currentFunctionalObjectiveComment : FunctionalObjectiveComment = new FunctionalObjectiveComment();

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
      .CollectionOfFunctionalObjectiveComment_Commenter(this.commenter)
      .then(functionalObjectiveCommentList => {
        this.FunctionalObjectiveCommentList = functionalObjectiveCommentList;
        this.currentFunctionalObjectiveComment = new FunctionalObjectiveComment();
      });
  }

  public onSelect(i: number) {
    this.currentFunctionalObjectiveComment = this.FunctionalObjectiveCommentList[i];
    if (FunctionalObjectiveComment.NotConfirm(this.currentFunctionalObjectiveComment))
      this.currentFunctionalObjectiveComment = new FunctionalObjectiveComment();
  }

  public onDblClicked(masterUI: FunctionalObjectiveCommentMasterUI) {
    if (FunctionalObjectiveComment.NotConfirm(this.currentFunctionalObjectiveComment))
      return;
    masterUI.ShowDialog(this.currentFunctionalObjectiveComment);
  }

  public onAdd(editUI: FunctionalObjectiveCommentEditUI) {
    editUI.Commenter = this.commenter;
    editUI.ShowDialog(new FunctionalObjectiveComment());
  }

  public onEdit(editUI: FunctionalObjectiveCommentEditUI) {
    if (FunctionalObjectiveComment.NotConfirm(this.currentFunctionalObjectiveComment))
      return;
    editUI.ShowDialog(this.currentFunctionalObjectiveComment);
  }

  public onDelete(deleteUI: FunctionalObjectiveCommentDeleteUI) {
    if (FunctionalObjectiveComment.NotConfirm(this.currentFunctionalObjectiveComment))
      return;
    deleteUI.ShowDialog(this.currentFunctionalObjectiveComment);
  }

  public onEditModal_Closed(functionalObjectiveComment: FunctionalObjectiveComment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}