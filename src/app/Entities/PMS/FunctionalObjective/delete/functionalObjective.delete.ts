import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { FunctionalObjective } from '../functionalObjective';
import { FunctionalObjectiveService } from '../functionalObjective.service';


@Component({
  selector: 'pms-functionalObjective-delete',
  templateUrl: './functionalObjective.delete.html',
  styleUrls: ['./functionalObjective.delete.css'],
  providers: [FunctionalObjectiveService]
})
export class FunctionalObjectiveDeleteUI extends DeleteModal<FunctionalObjective> {

    constructor(private functionalObjectiveService: FunctionalObjectiveService){
        super(functionalObjectiveService);
    }

}