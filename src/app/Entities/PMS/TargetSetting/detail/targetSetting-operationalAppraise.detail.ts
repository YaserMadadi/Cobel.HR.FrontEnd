import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';

import { OperationalAppraise } from '../../OperationalAppraise/operationalAppraise';
import { OperationalAppraiseMasterUI } from '../../OperationalAppraise/master/operationalAppraise.master';
import { OperationalAppraiseEditUI } from '../../OperationalAppraise/edit/operationalAppraise.edit';
import { OperationalAppraiseDeleteUI } from '../../OperationalAppraise/delete/operationalAppraise.delete';



@Component({
  selector: 'targetSetting-operationalAppraise-detail',
  templateUrl: './targetSetting-operationalAppraise.detail.html',
  styleUrls: ['./targetSetting-operationalAppraise.detail.css'],
  providers: [TargetSettingService]
}) 

@Injectable()
export class TargetSetting_OperationalAppraise_DetailUI extends DetailView<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
  }

  public OperationalAppraiseList : OperationalAppraise[] = [];
  
  public currentOperationalAppraise : OperationalAppraise = new OperationalAppraise();

  private targetSetting: TargetSetting = new TargetSetting();

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.targetSetting = value;
    this.onReload();
  }

  public get TargetSetting(): TargetSetting { return this.targetSetting }

  public onReload(){
    if (TargetSetting.NotConfirm(this.targetSetting))
      return;
    this.targetSettingService
      .ServiceCollection
      .CollectionOfOperationalAppraise(this.targetSetting)
      .then(operationalAppraiseList => {
        this.OperationalAppraiseList = operationalAppraiseList;
        this.currentOperationalAppraise = new OperationalAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentOperationalAppraise = this.OperationalAppraiseList[i];
    if (OperationalAppraise.NotConfirm(this.currentOperationalAppraise))
      this.currentOperationalAppraise = new OperationalAppraise();
  }

  public onDblClicked(masterUI: OperationalAppraiseMasterUI) {
    if (OperationalAppraise.NotConfirm(this.currentOperationalAppraise))
      return;
    masterUI.ShowDialog(this.currentOperationalAppraise);
  }

  public onAdd(editUI: OperationalAppraiseEditUI) {
    editUI.TargetSetting = this.targetSetting;
    editUI.ShowDialog(new OperationalAppraise());
  }

  public onEdit(editUI: OperationalAppraiseEditUI) {
    if (OperationalAppraise.NotConfirm(this.currentOperationalAppraise))
      return;
    editUI.ShowDialog(this.currentOperationalAppraise);
  }

  public onDelete(deleteUI: OperationalAppraiseDeleteUI) {
    if (OperationalAppraise.NotConfirm(this.currentOperationalAppraise))
      return;
    deleteUI.ShowDialog(this.currentOperationalAppraise);
  }

  public onEditModal_Closed(operationalAppraise: OperationalAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}