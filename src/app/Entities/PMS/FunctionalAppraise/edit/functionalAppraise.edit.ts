import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { FunctionalAppraise } from '../functionalAppraise';
import { FunctionalAppraiseService } from '../functionalAppraise.service';
import { FunctionalKPI } from '../../FunctionalKPI/functionalKPI';
import { FunctionalKPIEditUI } from '../../FunctionalKPI/edit/functionalKPI.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { AppraiseType } from '../../../Base.PMS/AppraiseType/appraiseType';
import { AppraiseTypeEditUI } from '../../../Base.PMS/AppraiseType/edit/appraiseType.edit';
import { AppraiseTime } from '../../../Base.PMS/AppraiseTime/appraiseTime';
import { AppraiseTimeEditUI } from '../../../Base.PMS/AppraiseTime/edit/appraiseTime.edit';
import { AuthService } from '../../../../../xcore/security/auth_service';



@Component({
  selector: 'pms-functionalAppraise-edit',
  templateUrl: './functionalAppraise.edit.html',
  styleUrls: ['./functionalAppraise.edit.css']
})
export class FunctionalAppraiseEditUI extends EditModal<FunctionalAppraise> implements IEditModal<FunctionalAppraise>  {
  
  constructor(private functionalAppraiseService: FunctionalAppraiseService) {
    super(functionalAppraiseService); 
    this.currentInstance = new FunctionalAppraise();
  }

  //#region Foreign Entities
	
	//#region -- FunctionalKPI --

  functionalKPIComponent : ForeignComponent<FunctionalKPI> = new ForeignComponent<FunctionalKPI>(this.functionalAppraiseService.FunctionalKPIService);

  @Input()
  public set FunctionalKPI(value: FunctionalKPI) {
    this.currentInstance.functionalKPI = this.functionalKPIComponent.instance = value;
  }  


  //#endregion -- FunctionalKPI --
	//#region -- Appraiser --

  appraiserComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.functionalAppraiseService.EmployeeService);

  @Input()
  public set Appraiser(value: Employee) {
    this.currentInstance.appraiser = this.appraiserComponent.instance = value;
  }  


  //#endregion -- Appraiser --
	//#region -- AppraiseType --

  appraiseTypeComponent : ForeignComponent<AppraiseType> = new ForeignComponent<AppraiseType>(this.functionalAppraiseService.AppraiseTypeService,false);

  @Input()
  public set AppraiseType(value: AppraiseType) {
    this.currentInstance.appraiseType = this.appraiseTypeComponent.instance = value;
  }  


  //#endregion -- AppraiseType --
	//#region -- AppraiseTime --

  appraiseTimeComponent : ForeignComponent<AppraiseTime> = new ForeignComponent<AppraiseTime>(this.functionalAppraiseService.AppraiseTimeService,false);

  @Input()
  public set AppraiseTime(value: AppraiseTime) {
    this.currentInstance.appraiseTime = this.appraiseTimeComponent.instance = value;
  }  


  //#endregion -- AppraiseTime --
	//#endregion

  @ViewChild('functionalAppraiseEditUI')
  private functionalAppraiseEditUI: NgForm;

  Init(functionalAppraise: FunctionalAppraise = new FunctionalAppraise()) {
    if (functionalAppraise.isNew)
      this.functionalAppraiseEditUI.reset();
    this.InitFunctionalAppraise(functionalAppraise);
    this.loadLists();
  }

  private loadLists() {
    this.appraiseTypeComponent.LoadList();
		this.appraiseTimeComponent.LoadList();
    this.currentInstance.appraiseTime.id = 1;
    this.currentInstance.appraiseType.id = 2;
  }
  
  InitFunctionalAppraise(functionalAppraise: FunctionalAppraise) {
    if (!functionalAppraise.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.functionalKPIComponent.instance = functionalAppraise.functionalKPI;
			this.appraiserComponent.instance = functionalAppraise.appraiser;
			this.appraiseTypeComponent.instance = functionalAppraise.appraiseType;
			this.appraiseTimeComponent.instance = functionalAppraise.appraiseTime;
    } else {
      functionalAppraise.functionalKPI = this.functionalKPIComponent.instance;
			functionalAppraise.appraiser = AuthService.currentEmployee;
			functionalAppraise.appraiseType = this.appraiseTypeComponent.instance;
			functionalAppraise.appraiseTime = this.appraiseTimeComponent.instance;
    }
    this.currentInstance.date = new Date();
    this.currentInstance = functionalAppraise;
  }

  ResetForm() {
    this.FunctionalKPI = new FunctionalKPI();
		this.Appraiser = new Employee();
		//this.AppraiseType = new AppraiseType(2);
		//this.AppraiseTime = new AppraiseTime(1);
  }
}