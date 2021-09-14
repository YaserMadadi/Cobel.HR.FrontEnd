import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Language } from '../language';
import { LanguageService } from '../language.service';



@Component({
  selector: 'base-language-edit',
  templateUrl: './language.edit.html',
  styleUrls: ['./language.edit.css']
})
export class LanguageEditUI extends EditModal<Language> implements IEditModal<Language>  {
  
  constructor(private languageService: LanguageService) {
    super(languageService); 
    this.currentInstance = new Language();
  }

  

  @ViewChild('languageEditUI')
  private languageEditUI: NgForm;

  Init(language: Language = new Language()) {
    if (language.isNew)
      this.languageEditUI.reset();
    this.InitLanguage(language);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitLanguage(language: Language){
    this.currentInstance = new Language();
    if (!language.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = language;
  }

  ResetForm() {
    
  }
}