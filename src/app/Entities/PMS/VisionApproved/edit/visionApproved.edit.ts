import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { VisionApproved } from '../visionApproved';
import { VisionApprovedService } from '../visionApproved.service';
import { Vision } from '../../Vision/vision';
import { VisionEditUI } from '../../Vision/edit/vision.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { ApprovementType } from '../../../Base.PMS/ApprovementType/approvementType';
import { ApprovementTypeEditUI } from '../../../Base.PMS/ApprovementType/edit/approvementType.edit';



@Component({
  selector: 'pms-visionApproved-edit',
  templateUrl: './visionApproved.edit.html',
  styleUrls: ['./visionApproved.edit.css']
})
export class VisionApprovedEditUI extends EditModal<VisionApproved> implements IEditModal<VisionApproved>  {
  
  constructor(private visionApprovedService: VisionApprovedService) {
    super(visionApprovedService); 
    this.currentInstance = new VisionApproved();
  }

  //#region Foreign Entities
	
	//#region -- Vision --

  visionComponent : ForeignComponent<Vision> = new ForeignComponent<Vision>(this.visionApprovedService.VisionService);

  @Input()
  public set Vision(value: Vision) {
    this.currentInstance.vision = this.visionComponent.instance = value;
  }  


  //#endregion -- Vision --
	//#region -- ByEmployee --

  byEmployeeComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.visionApprovedService.EmployeeService);

  @Input()
  public set ByEmployee(value: Employee) {
    this.currentInstance.byEmployee = this.byEmployeeComponent.instance = value;
  }  


  //#endregion -- ByEmployee --
	//#region -- ApprovementType --

  approvementTypeComponent : ForeignComponent<ApprovementType> = new ForeignComponent<ApprovementType>(this.visionApprovedService.ApprovementTypeService);

  @Input()
  public set ApprovementType(value: ApprovementType) {
    this.currentInstance.approvementType = this.approvementTypeComponent.instance = value;
  }  


  //#endregion -- ApprovementType --
	//#endregion

  @ViewChild('visionApprovedEditUI')
  private visionApprovedEditUI: NgForm;

  Init(visionApproved: VisionApproved = new VisionApproved()) {
    if (visionApproved.isNew)
      this.visionApprovedEditUI.reset();
    this.InitVisionApproved(visionApproved);
    this.loadLists();
  }

  private loadLists() {
    
    this.approvementTypeComponent.LoadList();
  }
  
  InitVisionApproved(visionApproved: VisionApproved) {
    if (!visionApproved.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.visionComponent.instance = visionApproved.vision;
			this.byEmployeeComponent.instance = visionApproved.byEmployee;
			this.approvementTypeComponent.instance = visionApproved.approvementType;
    } else {
      visionApproved.vision = this.visionComponent.instance;
			visionApproved.byEmployee = this.byEmployeeComponent.instance;
			visionApproved.approvementType = this.approvementTypeComponent.instance;
    }
    this.currentInstance = visionApproved;
  }

  ResetForm() {
    this.Vision = new Vision();
		this.ByEmployee = new Employee();
		this.ApprovementType = new ApprovementType();
  }
}