import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { DesirableSituation } from '../desirableSituation';
import { DesirableSituationService } from '../desirableSituation.service';


@Component({
  selector: 'base-pms-desirableSituation-delete',
  templateUrl: './desirableSituation.delete.html',
  styleUrls: ['./desirableSituation.delete.css'],
  providers: [DesirableSituationService]
})
export class DesirableSituationDeleteUI extends DeleteModal<DesirableSituation> {

    constructor(private desirableSituationService: DesirableSituationService){
        super(desirableSituationService);
    }

}