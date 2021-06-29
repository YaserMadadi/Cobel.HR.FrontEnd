import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { PromotionResult } from '../promotionResult';
import { PromotionResultService } from '../promotionResult.service';



@Component({
  selector: 'lad-promotionResult-edit',
  templateUrl: './promotionResult.edit.html',
  styleUrls: ['./promotionResult.edit.css']
})
export class PromotionResultEditUI extends EditModal<PromotionResult> implements IEditModal<PromotionResult>  {
  
  constructor(private promotionResultService: PromotionResultService) {
    super(promotionResultService); 
    this.currentInstance = new PromotionResult();
  }

  

  @ViewChild('promotionResultEditUI')
  private promotionResultEditUI: NgForm;

  Init(promotionResult: PromotionResult = new PromotionResult()) {
    if (promotionResult.isNew)
      this.promotionResultEditUI.reset();
    this.InitPromotionResult(promotionResult);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitPromotionResult(promotionResult: PromotionResult) {
    if (!promotionResult.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = promotionResult;
  }

  ResetForm() {
    
  }
}