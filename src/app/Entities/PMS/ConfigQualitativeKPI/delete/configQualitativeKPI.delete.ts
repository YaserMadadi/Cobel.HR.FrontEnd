import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ConfigQualitativeKPI } from '../configQualitativeKPI';
import { ConfigQualitativeKPIService } from '../configQualitativeKPI.service';


@Component({
  selector: 'pms-configQualitativeKPI-delete',
  templateUrl: './configQualitativeKPI.delete.html',
  styleUrls: ['./configQualitativeKPI.delete.css'],
  providers: [ConfigQualitativeKPIService]
})
export class ConfigQualitativeKPIDeleteUI extends DeleteModal<ConfigQualitativeKPI> {

    constructor(private configQualitativeKPIService: ConfigQualitativeKPIService){
        super(configQualitativeKPIService);
    }

}