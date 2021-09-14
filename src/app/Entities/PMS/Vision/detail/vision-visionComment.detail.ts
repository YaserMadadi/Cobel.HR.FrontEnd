import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Vision } from '../vision';
import { VisionService } from '../vision.service';

import { VisionComment } from '../../VisionComment/visionComment';
import { VisionCommentMasterUI } from '../../VisionComment/master/visionComment.master';
import { VisionCommentEditUI } from '../../VisionComment/edit/visionComment.edit';
import { VisionCommentDeleteUI } from '../../VisionComment/delete/visionComment.delete';



@Component({
  selector: 'vision-visionComment-detail',
  templateUrl: './vision-visionComment.detail.html',
  styleUrls: ['./vision-visionComment.detail.css']
})
export class Vision_VisionComment_DetailUI extends DetailView<Vision> {

  constructor(private visionService: VisionService) {
    super(visionService);
  }

  public VisionCommentList : VisionComment[] = [];
  
  public currentVisionComment : VisionComment = new VisionComment();

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
      .CollectionOfVisionComment(this.vision)
      .then(visionCommentList => {
        this.VisionCommentList = visionCommentList;
        this.currentVisionComment = new VisionComment();
      });
  }

  public onSelect(i: number) {
    this.currentVisionComment = this.VisionCommentList[i];
    if (VisionComment.NotConfirm(this.currentVisionComment))
      this.currentVisionComment = new VisionComment();
  }

  public onDblClicked(masterUI: VisionCommentMasterUI) {
    if (VisionComment.NotConfirm(this.currentVisionComment))
      return;
    masterUI.ShowDialog(this.currentVisionComment);
  }

  public onAdd(editUI: VisionCommentEditUI) {
    editUI.Vision = this.vision;
    editUI.ShowDialog(new VisionComment());
  }

  public onEdit(editUI: VisionCommentEditUI) {
    if (VisionComment.NotConfirm(this.currentVisionComment))
      return;
    editUI.ShowDialog(this.currentVisionComment);
  }

  public onDelete(deleteUI: VisionCommentDeleteUI) {
    if (VisionComment.NotConfirm(this.currentVisionComment))
      return;
    deleteUI.ShowDialog(this.currentVisionComment);
  }

  public onEditModal_Closed(visionComment: VisionComment) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}