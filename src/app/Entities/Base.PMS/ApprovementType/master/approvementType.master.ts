import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { ApprovementType } from '../approvementType';
import { ApprovementTypeService } from '../approvementType.service';
import { ApprovementTypeDeleteUI } from '../delete/approvementType.delete';
import { ApprovementTypeEditUI } from '../edit/approvementType.edit';
import { VisionApprovedService } from '../../../PMS/VisionApproved/visionApproved.service';



@Component({
  selector: 'base-pms-approvementType-master',
  templateUrl: './approvementType.master.html',
  styleUrls: ['./approvementType.master.css'],
  
})
export class ApprovementTypeMasterUI extends MasterModal<ApprovementType> {

  constructor(private approvementTypeService: ApprovementTypeService) {
    super(approvementTypeService);
  }
}