import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Vision } from '../vision';
import { VisionService } from '../vision.service';

import { VisionApproved } from '../../VisionApproved/visionApproved';
import { VisionApprovedMasterUI } from '../../VisionApproved/master/visionApproved.master';
import { VisionApprovedEditUI } from '../../VisionApproved/edit/visionApproved.edit';
import { VisionApprovedDeleteUI } from '../../VisionApproved/delete/visionApproved.delete';



@Component({
  selector: 'vision-visionApproved-detail',
  templateUrl: './vision-visionApproved.detail.html',
  styleUrls: ['./vision-visionApproved.detail.css'],
  providers: [VisionService]
}) 

@Injectable()
export class Vision_VisionApproved_DetailUI extends DetailView<Vision> {

  constructor(private visionService: VisionService) {
    super(visionService);
  }

  public VisionApprovedList : VisionApproved[] = [];
  
  public currentVisionApproved : VisionApproved = new VisionApproved();

  private vision: Vision = new Vision();

  @Input()
  public set Vision(value: Vision) {
    this.vision = value;
    this.onReload();
  }

  public get Vision(): Vision { return this.vision }

  public onReload(){
    if (Vision.NotConfirm(this.vision))
      return;
    this.visionService
      .ServiceCollection
      .CollectionOfVisionApproved(this.vision)
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
    editUI.Vision = this.vision;
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