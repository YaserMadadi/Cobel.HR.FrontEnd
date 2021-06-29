import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CompetencyItem } from '../competencyItem';
import { CompetencyItemService } from '../competencyItem.service';



@Component({
  selector: 'pms-competencyItem-edit',
  templateUrl: './competencyItem.edit.html',
  styleUrls: ['./competencyItem.edit.css']
})
export class CompetencyItemEditUI extends EditModal<CompetencyItem> implements IEditModal<CompetencyItem>  {
  
  constructor(private competencyItemService: CompetencyItemService) {
    super(competencyItemService); 
    this.currentInstance = new CompetencyItem();
  }

  

  @ViewChild('competencyItemEditUI')
  private competencyItemEditUI: NgForm;

  Init(competencyItem: CompetencyItem = new CompetencyItem()) {
    if (competencyItem.isNew)
      this.competencyItemEditUI.reset();
    this.InitCompetencyItem(competencyItem);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCompetencyItem(competencyItem: CompetencyItem) {
    if (!competencyItem.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = competencyItem;
  }

  ResetForm() {
    
  }
}