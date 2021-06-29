import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ConfigQualitativeKPI } from '../configQualitativeKPI';
import { ConfigQualitativeKPIService } from '../configQualitativeKPI.service';
import { ConfigQualitativeKPIDeleteUI } from '../delete/configQualitativeKPI.delete';
import { ConfigQualitativeKPIEditUI } from '../edit/configQualitativeKPI.edit';



@Component({
  selector: 'pms-configQualitativeKPI-master',
  templateUrl: './configQualitativeKPI.master.html',
  styleUrls: ['./configQualitativeKPI.master.css'],
  providers: [
    ConfigQualitativeKPIService,
    
  ]
})
export class ConfigQualitativeKPIMasterUI extends MasterModal<ConfigQualitativeKPI> {

  constructor(private configQualitativeKPIService: ConfigQualitativeKPIService) {
    super(configQualitativeKPIService);
  }
}