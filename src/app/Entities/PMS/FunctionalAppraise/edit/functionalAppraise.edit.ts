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
import { AuthService } from '../../../../../xcore/security/auth_service';
import { MessageController, toastType } from '../../../../../xcore/tools/controller.message';



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

  functionalKPIComponent: ForeignComponent<FunctionalKPI> = new ForeignComponent<FunctionalKPI>(this.functionalAppraiseService.FunctionalKPIService);

  @Input()
  public set FunctionalKPI(value: FunctionalKPI) {
    this.currentInstance.functionalKPI = this.functionalKPIComponent.instance = value;
  }


  //#endregion -- FunctionalKPI --
  //#region -- Appraiser --

  appraiserComponent: ForeignComponent<Employee> = new ForeignComponent<Employee>(this.functionalAppraiseService.EmployeeService);

  @Input()
  public set Appraiser(value: Employee) {
    this.currentInstance.appraiser = this.appraiserComponent.instance = value;
  }


  //#endregion -- Appraiser --
  //#region -- AppraiseType --

  appraiseTypeComponent: ForeignComponent<AppraiseType> = new ForeignComponent<AppraiseType>(this.functionalAppraiseService.AppraiseTypeService, false);

  @Input()
  public set AppraiseType(value: AppraiseType) {
    this.currentInstance.appraiseType = this.appraiseTypeComponent.instance = value;
  }


  //#endregion -- AppraiseType --
  //#endregion

  @ViewChild('functionalAppraiseEditUI')
  private functionalAppraiseEditUI: NgForm;

  Init(functionalAppraise: FunctionalAppraise = new FunctionalAppraise()) {
    // if (functionalAppraise.isNew)
    //   this.functionalAppraiseEditUI.reset();
    this.InitFunctionalAppraise(functionalAppraise);
    this.loadLists();
  }

  private loadLists() {
    this.appraiseTypeComponent.LoadList();
    this.currentInstance.appraiseType.id = 2;
  }

  InitFunctionalAppraise(functionalAppraise: FunctionalAppraise){
    this.currentInstance = this.service.CreateInstance();
    if (!functionalAppraise.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.functionalKPIComponent.instance = functionalAppraise.functionalKPI;
      this.appraiserComponent.instance = functionalAppraise.appraiser;
      this.appraiseTypeComponent.instance = functionalAppraise.appraiseType;
    } else {
      functionalAppraise.functionalKPI = this.functionalKPIComponent.instance;
      functionalAppraise.appraiser = AuthService.currentEmployee;
      functionalAppraise.appraiseType = this.appraiseTypeComponent.instance;
    }
    this.currentInstance.date = new Date();
    this.currentInstance = functionalAppraise;
  }

  async onSave(functionalAppraise: FunctionalAppraise, editUI: NgForm, isContinue: boolean = false) {
    super.onSave(functionalAppraise, editUI, isContinue);
    if (functionalAppraise.score < 80)
      MessageController.ShowMessage(`Your entered Scored "${functionalAppraise.score}" seemengly is not Correct! You can Edit your record.`, toastType.warning);
  }

  ResetForm() {
    this.FunctionalKPI = new FunctionalKPI();
    this.Appraiser = AuthService.currentEmployee;

    //this.AppraiseType = new AppraiseType(2);
  }

  SetDefault() {
    
  }
}