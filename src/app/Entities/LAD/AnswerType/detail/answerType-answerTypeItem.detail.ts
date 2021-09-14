import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { AnswerType } from '../answerType';
import { AnswerTypeService } from '../answerType.service';

import { AnswerTypeItem } from '../../AnswerTypeItem/answerTypeItem';
import { AnswerTypeItemMasterUI } from '../../AnswerTypeItem/master/answerTypeItem.master';
import { AnswerTypeItemEditUI } from '../../AnswerTypeItem/edit/answerTypeItem.edit';
import { AnswerTypeItemDeleteUI } from '../../AnswerTypeItem/delete/answerTypeItem.delete';



@Component({
  selector: 'answerType-answerTypeItem-detail',
  templateUrl: './answerType-answerTypeItem.detail.html',
  styleUrls: ['./answerType-answerTypeItem.detail.css']
})
export class AnswerType_AnswerTypeItem_DetailUI extends DetailView<AnswerType> {

  constructor(private answerTypeService: AnswerTypeService) {
    super(answerTypeService);
  }

  public AnswerTypeItemList : AnswerTypeItem[] = [];
  
  public currentAnswerTypeItem : AnswerTypeItem = new AnswerTypeItem();

  private answerType: AnswerType = new AnswerType();

  @Input()
  public set AnswerType(value: AnswerType) {
    this.answerType = value;
    this.onReload();
  }

  public get AnswerType(): AnswerType { return this.answerType }

  public onReload(){
    if (AnswerType.NotConfirm(this.answerType))
      return;
    this.answerTypeService
      .ServiceCollection
      .CollectionOfAnswerTypeItem(this.answerType)
      .then(answerTypeItemList => {
        this.AnswerTypeItemList = answerTypeItemList;
        this.currentAnswerTypeItem = new AnswerTypeItem();
      });
  }

  public onSelect(i: number) {
    this.currentAnswerTypeItem = this.AnswerTypeItemList[i];
    if (AnswerTypeItem.NotConfirm(this.currentAnswerTypeItem))
      this.currentAnswerTypeItem = new AnswerTypeItem();
  }

  public onDblClicked(masterUI: AnswerTypeItemMasterUI) {
    if (AnswerTypeItem.NotConfirm(this.currentAnswerTypeItem))
      return;
    masterUI.ShowDialog(this.currentAnswerTypeItem);
  }

  public onAdd(editUI: AnswerTypeItemEditUI) {
    editUI.AnswerType = this.answerType;
    editUI.ShowDialog(new AnswerTypeItem());
  }

  public onEdit(editUI: AnswerTypeItemEditUI) {
    if (AnswerTypeItem.NotConfirm(this.currentAnswerTypeItem))
      return;
    editUI.ShowDialog(this.currentAnswerTypeItem);
  }

  public onDelete(deleteUI: AnswerTypeItemDeleteUI) {
    if (AnswerTypeItem.NotConfirm(this.currentAnswerTypeItem))
      return;
    deleteUI.ShowDialog(this.currentAnswerTypeItem);
  }

  public onEditModal_Closed(answerTypeItem: AnswerTypeItem) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}