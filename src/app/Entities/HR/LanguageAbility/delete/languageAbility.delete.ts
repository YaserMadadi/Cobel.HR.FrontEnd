import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { LanguageAbility } from '../languageAbility';
import { LanguageAbilityService } from '../languageAbility.service';


@Component({
  selector: 'hr-languageAbility-delete',
  templateUrl: './languageAbility.delete.html',
  styleUrls: ['./languageAbility.delete.css'],
  
})
export class LanguageAbilityDeleteUI extends DeleteModal<LanguageAbility> {

    constructor(private languageAbilityService: LanguageAbilityService){
        super(languageAbilityService);
    }

}