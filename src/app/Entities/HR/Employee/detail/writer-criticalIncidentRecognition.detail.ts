import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { CriticalIncidentRecognition } from '../../../PMS/CriticalIncidentRecognition/criticalIncidentRecognition';
import { CriticalIncidentRecognitionMasterUI } from '../../../PMS/CriticalIncidentRecognition/master/criticalIncidentRecognition.master';
import { CriticalIncidentRecognitionEditUI } from '../../../PMS/CriticalIncidentRecognition/edit/criticalIncidentRecognition.edit';
import { CriticalIncidentRecognitionDeleteUI } from '../../../PMS/CriticalIncidentRecognition/delete/criticalIncidentRecognition.delete';



@Component({
  selector: 'writer-criticalIncidentRecognition-detail',
  templateUrl: './writer-criticalIncidentRecognition.detail.html',
  styleUrls: ['./writer-criticalIncidentRecognition.detail.css']
})
export class Writer_CriticalIncidentRecognition_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public CriticalIncidentRecognitionList : CriticalIncidentRecognition[] = [];
  
  public currentCriticalIncidentRecognition : CriticalIncidentRecognition = new CriticalIncidentRecognition();

  private writer: Employee = new Employee();

  @Input()
  public set Writer(value: Employee) {
    this.writer = value;
    this.onReload();
  }

  public get Writer(): Employee { return this.writer }

  public onReload(){
    if (Employee.NotConfirm(this.writer))
      return;
    this.employeeService
      .ServiceCollection
      .CollectionOfCriticalIncidentRecognition_Writer(this.writer)
      .then(criticalIncidentRecognitionList => {
        this.CriticalIncidentRecognitionList = criticalIncidentRecognitionList;
        this.currentCriticalIncidentRecognition = new CriticalIncidentRecognition();
      });
  }

  public onSelect(i: number) {
    this.currentCriticalIncidentRecognition = this.CriticalIncidentRecognitionList[i];
    if (CriticalIncidentRecognition.NotConfirm(this.currentCriticalIncidentRecognition))
      this.currentCriticalIncidentRecognition = new CriticalIncidentRecognition();
  }

  public onDblClicked(masterUI: CriticalIncidentRecognitionMasterUI) {
    if (CriticalIncidentRecognition.NotConfirm(this.currentCriticalIncidentRecognition))
      return;
    masterUI.ShowDialog(this.currentCriticalIncidentRecognition);
  }

  public onAdd(editUI: CriticalIncidentRecognitionEditUI) {
    editUI.Writer = this.writer;
    editUI.ShowDialog(new CriticalIncidentRecognition());
  }

  public onEdit(editUI: CriticalIncidentRecognitionEditUI) {
    if (CriticalIncidentRecognition.NotConfirm(this.currentCriticalIncidentRecognition))
      return;
    editUI.ShowDialog(this.currentCriticalIncidentRecognition);
  }

  public onDelete(deleteUI: CriticalIncidentRecognitionDeleteUI) {
    if (CriticalIncidentRecognition.NotConfirm(this.currentCriticalIncidentRecognition))
      return;
    deleteUI.ShowDialog(this.currentCriticalIncidentRecognition);
  }

  public onEditModal_Closed(criticalIncidentRecognition: CriticalIncidentRecognition) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}