import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { ApproverType } from '../approverType';
import { ApproverTypeService } from '../approverType.service';


@Component({
  selector: 'base-pms-approverType-delete',
  templateUrl: './approverType.delete.html',
  styleUrls: ['./approverType.delete.css'],
  
})
export class ApproverTypeDeleteUI extends DeleteModal<ApproverType> {

    constructor(private approverTypeService: ApproverTypeService){
        super(approverTypeService);
    }

}