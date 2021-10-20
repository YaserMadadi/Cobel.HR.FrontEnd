import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { QuestionaryType } from '../questionaryType';
import { QuestionaryTypeService } from '../questionaryType.service';

import { QuestionaryItem } from '../../QuestionaryItem/questionaryItem';
import { QuestionaryItemMasterUI } from '../../QuestionaryItem/master/questionaryItem.master';
import { QuestionaryItemEditUI } from '../../QuestionaryItem/edit/questionaryItem.edit';
import { QuestionaryItemDeleteUI } from '../../QuestionaryItem/delete/questionaryItem.delete';



@Component({
  selector: 'questionaryType-questionaryItem-detail',
  templateUrl: './questionaryType-questionaryItem.detail.html',
  styleUrls: ['./questionaryType-questionaryItem.detail.css']
})
export class QuestionaryType_QuestionaryItem_DetailUI extends DetailView<QuestionaryType> {

  constructor(private questionaryTypeService: QuestionaryTypeService) {
    super(questionaryTypeService);
  }

  public QuestionaryItemList : QuestionaryItem[] = [];
  
  public currentQuestionaryItem : QuestionaryItem = new QuestionaryItem();

  private questionaryType: QuestionaryType = new QuestionaryType();

  @Input()
  public set QuestionaryType(value: QuestionaryType) {
    this.questionaryType = value;
    this.onReload();
  }

  public get QuestionaryType(): QuestionaryType { return this.questionaryType }

  public onReload(){
    if (QuestionaryType.NotConfirm(this.questionaryType))
      return;
    this.questionaryTypeService
      .ServiceCollection
      .CollectionOfQuestionaryItem(this.questionaryType)
      .then(questionaryItemList => {
        this.QuestionaryItemList = questionaryItemList;
        this.currentQuestionaryItem = new QuestionaryItem();
      });
  }

  public onSelect(i: number) {
    this.currentQuestionaryItem = this.QuestionaryItemList[i];
    if (QuestionaryItem.NotConfirm(this.currentQuestionaryItem))
      this.currentQuestionaryItem = new QuestionaryItem();
  }

  public onDblClicked(masterUI: QuestionaryItemMasterUI) {
    if (QuestionaryItem.NotConfirm(this.currentQuestionaryItem))
      return;
    masterUI.ShowDialog(this.currentQuestionaryItem);
  }

  public onAdd(editUI: QuestionaryItemEditUI) {
    editUI.QuestionaryType = this.questionaryType;
    editUI.ShowDialog(new QuestionaryItem());
  }

  public onEdit(editUI: QuestionaryItemEditUI) {
    if (QuestionaryItem.NotConfirm(this.currentQuestionaryItem))
      return;
    editUI.ShowDialog(this.currentQuestionaryItem);
  }

  public onDelete(deleteUI: QuestionaryItemDeleteUI) {
    if (QuestionaryItem.NotConfirm(this.currentQuestionaryItem))
      return;
    deleteUI.ShowDialog(this.currentQuestionaryItem);
  }

  public onEditModal_Closed(questionaryItem: QuestionaryItem) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}