﻿import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { QualitativeAppraise } from '../qualitativeAppraise';
import { QualitativeAppraiseService } from '../qualitativeAppraise.service';
import { QualitativeKPI } from '../../QualitativeKPI/qualitativeKPI';
import { QualitativeKPIEditUI } from '../../QualitativeKPI/edit/qualitativeKPI.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { AppraiseType } from '../../../Base.PMS/AppraiseType/appraiseType';
import { AppraiseTypeEditUI } from '../../../Base.PMS/AppraiseType/edit/appraiseType.edit';
import { AppraiseTime } from '../../../Base.PMS/AppraiseTime/appraiseTime';
import { AppraiseTimeEditUI } from '../../../Base.PMS/AppraiseTime/edit/appraiseTime.edit';
import { AuthService } from '../../../../../xcore/security/auth_service';



@Component({
  selector: 'pms-qualitativeAppraise-edit',
  templateUrl: './qualitativeAppraise.edit.html',
  styleUrls: ['./qualitativeAppraise.edit.css']
})
export class QualitativeAppraiseEditUI extends EditModal<QualitativeAppraise> implements IEditModal<QualitativeAppraise>  {
  
  constructor(private qualitativeAppraiseService: QualitativeAppraiseService) {
    super(qualitativeAppraiseService); 
    this.currentInstance = new QualitativeAppraise();
  }

  //#region Foreign Entities
	
	//#region -- QualitativeKPI --

  qualitativeKPIComponent : ForeignComponent<QualitativeKPI> = new ForeignComponent<QualitativeKPI>(this.qualitativeAppraiseService.QualitativeKPIService);

  @Input()
  public set QualitativeKPI(value: QualitativeKPI) {
    this.currentInstance.qualitativeKPI = this.qualitativeKPIComponent.instance = value;
  }  


  //#endregion -- QualitativeKPI --
	//#region -- Appraiser --

  appraiserComponent : ForeignComponent<Employee> = new ForeignComponent<Employee>(this.qualitativeAppraiseService.EmployeeService);

  @Input()
  public set Appraiser(value: Employee) {
    this.currentInstance.appraiser = this.appraiserComponent.instance = value;
  }  


  //#endregion -- Appraiser --
	//#region -- AppraiseType --

  appraiseTypeComponent : ForeignComponent<AppraiseType> = new ForeignComponent<AppraiseType>(this.qualitativeAppraiseService.AppraiseTypeService,false);

  @Input()
  public set AppraiseType(value: AppraiseType) {
    this.currentInstance.appraiseType = this.appraiseTypeComponent.instance = value;
  }  


  //#endregion -- AppraiseType --
	//#region -- AppraiseTime --

  appraiseTimeComponent : ForeignComponent<AppraiseTime> = new ForeignComponent<AppraiseTime>(this.qualitativeAppraiseService.AppraiseTimeService,false);

  @Input()
  public set AppraiseTime(value: AppraiseTime) {
    this.currentInstance.appraiseTime = this.appraiseTimeComponent.instance = value;
  }  


  //#endregion -- AppraiseTime --
	//#endregion

  @ViewChild('qualitativeAppraiseEditUI')
  private qualitativeAppraiseEditUI: NgForm;

  Init(qualitativeAppraise: QualitativeAppraise = new QualitativeAppraise()) {
    if (qualitativeAppraise.isNew)
      this.qualitativeAppraiseEditUI.reset();
    this.InitQualitativeAppraise(qualitativeAppraise);
    this.loadLists();
  }

  private loadLists() {
    
    this.appraiseTypeComponent.LoadList();
		this.appraiseTimeComponent.LoadList();
  }
  
  InitQualitativeAppraise(qualitativeAppraise: QualitativeAppraise) {
    if (!qualitativeAppraise.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.qualitativeKPIComponent.instance = qualitativeAppraise.qualitativeKPI;
			//this.appraiserComponent.instance = AuthService.currentEmployee;
			this.appraiseTypeComponent.instance = qualitativeAppraise.appraiseType;
			this.appraiseTimeComponent.instance = qualitativeAppraise.appraiseTime;
    } else {
      qualitativeAppraise.qualitativeKPI = this.qualitativeKPIComponent.instance;
			//qualitativeAppraise.appraiser = this.appraiserComponent.instance;
			qualitativeAppraise.appraiseType = this.appraiseTypeComponent.instance;
			qualitativeAppraise.appraiseTime = this.appraiseTimeComponent.instance;
    }
    this.currentInstance = qualitativeAppraise;
    this.currentInstance.appraiser = AuthService.currentEmployee;
  }

  ResetForm() {
    this.QualitativeKPI = new QualitativeKPI();
		this.Appraiser = new Employee();
		this.AppraiseType = new AppraiseType();
		this.AppraiseTime = new AppraiseTime();
  }
}