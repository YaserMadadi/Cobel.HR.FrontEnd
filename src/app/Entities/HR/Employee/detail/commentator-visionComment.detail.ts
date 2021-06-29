import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { VisionComment } from '../../../PMS/VisionComment/visionComment';
import { VisionCommentMasterUI } from '../../../PMS/VisionComment/master/visionComment.master';
import { VisionCommentEditUI } from '../../../PMS/VisionComment/edit/visionComment.edit';
import { VisionCommentDeleteUI } from '../../../PMS/VisionComment/delete/visionComment.delete';



@Component({
  selector: 'commentator-visionComment-detail',
  templateUrl: './commentator-visionComment.detail.html',
  styleUrls: ['./commentator-visionComment.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Commentator_VisionComment_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public VisionCommentList : VisionComment[] = [];
  
  public currentVisionComment : VisionComment = new VisionComment();

  private commentator: Employee = new Employee();

  @Input()
  public set Commentator(value: Employee) {
    this.commentator = value;
    this.onReload();
  }

  public get Commentator(): Employee { return this.commentator }

  public onReload(){
    if (Employee.NotConfirm(this.commentator))
      return;
    this.employeeService
      .ServiceCollection
      .CollectionOfVisionComment_Commentator(this.commentator)
      .then(visionCommentList => {
        this.VisionCommentList = visionCommentList;
        this.currentVisionComment = new VisionComment();
      });
  }

  public onSelect(i: number) {
    this.currentVisionComment = this.VisionCommentList[i];
    if (VisionComment.NotConfirm(this.currentVisionComment))
      this.currentVisionComment = new VisionComment();
  }

  public onDblClicked(masterUI: VisionCommentMasterUI) {
    if (VisionComment.NotConfirm(this.currentVisionComment))
      return;
    masterUI.ShowDialog(this.currentVisionComment);
  }

  public onAdd(editUI: VisionCommentEditUI) {
    editUI.Commentator = this.commentator;
    editUI.ShowDialog(new VisionComment());
  }

  public onEdit(editUI: VisionCommentEditUI) {
    if (VisionComment.NotConfirm(this.currentVisionComment))
      return;
    editUI.ShowDialog(this.currentVisionComment);
  }

  public onDelete(deleteUI: VisionCommentDeleteUI) {
    if (VisionComment.NotConfirm(this.currentVisionComment))
      return;
    deleteUI.ShowDialog(this.currentVisionComment);
  }

  public onEditModal_Closed(visionComment: VisionComment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}