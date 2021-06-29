import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Synonym } from '../synonym';
import { SynonymService } from '../synonym.service';



@Component({
  selector: 'xcode-synonym-edit',
  templateUrl: './synonym.edit.html',
  styleUrls: ['./synonym.edit.css']
})
export class SynonymEditUI extends EditModal<Synonym> implements IEditModal<Synonym>  {
  
  constructor(private synonymService: SynonymService) {
    super(synonymService); 
    this.currentInstance = new Synonym();
  }

  

  @ViewChild('synonymEditUI')
  private synonymEditUI: NgForm;

  Init(synonym: Synonym = new Synonym()) {
    if (synonym.isNew)
      this.synonymEditUI.reset();
    this.InitSynonym(synonym);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitSynonym(synonym: Synonym) {
    if (!synonym.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = synonym;
  }

  ResetForm() {
    
  }
}