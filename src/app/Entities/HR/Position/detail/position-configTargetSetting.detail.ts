import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Position } from '../position';
import { PositionService } from '../position.service';

import { ConfigTargetSetting } from '../../../PMS/ConfigTargetSetting/configTargetSetting';
import { ConfigTargetSettingMasterUI } from '../../../PMS/ConfigTargetSetting/master/configTargetSetting.master';
import { ConfigTargetSettingEditUI } from '../../../PMS/ConfigTargetSetting/edit/configTargetSetting.edit';
import { ConfigTargetSettingDeleteUI } from '../../../PMS/ConfigTargetSetting/delete/configTargetSetting.delete';



@Component({
  selector: 'position-configTargetSetting-detail',
  templateUrl: './position-configTargetSetting.detail.html',
  styleUrls: ['./position-configTargetSetting.detail.css'],
  providers: [PositionService]
}) 

@Injectable()
export class Position_ConfigTargetSetting_DetailUI extends DetailView<Position> {

  constructor(private positionService: PositionService) {
    super(positionService);
  }

  public ConfigTargetSettingList : ConfigTargetSetting[] = [];
  
  public currentConfigTargetSetting : ConfigTargetSetting = new ConfigTargetSetting();

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
      .CollectionOfConfigTargetSetting(this.position)
      .then(configTargetSettingList => {
        this.ConfigTargetSettingList = configTargetSettingList;
        this.currentConfigTargetSetting = new ConfigTargetSetting();
      });
  }

  public onSelect(i: number) {
    this.currentConfigTargetSetting = this.ConfigTargetSettingList[i];
    if (ConfigTargetSetting.NotConfirm(this.currentConfigTargetSetting))
      this.currentConfigTargetSetting = new ConfigTargetSetting();
  }

  public onDblClicked(masterUI: ConfigTargetSettingMasterUI) {
    if (ConfigTargetSetting.NotConfirm(this.currentConfigTargetSetting))
      return;
    masterUI.ShowDialog(this.currentConfigTargetSetting);
  }

  public onAdd(editUI: ConfigTargetSettingEditUI) {
    editUI.Position = this.position;
    editUI.ShowDialog(new ConfigTargetSetting());
  }

  public onEdit(editUI: ConfigTargetSettingEditUI) {
    if (ConfigTargetSetting.NotConfirm(this.currentConfigTargetSetting))
      return;
    editUI.ShowDialog(this.currentConfigTargetSetting);
  }

  public onDelete(deleteUI: ConfigTargetSettingDeleteUI) {
    if (ConfigTargetSetting.NotConfirm(this.currentConfigTargetSetting))
      return;
    deleteUI.ShowDialog(this.currentConfigTargetSetting);
  }

  public onEditModal_Closed(configTargetSetting: ConfigTargetSetting) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}