import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { QualitativeAppraise } from '../../../PMS/QualitativeAppraise/qualitativeAppraise';
import { QualitativeAppraiseMasterUI } from '../../../PMS/QualitativeAppraise/master/qualitativeAppraise.master';
import { QualitativeAppraiseEditUI } from '../../../PMS/QualitativeAppraise/edit/qualitativeAppraise.edit';
import { QualitativeAppraiseDeleteUI } from '../../../PMS/QualitativeAppraise/delete/qualitativeAppraise.delete';



@Component({
  selector: 'appraiser-qualitativeAppraise-detail',
  templateUrl: './appraiser-qualitativeAppraise.detail.html',
  styleUrls: ['./appraiser-qualitativeAppraise.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Appraiser_QualitativeAppraise_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public QualitativeAppraiseList : QualitativeAppraise[] = [];
  
  public currentQualitativeAppraise : QualitativeAppraise = new QualitativeAppraise();

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
      .CollectionOfQualitativeAppraise_Appraiser(this.appraiser)
      .then(qualitativeAppraiseList => {
        this.QualitativeAppraiseList = qualitativeAppraiseList;
        this.currentQualitativeAppraise = new QualitativeAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentQualitativeAppraise = this.QualitativeAppraiseList[i];
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      this.currentQualitativeAppraise = new QualitativeAppraise();
  }

  public onDblClicked(masterUI: QualitativeAppraiseMasterUI) {
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      return;
    masterUI.ShowDialog(this.currentQualitativeAppraise);
  }

  public onAdd(editUI: QualitativeAppraiseEditUI) {
    editUI.Appraiser = this.appraiser;
    editUI.ShowDialog(new QualitativeAppraise());
  }

  public onEdit(editUI: QualitativeAppraiseEditUI) {
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      return;
    editUI.ShowDialog(this.currentQualitativeAppraise);
  }

  public onDelete(deleteUI: QualitativeAppraiseDeleteUI) {
    if (QualitativeAppraise.NotConfirm(this.currentQualitativeAppraise))
      return;
    deleteUI.ShowDialog(this.currentQualitativeAppraise);
  }

  public onEditModal_Closed(qualitativeAppraise: QualitativeAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}