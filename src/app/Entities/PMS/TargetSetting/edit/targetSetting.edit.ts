import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { Position } from '../../../HR/Position/position';
import { PositionEditUI } from '../../../HR/Position/edit/position.edit';
import { Year } from '../../../Base/Year/year';
import { YearEditUI } from '../../../Base/Year/edit/year.edit';
import { TargetSettingType } from '../../../Base.PMS/TargetSettingType/targetSettingType';



@Component({
  selector: 'pms-targetSetting-edit',
  templateUrl: './targetSetting.edit.html',
  styleUrls: ['./targetSetting.edit.css']
})
export class TargetSettingEditUI extends EditModal<TargetSetting> implements IEditModal<TargetSetting>  {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
    this.currentInstance = new TargetSetting();

  }

  //#region Foreign Entities

  //#region -- Employee --

  employeeComponent: ForeignComponent<Employee> = new ForeignComponent<Employee>(this.targetSettingService.EmployeeService);

  @Input()
  public set Employee(value: Employee) {
    this.currentInstance.employee = this.employeeComponent.instance = value;
  }

  //#endregion -- Employee --
  //#region -- Position --

  positionComponent: ForeignComponent<Position> = new ForeignComponent<Position>(this.targetSettingService.PositionService);

  @Input()
  public set Position(value: Position) {
    this.currentInstance.position = this.positionComponent.instance = value;
  }


  //#endregion -- Position --

  //#region -- Position --

  targetSettingTypeComponent: ForeignComponent<TargetSettingType> = new ForeignComponent<TargetSettingType>(this.targetSettingService.TargetSettingTypeService, false);

  @Input()
  public set TargetSettingType(value: TargetSettingType) {
    this.currentInstance.targetSettingType = this.targetSettingTypeComponent.instance = value;
  }


  //#endregion -- Position --

  //#region -- Year --

  yearComponent: ForeignComponent<Year> = new ForeignComponent<Year>(this.targetSettingService.YearService);

  @Input()
  public set Year(value: Year) {
    this.currentInstance.year = this.yearComponent.instance = value;
  }


  //#endregion -- Year --
  //#endregion

  @ViewChild('targetSettingEditUI')
  private targetSettingEditUI: NgForm;

  Init(targetSetting: TargetSetting = new TargetSetting()) {
    if (targetSetting.isNew)
      this.targetSettingEditUI.reset();
    this.InitTargetSetting(targetSetting);
    this.loadLists();
  }

  private loadLists() {
    this.targetSettingTypeComponent.LoadList();
    this.yearComponent.LoadList();

  }

  InitTargetSetting(targetSetting: TargetSetting) {
    this.currentInstance = this.service.CreateInstance();
    if (!targetSetting.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.employeeComponent.instance = targetSetting.employee;
      this.positionComponent.instance = targetSetting.position;
      this.yearComponent.instance = targetSetting.year;
    } else {
      targetSetting.employee = this.employeeComponent.instance;
      targetSetting.position = this.positionComponent.instance;
      targetSetting.year = this.yearComponent.instance;
    }
    this.currentInstance = targetSetting;
  }

  ResetForm() {
    this.Employee = new Employee();
    this.Position = new Position();
    this.Year = new Year();
  }
}