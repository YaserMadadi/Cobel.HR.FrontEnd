import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';

import { Vision } from '../../Vision/vision';
import { VisionMasterUI } from '../../Vision/master/vision.master';
import { VisionEditUI } from '../../Vision/edit/vision.edit';
import { VisionDeleteUI } from '../../Vision/delete/vision.delete';



@Component({
  selector: 'targetSetting-vision-detail',
  templateUrl: './targetSetting-vision.detail.html',
  styleUrls: ['./targetSetting-vision.detail.css'],
  providers: [TargetSettingService]
})

@Injectable()
export class TargetSetting_Vision_DetailUI extends DetailView<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
  }

  public VisionList: Vision[] = [];

  public currentVision: Vision = new Vision();

  private targetSetting: TargetSetting = new TargetSetting();

  @Input()
  public set TargetSetting(value: TargetSetting) {
    this.targetSetting = value;
    this.onReload();
  }

  public get TargetSetting(): TargetSetting { return this.targetSetting }

  public onReload() {
    if (TargetSetting.NotConfirm(this.targetSetting))
      return;
    this.targetSettingService.EmployeeService.ServiceCollection.CollectionOfVision(this.targetSetting.employee)
      .then(visionList => {
        this.VisionList = visionList;
        this.currentVision = new Vision();
      });
  }

  public onSelect(i: number) {
    this.currentVision = this.VisionList[i];
    if (Vision.NotConfirm(this.currentVision))
      this.currentVision = new Vision();
  }

  public onDblClicked(masterUI: VisionMasterUI) {
    if (Vision.NotConfirm(this.currentVision))
      return;
    masterUI.ShowDialog(this.currentVision);
  }

  // public onAdd(editUI: VisionEditUI) {
  //   editUI.TargetSetting = this.targetSetting;
  //   editUI.ShowDialog(new Vision());
  // }

  // public onEdit(editUI: VisionEditUI) {
  //   if (Vision.NotConfirm(this.currentVision))
  //     return;
  //   editUI.ShowDialog(this.currentVision);
  // }

  // public onDelete(deleteUI: VisionDeleteUI) {
  //   if (Vision.NotConfirm(this.currentVision))
  //     return;
  //   deleteUI.ShowDialog(this.currentVision);
  // }

  public onEditModal_Closed(vision: Vision) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}