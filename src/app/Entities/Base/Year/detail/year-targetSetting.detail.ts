import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Year } from '../year';
import { YearService } from '../year.service';

import { TargetSetting } from '../../../PMS/TargetSetting/targetSetting';
import { TargetSettingMasterUI } from '../../../PMS/TargetSetting/master/targetSetting.master';
import { TargetSettingEditUI } from '../../../PMS/TargetSetting/edit/targetSetting.edit';
import { TargetSettingDeleteUI } from '../../../PMS/TargetSetting/delete/targetSetting.delete';



@Component({
  selector: 'year-targetSetting-detail',
  templateUrl: './year-targetSetting.detail.html',
  styleUrls: ['./year-targetSetting.detail.css'],
  providers: [YearService]
}) 

@Injectable()
export class Year_TargetSetting_DetailUI extends DetailView<Year> {

  constructor(private yearService: YearService) {
    super(yearService);
  }

  public TargetSettingList : TargetSetting[] = [];
  
  public currentTargetSetting : TargetSetting = new TargetSetting();

  private year: Year = new Year();

  @Input()
  public set Year(value: Year) {
    this.year = value;
    this.onReload();
  }

  public get Year(): Year { return this.year }

  public onReload(){
    if (Year.NotConfirm(this.year))
      return;
    this.yearService
      .ServiceCollection
      .CollectionOfTargetSetting(this.year)
      .then(targetSettingList => {
        this.TargetSettingList = targetSettingList;
        this.currentTargetSetting = new TargetSetting();
      });
  }

  public onSelect(i: number) {
    this.currentTargetSetting = this.TargetSettingList[i];
    if (TargetSetting.NotConfirm(this.currentTargetSetting))
      this.currentTargetSetting = new TargetSetting();
  }

  public onDblClicked(masterUI: TargetSettingMasterUI) {
    if (TargetSetting.NotConfirm(this.currentTargetSetting))
      return;
    masterUI.ShowDialog(this.currentTargetSetting);
  }

  public onAdd(editUI: TargetSettingEditUI) {
    editUI.Year = this.year;
    editUI.ShowDialog(new TargetSetting());
  }

  public onEdit(editUI: TargetSettingEditUI) {
    if (TargetSetting.NotConfirm(this.currentTargetSetting))
      return;
    editUI.ShowDialog(this.currentTargetSetting);
  }

  public onDelete(deleteUI: TargetSettingDeleteUI) {
    if (TargetSetting.NotConfirm(this.currentTargetSetting))
      return;
    deleteUI.ShowDialog(this.currentTargetSetting);
  }

  public onEditModal_Closed(targetSetting: TargetSetting) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}