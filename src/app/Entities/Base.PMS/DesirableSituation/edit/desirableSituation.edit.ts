import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { DesirableSituation } from '../desirableSituation';
import { DesirableSituationService } from '../desirableSituation.service';



@Component({
  selector: 'base-pms-desirableSituation-edit',
  templateUrl: './desirableSituation.edit.html',
  styleUrls: ['./desirableSituation.edit.css']
})
export class DesirableSituationEditUI extends EditModal<DesirableSituation> implements IEditModal<DesirableSituation>  {
  
  constructor(private desirableSituationService: DesirableSituationService) {
    super(desirableSituationService); 
    this.currentInstance = new DesirableSituation();
  }

  

  @ViewChild('desirableSituationEditUI')
  private desirableSituationEditUI: NgForm;

  Init(desirableSituation: DesirableSituation = new DesirableSituation()) {
    if (desirableSituation.isNew)
      this.desirableSituationEditUI.reset();
    this.InitDesirableSituation(desirableSituation);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitDesirableSituation(desirableSituation: DesirableSituation) {
    if (!desirableSituation.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = desirableSituation;
  }

  ResetForm() {
    
  }
}