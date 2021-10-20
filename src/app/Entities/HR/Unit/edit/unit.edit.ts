import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Unit } from '../unit';
import { UnitService } from '../unit.service';
import { Department } from '../../Department/department';
import { DepartmentEditUI } from '../../Department/edit/department.edit';
import { PositionCategory } from '../../../Base.HR/PositionCategory/positionCategory';
import { PositionCategoryEditUI } from '../../../Base.HR/PositionCategory/edit/positionCategory.edit';



@Component({
  selector: 'hr-unit-edit',
  templateUrl: './unit.edit.html',
  styleUrls: ['./unit.edit.css']
})
export class UnitEditUI extends EditModal<Unit> implements IEditModal<Unit>  {

  constructor(private unitService: UnitService) {
    super(unitService);
    this.currentInstance = new Unit();
  }

  //#region Foreign Entities

  //#region -- Department --

  departmentComponent: ForeignComponent<Department> = new ForeignComponent<Department>(this.unitService.DepartmentService);

  @Input()
  public set Department(value: Department) {
    this.currentInstance.department = this.departmentComponent.instance = value;
  }


  //#endregion -- Department --
  //#region -- PositionCategory --

  positionCategoryComponent: ForeignComponent<PositionCategory> = new ForeignComponent<PositionCategory>(this.unitService.PositionCategoryService, false);

  @Input()
  public set PositionCategory(value: PositionCategory) {
    this.currentInstance.positionCategory = this.positionCategoryComponent.instance = value;
  }


  //#endregion -- PositionCategory --
  //#endregion

  @ViewChild('unitEditUI')
  private unitEditUI: NgForm;

  Init(unit: Unit = new Unit()) {
    if (unit.isNew)
      this.unitEditUI.reset();
    this.loadLists();
    this.InitUnit(unit);
  }

  private loadLists() {

    this.departmentComponent.LoadList();
    this.positionCategoryComponent.LoadList();
  }

  InitUnit(unit: Unit){
    this.currentInstance = this.service.CreateInstance();
    if (!unit.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.departmentComponent.instance = unit.department;
      this.positionCategoryComponent.instance = unit.positionCategory;
    } else {
      unit.department = this.departmentComponent.instance;
      unit.positionCategory = this.positionCategoryComponent.instance;
    }
    this.currentInstance = unit;
  }

  ResetForm() {
    this.Department = new Department();
    this.PositionCategory = new PositionCategory();
  }
}