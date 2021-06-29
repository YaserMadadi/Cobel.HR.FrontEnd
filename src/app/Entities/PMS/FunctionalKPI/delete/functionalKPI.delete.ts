import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { FunctionalKPI } from '../functionalKPI';
import { FunctionalKPIService } from '../functionalKPI.service';


@Component({
  selector: 'pms-functionalKPI-delete',
  templateUrl: './functionalKPI.delete.html',
  styleUrls: ['./functionalKPI.delete.css'],
  providers: [FunctionalKPIService]
})
export class FunctionalKPIDeleteUI extends DeleteModal<FunctionalKPI> {

    constructor(private functionalKPIService: FunctionalKPIService){
        super(functionalKPIService);
    }

}