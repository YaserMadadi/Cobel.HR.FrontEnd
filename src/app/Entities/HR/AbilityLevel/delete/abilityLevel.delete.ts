import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { AbilityLevel } from '../abilityLevel';
import { AbilityLevelService } from '../abilityLevel.service';


@Component({
  selector: 'hr-abilityLevel-delete',
  templateUrl: './abilityLevel.delete.html',
  styleUrls: ['./abilityLevel.delete.css'],
  
})
export class AbilityLevelDeleteUI extends DeleteModal<AbilityLevel> {

    constructor(private abilityLevelService: AbilityLevelService){
        super(abilityLevelService);
    }

}