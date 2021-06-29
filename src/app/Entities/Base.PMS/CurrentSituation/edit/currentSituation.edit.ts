import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { CurrentSituation } from '../currentSituation';
import { CurrentSituationService } from '../currentSituation.service';



@Component({
  selector: 'base-pms-currentSituation-edit',
  templateUrl: './currentSituation.edit.html',
  styleUrls: ['./currentSituation.edit.css']
})
export class CurrentSituationEditUI extends EditModal<CurrentSituation> implements IEditModal<CurrentSituation>  {
  
  constructor(private currentSituationService: CurrentSituationService) {
    super(currentSituationService); 
    this.currentInstance = new CurrentSituation();
  }

  

  @ViewChild('currentSituationEditUI')
  private currentSituationEditUI: NgForm;

  Init(currentSituation: CurrentSituation = new CurrentSituation()) {
    if (currentSituation.isNew)
      this.currentSituationEditUI.reset();
    this.InitCurrentSituation(currentSituation);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitCurrentSituation(currentSituation: CurrentSituation) {
    if (!currentSituation.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = currentSituation;
  }

  ResetForm() {
    
  }
}