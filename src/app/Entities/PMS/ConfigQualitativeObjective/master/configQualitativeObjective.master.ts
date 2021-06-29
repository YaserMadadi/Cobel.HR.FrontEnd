import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ConfigQualitativeObjective } from '../configQualitativeObjective';
import { ConfigQualitativeObjectiveService } from '../configQualitativeObjective.service';
import { ConfigQualitativeObjectiveDeleteUI } from '../delete/configQualitativeObjective.delete';
import { ConfigQualitativeObjectiveEditUI } from '../edit/configQualitativeObjective.edit';
import { ConfigQualitativeKPIService } from '../../ConfigQualitativeKPI/configQualitativeKPI.service';



@Component({
  selector: 'pms-configQualitativeObjective-master',
  templateUrl: './configQualitativeObjective.master.html',
  styleUrls: ['./configQualitativeObjective.master.css'],
  providers: [
    ConfigQualitativeObjectiveService,
    ConfigQualitativeKPIService,
  ]
})
export class ConfigQualitativeObjectiveMasterUI extends MasterModal<ConfigQualitativeObjective> {

  constructor(private configQualitativeObjectiveService: ConfigQualitativeObjectiveService) {
    super(configQualitativeObjectiveService);
  }
}