import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { AbilityLevel } from '../abilityLevel';
import { AbilityLevelService } from '../abilityLevel.service';



@Component({
  selector: 'hr-abilityLevel-edit',
  templateUrl: './abilityLevel.edit.html',
  styleUrls: ['./abilityLevel.edit.css']
})
export class AbilityLevelEditUI extends EditModal<AbilityLevel> implements IEditModal<AbilityLevel>  {
  
  constructor(private abilityLevelService: AbilityLevelService) {
    super(abilityLevelService); 
    this.currentInstance = new AbilityLevel();
  }

  

  @ViewChild('abilityLevelEditUI')
  private abilityLevelEditUI: NgForm;

  Init(abilityLevel: AbilityLevel = new AbilityLevel()) {
    if (abilityLevel.isNew)
      this.abilityLevelEditUI.reset();
    this.InitAbilityLevel(abilityLevel);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitAbilityLevel(abilityLevel: AbilityLevel) {
    if (!abilityLevel.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = abilityLevel;
  }

  ResetForm() {
    
  }
}