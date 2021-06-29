import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { Training } from '../../../IDEA/Training/training';
import { TrainingMasterUI } from '../../../IDEA/Training/master/training.master';
import { TrainingEditUI } from '../../../IDEA/Training/edit/training.edit';
import { TrainingDeleteUI } from '../../../IDEA/Training/delete/training.delete';



@Component({
  selector: 'employee-training-detail',
  templateUrl: './employee-training.detail.html',
  styleUrls: ['./employee-training.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Employee_Training_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public TrainingList : Training[] = [];
  
  public currentTraining : Training = new Training();

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
      .CollectionOfTraining(this.employee)
      .then(trainingList => {
        this.TrainingList = trainingList;
        this.currentTraining = new Training();
      });
  }

  public onSelect(i: number) {
    this.currentTraining = this.TrainingList[i];
    if (Training.NotConfirm(this.currentTraining))
      this.currentTraining = new Training();
  }

  public onDblClicked(masterUI: TrainingMasterUI) {
    if (Training.NotConfirm(this.currentTraining))
      return;
    masterUI.ShowDialog(this.currentTraining);
  }

  public onAdd(editUI: TrainingEditUI) {
    editUI.Employee = this.employee;
    editUI.ShowDialog(new Training());
  }

  public onEdit(editUI: TrainingEditUI) {
    if (Training.NotConfirm(this.currentTraining))
      return;
    editUI.ShowDialog(this.currentTraining);
  }

  public onDelete(deleteUI: TrainingDeleteUI) {
    if (Training.NotConfirm(this.currentTraining))
      return;
    deleteUI.ShowDialog(this.currentTraining);
  }

  public onEditModal_Closed(training: Training) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}