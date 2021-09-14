import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { QualitativeKPI } from '../qualitativeKPI';
import { QualitativeKPIService } from '../qualitativeKPI.service';


@Component({
  selector: 'pms-qualitativeKPI-delete',
  templateUrl: './qualitativeKPI.delete.html',
  styleUrls: ['./qualitativeKPI.delete.css'],
  
})
export class QualitativeKPIDeleteUI extends DeleteModal<QualitativeKPI> {

    constructor(private qualitativeKPIService: QualitativeKPIService){
        super(qualitativeKPIService);
    }

}