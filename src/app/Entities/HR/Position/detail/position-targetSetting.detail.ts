import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Position } from '../position';
import { PositionService } from '../position.service';

import { TargetSetting } from '../../../PMS/TargetSetting/targetSetting';
import { TargetSettingMasterUI } from '../../../PMS/TargetSetting/master/targetSetting.master';
import { TargetSettingEditUI } from '../../../PMS/TargetSetting/edit/targetSetting.edit';
import { TargetSettingDeleteUI } from '../../../PMS/TargetSetting/delete/targetSetting.delete';



@Component({
  selector: 'position-targetSetting-detail',
  templateUrl: './position-targetSetting.detail.html',
  styleUrls: ['./position-targetSetting.detail.css']
})
export class Position_TargetSetting_DetailUI extends DetailView<Position> {

  constructor(private positionService: PositionService) {
    super(positionService);
  }

  public TargetSettingList : TargetSetting[] = [];
  
  public currentTargetSetting : TargetSetting = new TargetSetting();

  private position: Position = new Position();

  @Input()
  public set Position(value: Position) {
    this.position = value;
    this.onReload();
  }

  public get Position(): Position { return this.position }

  public onReload(){
    if (Position.NotConfirm(this.position))
      return;
    this.positionService
      .ServiceCollection
      .CollectionOfTargetSetting(this.position)
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
    editUI.Position = this.position;
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