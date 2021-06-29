import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { LanguageAbility } from '../languageAbility';
import { LanguageAbilityService } from '../languageAbility.service';
import { LanguageAbilityDeleteUI } from '../delete/languageAbility.delete';
import { LanguageAbilityEditUI } from '../edit/languageAbility.edit';



@Component({
  selector: 'hr-languageAbility-master',
  templateUrl: './languageAbility.master.html',
  styleUrls: ['./languageAbility.master.css'],
  providers: [
    LanguageAbilityService,
    
  ]
})
export class LanguageAbilityMasterUI extends MasterModal<LanguageAbility> {

  constructor(private languageAbilityService: LanguageAbilityService) {
    super(languageAbilityService);
  }
}