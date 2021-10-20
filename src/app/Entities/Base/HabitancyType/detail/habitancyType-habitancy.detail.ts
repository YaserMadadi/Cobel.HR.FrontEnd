import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { HabitancyType } from '../habitancyType';
import { HabitancyTypeService } from '../habitancyType.service';

import { Habitancy } from '../../../HR/Habitancy/habitancy';
import { HabitancyMasterUI } from '../../../HR/Habitancy/master/habitancy.master';
import { HabitancyEditUI } from '../../../HR/Habitancy/edit/habitancy.edit';
import { HabitancyDeleteUI } from '../../../HR/Habitancy/delete/habitancy.delete';



@Component({
  selector: 'habitancyType-habitancy-detail',
  templateUrl: './habitancyType-habitancy.detail.html',
  styleUrls: ['./habitancyType-habitancy.detail.css']
})
export class HabitancyType_Habitancy_DetailUI extends DetailView<HabitancyType> {

  constructor(private habitancyTypeService: HabitancyTypeService) {
    super(habitancyTypeService);
  }

  public HabitancyList : Habitancy[] = [];
  
  public currentHabitancy : Habitancy = new Habitancy();

  private habitancyType: HabitancyType = new HabitancyType();

  @Input()
  public set HabitancyType(value: HabitancyType) {
    this.habitancyType = value;
    this.onReload();
  }

  public get HabitancyType(): HabitancyType { return this.habitancyType }

  public onReload(){
    if (HabitancyType.NotConfirm(this.habitancyType))
      return;
    this.habitancyTypeService
      .ServiceCollection
      .CollectionOfHabitancy(this.habitancyType)
      .then(habitancyList => {
        this.HabitancyList = habitancyList;
        this.currentHabitancy = new Habitancy();
      });
  }

  public onSelect(i: number) {
    this.currentHabitancy = this.HabitancyList[i];
    if (Habitancy.NotConfirm(this.currentHabitancy))
      this.currentHabitancy = new Habitancy();
  }

  public onDblClicked(masterUI: HabitancyMasterUI) {
    if (Habitancy.NotConfirm(this.currentHabitancy))
      return;
    masterUI.ShowDialog(this.currentHabitancy);
  }

  public onAdd(editUI: HabitancyEditUI) {
    editUI.HabitancyType = this.habitancyType;
    editUI.ShowDialog(new Habitancy());
  }

  public onEdit(editUI: HabitancyEditUI) {
    if (Habitancy.NotConfirm(this.currentHabitancy))
      return;
    editUI.ShowDialog(this.currentHabitancy);
  }

  public onDelete(deleteUI: HabitancyDeleteUI) {
    if (Habitancy.NotConfirm(this.currentHabitancy))
      return;
    deleteUI.ShowDialog(this.currentHabitancy);
  }

  public onEditModal_Closed(habitancy: Habitancy) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}