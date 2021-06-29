import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { VisionApproved } from '../visionApproved';
import { VisionApprovedService } from '../visionApproved.service';
import { VisionApprovedDeleteUI } from '../delete/visionApproved.delete';
import { VisionApprovedEditUI } from '../edit/visionApproved.edit';



@Component({
  selector: 'pms-visionApproved-master',
  templateUrl: './visionApproved.master.html',
  styleUrls: ['./visionApproved.master.css'],
  providers: [
    VisionApprovedService,
    
  ]
})
export class VisionApprovedMasterUI extends MasterModal<VisionApproved> {

  constructor(private visionApprovedService: VisionApprovedService) {
    super(visionApprovedService);
  }
}