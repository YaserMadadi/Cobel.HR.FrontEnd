import { NgForm } from '@angular/forms';
import { Component, HostListener, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { BehavioralAppraise } from '../behavioralAppraise';
import { BehavioralAppraiseService } from '../behavioralAppraise.service';
import { BehavioralKPI } from '../../BehavioralKPI/behavioralKPI';
import { BehavioralKPIEditUI } from '../../BehavioralKPI/edit/behavioralKPI.edit';
import { AppraiseType } from '../../../Base.PMS/AppraiseType/appraiseType';
import { AppraiseTypeEditUI } from '../../../Base.PMS/AppraiseType/edit/appraiseType.edit';
import { AppraiseTime } from '../../../Base.PMS/AppraiseTime/appraiseTime';
import { AppraiseTimeEditUI } from '../../../Base.PMS/AppraiseTime/edit/appraiseTime.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { AuthService } from '../../../../../xcore/security/auth_service';
import { $ } from 'protractor';



@Component({
  selector: 'pms-behavioralAppraise-edit',
  templateUrl: './behavioralAppraise.edit.html',
  styleUrls: ['./behavioralAppraise.edit.css']
})
export class BehavioralAppraiseEditUI extends EditModal<BehavioralAppraise> implements IEditModal<BehavioralAppraise>  {

  constructor(private behavioralAppraiseService: BehavioralAppraiseService) {
    super(behavioralAppraiseService);
    this.currentInstance = new BehavioralAppraise();
  }



  //#region Foreign Entities

  //#region -- BehavioralKPI --

  behavioralKPIComponent: ForeignComponent<BehavioralKPI> = new ForeignComponent<BehavioralKPI>(this.behavioralAppraiseService.BehavioralKPIService);

  @Input()
  public set BehavioralKPI(value: BehavioralKPI) {
    this.currentInstance.behavioralKPI = this.behavioralKPIComponent.instance = value;
  }


  //#endregion -- BehavioralKPI --
  //#region -- AppraiseType --

  appraiseTypeComponent: ForeignComponent<AppraiseType> = new ForeignComponent<AppraiseType>(this.behavioralAppraiseService.AppraiseTypeService, false);

  @Input()
  public set AppraiseType(value: AppraiseType) {
    this.currentInstance.appraiseType = this.appraiseTypeComponent.instance = value;
  }


  //#endregion -- AppraiseType --
  //#region -- AppraiseTime --

  appraiseTimeComponent: ForeignComponent<AppraiseTime> = new ForeignComponent<AppraiseTime>(this.behavioralAppraiseService.AppraiseTimeService, false);

  @Input()
  public set AppraiseTime(value: AppraiseTime) {
    this.currentInstance.appraiseTime = this.appraiseTimeComponent.instance = value;
  }


  //#endregion -- AppraiseTime --
  //#region -- Appraiser --

  appraiserComponent: ForeignComponent<Employee> = new ForeignComponent<Employee>(this.behavioralAppraiseService.EmployeeService);

  @Input()
  public set Appraiser(value: Employee) {
    this.currentInstance.appraiser = this.appraiserComponent.instance = value;
  }


  //#endregion -- Appraiser --
  //#endregion

  @ViewChild('behavioralAppraiseEditUI')
  private behavioralAppraiseEditUI: NgForm;

  Init(behavioralAppraise: BehavioralAppraise = new BehavioralAppraise()) {
    // if (behavioralAppraise.isNew)
    //   this.behavioralAppraiseEditUI.reset();
    this.InitBehavioralAppraise(behavioralAppraise);
    this.loadLists();
  }

  private loadLists() {

    this.appraiseTypeComponent.LoadList();
    this.appraiseTimeComponent.LoadList();
    this.currentInstance.appraiseTime.id = 1;
    this.currentInstance.appraiseType.id = 2;
  }

  InitBehavioralAppraise(behavioralAppraise: BehavioralAppraise) {
    if (!behavioralAppraise.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.behavioralKPIComponent.instance = behavioralAppraise.behavioralKPI;
      this.appraiseTypeComponent.instance = behavioralAppraise.appraiseType;
      this.appraiseTimeComponent.instance = behavioralAppraise.appraiseTime;
      //this.appraiserComponent.instance = behavioralAppraise.appraiser;
    } else {
      behavioralAppraise.behavioralKPI = this.behavioralKPIComponent.instance;
      behavioralAppraise.appraiseType = this.appraiseTypeComponent.instance;
      behavioralAppraise.appraiseTime = this.appraiseTimeComponent.instance;
      behavioralAppraise.appraiser = AuthService.currentEmployee;
    }
    this.currentInstance = behavioralAppraise;
    this.currentInstance.date = new Date();
  }

  ResetForm() {
    //this.BehavioralKPI = new BehavioralKPI();
    this.AppraiseType = new AppraiseType();
    //	this.AppraiseTime = new AppraiseTime(1);
    this.Appraiser = AuthService.currentEmployee;
  }

  SetDefault() {
    if (AppraiseTime.NotConfirm(this.currentInstance.appraiseTime))
      return;
    this.currentInstance.appraiseTime.id = 1;
  }
}