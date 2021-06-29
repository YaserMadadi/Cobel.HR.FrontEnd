import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';

import { NonOperationalAppraise } from '../../NonOperationalAppraise/nonOperationalAppraise';
import { NonOperationalAppraiseMasterUI } from '../../NonOperationalAppraise/master/nonOperationalAppraise.master';
import { NonOperationalAppraiseEditUI } from '../../NonOperationalAppraise/edit/nonOperationalAppraise.edit';
import { NonOperationalAppraiseDeleteUI } from '../../NonOperationalAppraise/delete/nonOperationalAppraise.delete';



@Component({
  selector: 'targetSetting-nonOperationalAppraise-detail',
  templateUrl: './targetSetting-nonOperationalAppraise.detail.html',
  styleUrls: ['./targetSetting-nonOperationalAppraise.detail.css'],
  providers: [TargetSettingService]
}) 

@Injectable()
export class TargetSetting_NonOperationalAppraise_DetailUI extends DetailView<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
  }

  public NonOperationalAppraiseList : NonOperationalAppraise[] = [];
  
  public currentNonOperationalAppraise : NonOperationalAppraise = new NonOperationalAppraise();

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
      .CollectionOfNonOperationalAppraise(this.targetSetting)
      .then(nonOperationalAppraiseList => {
        this.NonOperationalAppraiseList = nonOperationalAppraiseList;
        this.currentNonOperationalAppraise = new NonOperationalAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentNonOperationalAppraise = this.NonOperationalAppraiseList[i];
    if (NonOperationalAppraise.NotConfirm(this.currentNonOperationalAppraise))
      this.currentNonOperationalAppraise = new NonOperationalAppraise();
  }

  public onDblClicked(masterUI: NonOperationalAppraiseMasterUI) {
    if (NonOperationalAppraise.NotConfirm(this.currentNonOperationalAppraise))
      return;
    masterUI.ShowDialog(this.currentNonOperationalAppraise);
  }

  public onAdd(editUI: NonOperationalAppraiseEditUI) {
    editUI.TargetSetting = this.targetSetting;
    editUI.ShowDialog(new NonOperationalAppraise());
  }

  public onEdit(editUI: NonOperationalAppraiseEditUI) {
    if (NonOperationalAppraise.NotConfirm(this.currentNonOperationalAppraise))
      return;
    editUI.ShowDialog(this.currentNonOperationalAppraise);
  }

  public onDelete(deleteUI: NonOperationalAppraiseDeleteUI) {
    if (NonOperationalAppraise.NotConfirm(this.currentNonOperationalAppraise))
      return;
    deleteUI.ShowDialog(this.currentNonOperationalAppraise);
  }

  public onEditModal_Closed(nonOperationalAppraise: NonOperationalAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}