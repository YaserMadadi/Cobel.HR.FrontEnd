import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { VisionApproved } from '../../../PMS/VisionApproved/visionApproved';
import { VisionApprovedMasterUI } from '../../../PMS/VisionApproved/master/visionApproved.master';
import { VisionApprovedEditUI } from '../../../PMS/VisionApproved/edit/visionApproved.edit';
import { VisionApprovedDeleteUI } from '../../../PMS/VisionApproved/delete/visionApproved.delete';



@Component({
  selector: 'byEmployee-visionApproved-detail',
  templateUrl: './byEmployee-visionApproved.detail.html',
  styleUrls: ['./byEmployee-visionApproved.detail.css'],
  providers: [EmployeeService]
}) 

@Injectable()
export class ByEmployee_VisionApproved_DetailUI extends DetailView<Employee> {

  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  public VisionApprovedList : VisionApproved[] = [];
  
  public currentVisionApproved : VisionApproved = new VisionApproved();

  private byEmployee: Employee = new Employee();

  @Input()
  public set ByEmployee(value: Employee) {
    this.byEmployee = value;
    this.onReload();
  }

  public get ByEmployee(): Employee { return this.byEmployee }

  public onReload(){
    if (Employee.NotConfirm(this.byEmployee))
      return;
    this.employeeService
      .ServiceCollection
      .CollectionOfVisionApproved_ByEmployee(this.byEmployee)
      .then(visionApprovedList => {
        this.VisionApprovedList = visionApprovedList;
        this.currentVisionApproved = new VisionApproved();
      });
  }

  public onSelect(i: number) {
    this.currentVisionApproved = this.VisionApprovedList[i];
    if (VisionApproved.NotConfirm(this.currentVisionApproved))
      this.currentVisionApproved = new VisionApproved();
  }

  public onDblClicked(masterUI: VisionApprovedMasterUI) {
    if (VisionApproved.NotConfirm(this.currentVisionApproved))
      return;
    masterUI.ShowDialog(this.currentVisionApproved);
  }

  public onAdd(editUI: VisionApprovedEditUI) {
    editUI.ByEmployee = this.byEmployee;
    editUI.ShowDialog(new VisionApproved());
  }

  public onEdit(editUI: VisionApprovedEditUI) {
    if (VisionApproved.NotConfirm(this.currentVisionApproved))
      return;
    editUI.ShowDialog(this.currentVisionApproved);
  }

  public onDelete(deleteUI: VisionApprovedDeleteUI) {
    if (VisionApproved.NotConfirm(this.currentVisionApproved))
      return;
    deleteUI.ShowDialog(this.currentVisionApproved);
  }

  public onEditModal_Closed(visionApproved: VisionApproved) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}