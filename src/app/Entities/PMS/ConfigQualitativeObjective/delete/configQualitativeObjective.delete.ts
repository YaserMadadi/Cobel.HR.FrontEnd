import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ConfigQualitativeObjective } from '../configQualitativeObjective';
import { ConfigQualitativeObjectiveService } from '../configQualitativeObjective.service';


@Component({
  selector: 'pms-configQualitativeObjective-delete',
  templateUrl: './configQualitativeObjective.delete.html',
  styleUrls: ['./configQualitativeObjective.delete.css'],
  
})
export class ConfigQualitativeObjectiveDeleteUI extends DeleteModal<ConfigQualitativeObjective> {

    constructor(private configQualitativeObjectiveService: ConfigQualitativeObjectiveService){
        super(configQualitativeObjectiveService);
    }

}