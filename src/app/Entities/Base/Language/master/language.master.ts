import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Language } from '../language';
import { LanguageService } from '../language.service';
import { LanguageDeleteUI } from '../delete/language.delete';
import { LanguageEditUI } from '../edit/language.edit';
import { LanguageAbilityService } from '../../../HR/LanguageAbility/languageAbility.service';



@Component({
  selector: 'base-language-master',
  templateUrl: './language.master.html',
  styleUrls: ['./language.master.css'],
  
})
export class LanguageMasterUI extends MasterModal<Language> {

  constructor(private languageService: LanguageService) {
    super(languageService);
  }
}