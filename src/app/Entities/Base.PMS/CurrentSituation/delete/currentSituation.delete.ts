import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CurrentSituation } from '../currentSituation';
import { CurrentSituationService } from '../currentSituation.service';


@Component({
  selector: 'base-pms-currentSituation-delete',
  templateUrl: './currentSituation.delete.html',
  styleUrls: ['./currentSituation.delete.css'],
  
})
export class CurrentSituationDeleteUI extends DeleteModal<CurrentSituation> {

    constructor(private currentSituationService: CurrentSituationService){
        super(currentSituationService);
    }

}