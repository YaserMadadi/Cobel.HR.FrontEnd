import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { RelativeType } from '../relativeType';
import { RelativeTypeService } from '../relativeType.service';

import { Relative } from '../../../HR/Relative/relative';
import { RelativeMasterUI } from '../../../HR/Relative/master/relative.master';
import { RelativeEditUI } from '../../../HR/Relative/edit/relative.edit';
import { RelativeDeleteUI } from '../../../HR/Relative/delete/relative.delete';



@Component({
  selector: 'relationType-relative-detail',
  templateUrl: './relationType-relative.detail.html',
  styleUrls: ['./relationType-relative.detail.css']
})
export class RelationType_Relative_DetailUI extends DetailView<RelativeType> {

  constructor(private relativeTypeService: RelativeTypeService) {
    super(relativeTypeService);
  }

  public RelativeList : Relative[] = [];
  
  public currentRelative : Relative = new Relative();

  private relationType: RelativeType = new RelativeType();

  @Input()
  public set RelationType(value: RelativeType) {
    this.relationType = value;
    this.onReload();
  }

  public get RelationType(): RelativeType { return this.relationType }

  public onReload(){
    if (RelativeType.NotConfirm(this.relationType))
      return;
    this.relativeTypeService
      .ServiceCollection
      .CollectionOfRelative_RelationType(this.relationType)
      .then(relativeList => {
        this.RelativeList = relativeList;
        this.currentRelative = new Relative();
      });
  }

  public onSelect(i: number) {
    this.currentRelative = this.RelativeList[i];
    if (Relative.NotConfirm(this.currentRelative))
      this.currentRelative = new Relative();
  }

  public onDblClicked(masterUI: RelativeMasterUI) {
    if (Relative.NotConfirm(this.currentRelative))
      return;
    masterUI.ShowDialog(this.currentRelative);
  }

  public onAdd(editUI: RelativeEditUI) {
    editUI.RelationType = this.relationType;
    editUI.ShowDialog(new Relative());
  }

  public onEdit(editUI: RelativeEditUI) {
    if (Relative.NotConfirm(this.currentRelative))
      return;
    editUI.ShowDialog(this.currentRelative);
  }

  public onDelete(deleteUI: RelativeDeleteUI) {
    if (Relative.NotConfirm(this.currentRelative))
      return;
    deleteUI.ShowDialog(this.currentRelative);
  }

  public onEditModal_Closed(relative: Relative) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}
