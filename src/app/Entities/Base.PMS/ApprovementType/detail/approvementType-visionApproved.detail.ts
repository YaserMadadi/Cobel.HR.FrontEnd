import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ApprovementType } from '../approvementType';
import { ApprovementTypeService } from '../approvementType.service';

import { VisionApproved } from '../../../PMS/VisionApproved/visionApproved';
import { VisionApprovedMasterUI } from '../../../PMS/VisionApproved/master/visionApproved.master';
import { VisionApprovedEditUI } from '../../../PMS/VisionApproved/edit/visionApproved.edit';
import { VisionApprovedDeleteUI } from '../../../PMS/VisionApproved/delete/visionApproved.delete';



@Component({
  selector: 'approvementType-visionApproved-detail',
  templateUrl: './approvementType-visionApproved.detail.html',
  styleUrls: ['./approvementType-visionApproved.detail.css'],
  providers: [ApprovementTypeService]
}) 

@Injectable()
export class ApprovementType_VisionApproved_DetailUI extends DetailView<ApprovementType> {

  constructor(private approvementTypeService: ApprovementTypeService) {
    super(approvementTypeService);
  }

  public VisionApprovedList : VisionApproved[] = [];
  
  public currentVisionApproved : VisionApproved = new VisionApproved();

  private approvementType: ApprovementType = new ApprovementType();

  @Input()
  public set ApprovementType(value: ApprovementType) {
    this.approvementType = value;
    this.onReload();
  }

  public get ApprovementType(): ApprovementType { return this.approvementType }

  public onReload(){
    if (ApprovementType.NotConfirm(this.approvementType))
      return;
    this.approvementTypeService
      .ServiceCollection
      .CollectionOfVisionApproved(this.approvementType)
      .then(visionApprovedList => {
        this.VisionApprovedList = visionApprovedList;
        this.currentVisionApproved = new VisionApproved();
      });
  }

  public onSelect(i: number) {
    this.currentVisionApproved = this.VisionApprovedList[i];
    if (VisionApproved.NotConfirm(this.currentVisionApproved))
      this.currentVisionApproved = new VisionApproved();
  }

  public onDblClicked(masterUI: VisionApprovedMasterUI) {
    if (VisionApproved.NotConfirm(this.currentVisionApproved))
      return;
    masterUI.ShowDialog(this.currentVisionApproved);
  }

  public onAdd(editUI: VisionApprovedEditUI) {
    editUI.ApprovementType = this.approvementType;
    editUI.ShowDialog(new VisionApproved());
  }

  public onEdit(editUI: VisionApprovedEditUI) {
    if (VisionApproved.NotConfirm(this.currentVisionApproved))
      return;
    editUI.ShowDialog(this.currentVisionApproved);
  }

  public onDelete(deleteUI: VisionApprovedDeleteUI) {
    if (VisionApproved.NotConfirm(this.currentVisionApproved))
      return;
    deleteUI.ShowDialog(this.currentVisionApproved);
  }

  public onEditModal_Closed(visionApproved: VisionApproved) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}