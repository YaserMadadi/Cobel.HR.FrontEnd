import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';

import { QuantitativeAppraise } from '../../QuantitativeAppraise/quantitativeAppraise';
import { QuantitativeAppraiseMasterUI } from '../../QuantitativeAppraise/master/quantitativeAppraise.master';
import { QuantitativeAppraiseEditUI } from '../../QuantitativeAppraise/edit/quantitativeAppraise.edit';
import { QuantitativeAppraiseDeleteUI } from '../../QuantitativeAppraise/delete/quantitativeAppraise.delete';



@Component({
  selector: 'targetSetting-quantitativeAppraise-detail',
  templateUrl: './targetSetting-quantitativeAppraise.detail.html',
  styleUrls: ['./targetSetting-quantitativeAppraise.detail.css'],
  providers: [TargetSettingService]
}) 

@Injectable()
export class TargetSetting_QuantitativeAppraise_DetailUI extends DetailView<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
  }

  public QuantitativeAppraiseList : QuantitativeAppraise[] = [];
  
  public currentQuantitativeAppraise : QuantitativeAppraise = new QuantitativeAppraise();

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
      .CollectionOfQuantitativeAppraise(this.targetSetting)
      .then(quantitativeAppraiseList => {
        this.QuantitativeAppraiseList = quantitativeAppraiseList;
        this.currentQuantitativeAppraise = new QuantitativeAppraise();
      });
  }

  public onSelect(i: number) {
    this.currentQuantitativeAppraise = this.QuantitativeAppraiseList[i];
    if (QuantitativeAppraise.NotConfirm(this.currentQuantitativeAppraise))
      this.currentQuantitativeAppraise = new QuantitativeAppraise();
  }

  public onDblClicked(masterUI: QuantitativeAppraiseMasterUI) {
    if (QuantitativeAppraise.NotConfirm(this.currentQuantitativeAppraise))
      return;
    masterUI.ShowDialog(this.currentQuantitativeAppraise);
  }

  public onAdd(editUI: QuantitativeAppraiseEditUI) {
    editUI.TargetSetting = this.targetSetting;
    editUI.ShowDialog(new QuantitativeAppraise());
  }

  public onEdit(editUI: QuantitativeAppraiseEditUI) {
    if (QuantitativeAppraise.NotConfirm(this.currentQuantitativeAppraise))
      return;
    editUI.ShowDialog(this.currentQuantitativeAppraise);
  }

  public onDelete(deleteUI: QuantitativeAppraiseDeleteUI) {
    if (QuantitativeAppraise.NotConfirm(this.currentQuantitativeAppraise))
      return;
    deleteUI.ShowDialog(this.currentQuantitativeAppraise);
  }

  public onEditModal_Closed(quantitativeAppraise: QuantitativeAppraise) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}