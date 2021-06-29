import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { AnswerType } from '../answerType';
import { AnswerTypeService } from '../answerType.service';

import { QuestionaryItem } from '../../QuestionaryItem/questionaryItem';
import { QuestionaryItemMasterUI } from '../../QuestionaryItem/master/questionaryItem.master';
import { QuestionaryItemEditUI } from '../../QuestionaryItem/edit/questionaryItem.edit';
import { QuestionaryItemDeleteUI } from '../../QuestionaryItem/delete/questionaryItem.delete';



@Component({
  selector: 'answerType-questionaryItem-detail',
  templateUrl: './answerType-questionaryItem.detail.html',
  styleUrls: ['./answerType-questionaryItem.detail.css'],
  providers: [AnswerTypeService]
}) 

@Injectable()
export class AnswerType_QuestionaryItem_DetailUI extends DetailView<AnswerType> {

  constructor(private answerTypeService: AnswerTypeService) {
    super(answerTypeService);
  }

  public QuestionaryItemList : QuestionaryItem[] = [];
  
  public currentQuestionaryItem : QuestionaryItem = new QuestionaryItem();

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
      .CollectionOfQuestionaryItem(this.answerType)
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
    editUI.AnswerType = this.answerType;
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