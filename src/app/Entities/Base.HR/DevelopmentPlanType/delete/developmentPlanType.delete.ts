

import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { DevelopmentPlanType } from '../developmentPlanType';
import { DevelopmentPlanTypeService } from '../developmentPlanType.service';


@Component({
  selector: 'base-hr-developmentPlanType-delete',
  templateUrl: './developmentPlanType.delete.html',
  styleUrls: ['./developmentPlanType.delete.css'],
  
})
export class DevelopmentPlanTypeDeleteUI extends DeleteModal<DevelopmentPlanType> {

    constructor(private developmentPlanTypeService: DevelopmentPlanTypeService){
        super(developmentPlanTypeService);
    }

}
