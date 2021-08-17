import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { PositionCategory } from '../positionCategory';
import { PositionCategoryService } from '../positionCategory.service';

import { Unit } from '../../../HR/Unit/unit';
import { UnitMasterUI } from '../../../HR/Unit/master/unit.master';
import { UnitEditUI } from '../../../HR/Unit/edit/unit.edit';
import { UnitDeleteUI } from '../../../HR/Unit/delete/unit.delete';



@Component({
  selector: 'positionCategory-unit-detail',
  templateUrl: './positionCategory-unit.detail.html',
  styleUrls: ['./positionCategory-unit.detail.css'],
  providers: [PositionCategoryService]
}) 

@Injectable()
export class PositionCategory_Unit_DetailUI extends DetailView<PositionCategory> {

  constructor(private positionCategoryService: PositionCategoryService) {
    super(positionCategoryService);
  }

  public UnitList : Unit[] = [];
  
  public currentUnit : Unit = new Unit();

  private positionCategory: PositionCategory = new PositionCategory();

  @Input()
  public set PositionCategory(value: PositionCategory) {
    this.positionCategory = value;
    this.onReload();
  }

  public get PositionCategory(): PositionCategory { return this.positionCategory }

  public onReload(){
    if (PositionCategory.NotConfirm(this.positionCategory))
      return;
    this.positionCategoryService
      .ServiceCollection
      .CollectionOfUnit(this.positionCategory)
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
    editUI.PositionCategory = this.positionCategory;
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

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
