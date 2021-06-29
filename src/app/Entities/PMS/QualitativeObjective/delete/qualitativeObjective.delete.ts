import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { QualitativeObjective } from '../qualitativeObjective';
import { QualitativeObjectiveService } from '../qualitativeObjective.service';


@Component({
  selector: 'pms-qualitativeObjective-delete',
  templateUrl: './qualitativeObjective.delete.html',
  styleUrls: ['./qualitativeObjective.delete.css'],
  providers: [QualitativeObjectiveService]
})
export class QualitativeObjectiveDeleteUI extends DeleteModal<QualitativeObjective> {

    constructor(private qualitativeObjectiveService: QualitativeObjectiveService){
        super(qualitativeObjectiveService);
    }

}