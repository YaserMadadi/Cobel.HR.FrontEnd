import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { AnswerTypeItem } from '../answerTypeItem';
import { AnswerTypeItemService } from '../answerTypeItem.service';
import { AnswerType } from '../../AnswerType/answerType';
import { AnswerTypeEditUI } from '../../AnswerType/edit/answerType.edit';



@Component({
  selector: 'lad-answerTypeItem-edit',
  templateUrl: './answerTypeItem.edit.html',
  styleUrls: ['./answerTypeItem.edit.css']
})
export class AnswerTypeItemEditUI extends EditModal<AnswerTypeItem> implements IEditModal<AnswerTypeItem>  {
  
  constructor(private answerTypeItemService: AnswerTypeItemService) {
    super(answerTypeItemService); 
    this.currentInstance = new AnswerTypeItem();
  }

  //#region Foreign Entities
	
	//#region -- AnswerType --

  answerTypeComponent : ForeignComponent<AnswerType> = new ForeignComponent<AnswerType>(this.answerTypeItemService.AnswerTypeService);

  @Input()
  public set AnswerType(value: AnswerType) {
    this.currentInstance.answerType = this.answerTypeComponent.instance = value;
  }  


  //#endregion -- AnswerType --
	//#endregion

  @ViewChild('answerTypeItemEditUI')
  private answerTypeItemEditUI: NgForm;

  Init(answerTypeItem: AnswerTypeItem = new AnswerTypeItem()) {
    if (answerTypeItem.isNew)
      this.answerTypeItemEditUI.reset();
    this.InitAnswerTypeItem(answerTypeItem);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitAnswerTypeItem(answerTypeItem: AnswerTypeItem) {
    if (!answerTypeItem.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.answerTypeComponent.instance = answerTypeItem.answerType;
    } else {
      answerTypeItem.answerType = this.answerTypeComponent.instance;
    }
    this.currentInstance = answerTypeItem;
  }

  ResetForm() {
    this.AnswerType = new AnswerType();
  }
}