import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { CompetencyItemKPI } from '../competencyItemKPI';
import { CompetencyItemKPIService } from '../competencyItemKPI.service';


@Component({
  selector: 'pms-competencyItemKPI-delete',
  templateUrl: './competencyItemKPI.delete.html',
  styleUrls: ['./competencyItemKPI.delete.css'],
  
})
export class CompetencyItemKPIDeleteUI extends DeleteModal<CompetencyItemKPI> {

    constructor(private competencyItemKPIService: CompetencyItemKPIService){
        super(competencyItemKPIService);
    }

}