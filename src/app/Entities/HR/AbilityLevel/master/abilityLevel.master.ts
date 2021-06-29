import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { AbilityLevel } from '../abilityLevel';
import { AbilityLevelService } from '../abilityLevel.service';
import { AbilityLevelDeleteUI } from '../delete/abilityLevel.delete';
import { AbilityLevelEditUI } from '../edit/abilityLevel.edit';
import { LanguageAbilityService } from '../../LanguageAbility/languageAbility.service';



@Component({
  selector: 'hr-abilityLevel-master',
  templateUrl: './abilityLevel.master.html',
  styleUrls: ['./abilityLevel.master.css'],
  providers: [
    AbilityLevelService,
    LanguageAbilityService,
		LanguageAbilityService,
		LanguageAbilityService,
		LanguageAbilityService,
  ]
})
export class AbilityLevelMasterUI extends MasterModal<AbilityLevel> {

  constructor(private abilityLevelService: AbilityLevelService) {
    super(abilityLevelService);
  }
}