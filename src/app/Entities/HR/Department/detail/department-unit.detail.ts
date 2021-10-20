import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Department } from '../department';
import { DepartmentService } from '../department.service';

import { Unit } from '../../Unit/unit';
import { UnitMasterUI } from '../../Unit/master/unit.master';
import { UnitEditUI } from '../../Unit/edit/unit.edit';
import { UnitDeleteUI } from '../../Unit/delete/unit.delete';



@Component({
  selector: 'department-unit-detail',
  templateUrl: './department-unit.detail.html',
  styleUrls: ['./department-unit.detail.css'],
  
})

@Injectable()
export class Department_Unit_DetailUI extends DetailView<Department> {

  constructor(private departmentService: DepartmentService) {
    super(departmentService);
  }

  public UnitList: Unit[] = [];

  public currentUnit: Unit = new Unit();

  private department: Department = new Department();

  @Input()
  public set Department(value: Department) {
    this.department = value;
    this.onReload();
  }

  public get Department(): Department {
    return this.department;
  }

  public onReload() {
    if (Department.NotConfirm(this.department))
      return;
    this.departmentService
      .ServiceCollection
      .CollectionOfUnit(this.department)
      .then(unitList => {
        this.UnitList = unitList;
        this.currentUnit = new Unit();
      });
  }

  public onSelect(i: number) {
    this.currentUnit = this.UnitList[i];
    if (Unit.NotConfirm(this.currentUnit))
      this.currentUnit = new Unit();
  }

  public onDblClicked(masterUI: UnitMasterUI) {
    if (Unit.NotConfirm(this.currentUnit))
      return;
    masterUI.ShowDialog(this.currentUnit);
  }

  public onAdd(editUI: UnitEditUI) {
    editUI.Department = this.department;
    console.log('department : ', this.department);
    console.log('department : ', editUI.departmentComponent.instance);
    editUI.ShowDialog(new Unit());
  }

  public onEdit(editUI: UnitEditUI) {
    if (Unit.NotConfirm(this.currentUnit))
      return;
    editUI.ShowDialog(this.currentUnit);
  }

  public onDelete(deleteUI: UnitDeleteUI) {
    if (Unit.NotConfirm(this.currentUnit))
      return;
    deleteUI.ShowDialog(this.currentUnit);
  }

  public onEditModal_Closed(unit: Unit) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}