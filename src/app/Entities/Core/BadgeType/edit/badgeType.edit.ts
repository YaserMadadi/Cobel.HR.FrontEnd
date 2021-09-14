

import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { BadgeType } from '../badgeType';
import { BadgeTypeService } from '../badgeType.service';



@Component({
  selector: 'core-badgeType-edit',
  templateUrl: './badgeType.edit.html',
  styleUrls: ['./badgeType.edit.css']
})
export class BadgeTypeEditUI extends EditModal<BadgeType> implements IEditModal<BadgeType>  {
  
  constructor(private badgeTypeService: BadgeTypeService) {
    super(badgeTypeService); 
    this.currentInstance = new BadgeType();
  }

  

  @ViewChild('badgeTypeEditUI')
  private badgeTypeEditUI: NgForm;

  Init(badgeType: BadgeType = new BadgeType()) {
    if (badgeType.isNew)
      this.badgeTypeEditUI.reset();
    this.InitBadgeType(badgeType);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitBadgeType(badgeType: BadgeType) {
    this.currentInstance = this.service.CreateInstance();
    if (!badgeType.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = badgeType;
  }

  async onSave(badgeType: BadgeType, editUI: NgForm, isContinue: boolean = false) {
   
    //// Pre Save Action Comes here...
   
    super.onSave(badgeType, editUI, isContinue);
  }

  ResetForm() {
    
  }
}
