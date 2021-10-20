import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ApprovementType } from '../approvementType';
import { ApprovementTypeService } from '../approvementType.service';


@Component({
  selector: 'base-pms-approvementType-delete',
  templateUrl: './approvementType.delete.html',
  styleUrls: ['./approvementType.delete.css'],
  
})
export class ApprovementTypeDeleteUI extends DeleteModal<ApprovementType> {

    constructor(private approvementTypeService: ApprovementTypeService){
        super(approvementTypeService);
    }

}