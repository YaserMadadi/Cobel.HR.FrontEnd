import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { BehavioralAppraise } from '../../../PMS/BehavioralAppraise/behavioralAppraise';
import { BehavioralAppraiseMasterUI } from '../../../PMS/BehavioralAppraise/master/behavioralAppraise.master';
import { BehavioralAppraiseEditUI } from '../../../PMS/BehavioralAppraise/edit/behavioralAppraise.edit';
import { BehavioralAppraiseDeleteUI } from '../../../PMS/BehavioralAppraise/delete/behavioralAppraise.delete';



@Component({
  selector: 'appraiser-behavioralAppraise-detail',
  templateUrl: './appraiser-behavioralAppraise.detail.html',
  styleUrls: ['./appraiser-behavioralAppraise.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Appraiser_BehavioralAppraise_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public BehavioralAppraiseList : BehavioralAppraise[] = [];
  
  public currentBehavioralAppraise : BehavioralAppraise = new BehavioralAppraise();

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
      .CollectionOfBehavioralAppraise_Appraiser(this.appraiser)
      .then(behavioralAppraiseList => {
        this.BehavioralAppraiseList = behavioralAppraiseList;
        this.currentBehavioralAppraise = new BehavioralAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentBehavioralAppraise = this.BehavioralAppraiseList[i];
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      this.currentBehavioralAppraise = new BehavioralAppraise();
  }

  public onDblClicked(masterUI: BehavioralAppraiseMasterUI) {
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      return;
    masterUI.ShowDialog(this.currentBehavioralAppraise);
  }

  public onAdd(editUI: BehavioralAppraiseEditUI) {
    editUI.Appraiser = this.appraiser;
    editUI.ShowDialog(new BehavioralAppraise());
  }

  public onEdit(editUI: BehavioralAppraiseEditUI) {
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      return;
    editUI.ShowDialog(this.currentBehavioralAppraise);
  }

  public onDelete(deleteUI: BehavioralAppraiseDeleteUI) {
    if (BehavioralAppraise.NotConfirm(this.currentBehavioralAppraise))
      return;
    deleteUI.ShowDialog(this.currentBehavioralAppraise);
  }

  public onEditModal_Closed(behavioralAppraise: BehavioralAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}