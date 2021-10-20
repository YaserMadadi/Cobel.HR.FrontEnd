import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ExcemptionType } from '../excemptionType';
import { ExcemptionTypeService } from '../excemptionType.service';

import { MilitaryServiceExcemption } from '../../../HR/MilitaryServiceExcemption/militaryServiceExcemption';
import { MilitaryServiceExcemptionMasterUI } from '../../../HR/MilitaryServiceExcemption/master/militaryServiceExcemption.master';
import { MilitaryServiceExcemptionEditUI } from '../../../HR/MilitaryServiceExcemption/edit/militaryServiceExcemption.edit';
import { MilitaryServiceExcemptionDeleteUI } from '../../../HR/MilitaryServiceExcemption/delete/militaryServiceExcemption.delete';



@Component({
  selector: 'excemptionType-militaryServiceExcemption-detail',
  templateUrl: './excemptionType-militaryServiceExcemption.detail.html',
  styleUrls: ['./excemptionType-militaryServiceExcemption.detail.css']
})
export class ExcemptionType_MilitaryServiceExcemption_DetailUI extends DetailView<ExcemptionType> {

  constructor(private excemptionTypeService: ExcemptionTypeService) {
    super(excemptionTypeService);
  }

  public MilitaryServiceExcemptionList : MilitaryServiceExcemption[] = [];
  
  public currentMilitaryServiceExcemption : MilitaryServiceExcemption = new MilitaryServiceExcemption();

  private excemptionType: ExcemptionType = new ExcemptionType();

  @Input()
  public set ExcemptionType(value: ExcemptionType) {
    this.excemptionType = value;
    this.onReload();
  }

  public get ExcemptionType(): ExcemptionType { return this.excemptionType }

  public onReload(){
    if (ExcemptionType.NotConfirm(this.excemptionType))
      return;
    this.excemptionTypeService
      .ServiceCollection
      .CollectionOfMilitaryServiceExcemption(this.excemptionType)
      .then(militaryServiceExcemptionList => {
        this.MilitaryServiceExcemptionList = militaryServiceExcemptionList;
        this.currentMilitaryServiceExcemption = new MilitaryServiceExcemption();
      });
  }

  public onSelect(i: number) {
    this.currentMilitaryServiceExcemption = this.MilitaryServiceExcemptionList[i];
    if (MilitaryServiceExcemption.NotConfirm(this.currentMilitaryServiceExcemption))
      this.currentMilitaryServiceExcemption = new MilitaryServiceExcemption();
  }

  public onDblClicked(masterUI: MilitaryServiceExcemptionMasterUI) {
    if (MilitaryServiceExcemption.NotConfirm(this.currentMilitaryServiceExcemption))
      return;
    masterUI.ShowDialog(this.currentMilitaryServiceExcemption);
  }

  public onAdd(editUI: MilitaryServiceExcemptionEditUI) {
    editUI.ExcemptionType = this.excemptionType;
    editUI.ShowDialog(new MilitaryServiceExcemption());
  }

  public onEdit(editUI: MilitaryServiceExcemptionEditUI) {
    if (MilitaryServiceExcemption.NotConfirm(this.currentMilitaryServiceExcemption))
      return;
    editUI.ShowDialog(this.currentMilitaryServiceExcemption);
  }

  public onDelete(deleteUI: MilitaryServiceExcemptionDeleteUI) {
    if (MilitaryServiceExcemption.NotConfirm(this.currentMilitaryServiceExcemption))
      return;
    deleteUI.ShowDialog(this.currentMilitaryServiceExcemption);
  }

  public onEditModal_Closed(militaryServiceExcemption: MilitaryServiceExcemption) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}