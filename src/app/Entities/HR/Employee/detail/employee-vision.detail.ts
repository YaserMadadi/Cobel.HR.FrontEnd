import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { Vision } from '../../../PMS/Vision/vision';
import { VisionMasterUI } from '../../../PMS/Vision/master/vision.master';
import { VisionEditUI } from '../../../PMS/Vision/edit/vision.edit';
import { VisionDeleteUI } from '../../../PMS/Vision/delete/vision.delete';



@Component({
  selector: 'employee-vision-detail',
  templateUrl: './employee-vision.detail.html',
  styleUrls: ['./employee-vision.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class Employee_Vision_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public VisionList : Vision[] = [];
  
  public currentVision : Vision = new Vision();

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
      .CollectionOfVision(this.employee)
      .then(visionList => {
        this.VisionList = visionList;
        this.currentVision = new Vision();
      });
  }

  public onSelect(i: number) {
    this.currentVision = this.VisionList[i];
    if (Vision.NotConfirm(this.currentVision))
      this.currentVision = new Vision();
  }

  public onDblClicked(masterUI: VisionMasterUI) {
    if (Vision.NotConfirm(this.currentVision))
      return;
    masterUI.ShowDialog(this.currentVision);
  }

  public onAdd(editUI: VisionEditUI) {
    editUI.Employee = this.employee;
    editUI.ShowDialog(new Vision());
  }

  public onEdit(editUI: VisionEditUI) {
    if (Vision.NotConfirm(this.currentVision))
      return;
    editUI.ShowDialog(this.currentVision);
  }

  public onDelete(deleteUI: VisionDeleteUI) {
    if (Vision.NotConfirm(this.currentVision))
      return;
    deleteUI.ShowDialog(this.currentVision);
  }

  public onEditModal_Closed(vision: Vision) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}