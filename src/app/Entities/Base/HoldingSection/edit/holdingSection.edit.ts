import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { HoldingSection } from '../holdingSection';
import { HoldingSectionService } from '../holdingSection.service';



@Component({
  selector: 'base-holdingSection-edit',
  templateUrl: './holdingSection.edit.html',
  styleUrls: ['./holdingSection.edit.css']
})
export class HoldingSectionEditUI extends EditModal<HoldingSection> implements IEditModal<HoldingSection>  {
  
  constructor(private holdingSectionService: HoldingSectionService) {
    super(holdingSectionService); 
    this.currentInstance = new HoldingSection();
  }

  

  @ViewChild('holdingSectionEditUI')
  private holdingSectionEditUI: NgForm;

  Init(holdingSection: HoldingSection = new HoldingSection()) {
    if (holdingSection.isNew)
      this.holdingSectionEditUI.reset();
    this.InitHoldingSection(holdingSection);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitHoldingSection(holdingSection: HoldingSection) {
    if (!holdingSection.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = holdingSection;
  }

  ResetForm() {
    
  }
}