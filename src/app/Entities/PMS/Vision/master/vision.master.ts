import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Vision } from '../vision';
import { VisionService } from '../vision.service';
import { VisionDeleteUI } from '../delete/vision.delete';
import { VisionEditUI } from '../edit/vision.edit';
import { VisionCommentService } from '../../VisionComment/visionComment.service';
import { VisionApprovedService } from '../../VisionApproved/visionApproved.service';
import { IndividualDevelopmentPlanService } from '../../IndividualDevelopmentPlan/individualDevelopmentPlan.service';
import { VisionApprovedEditUI } from '../../VisionApproved/edit/visionApproved.edit';
import { VisionApproved } from '../../VisionApproved/visionApproved';



@Component({
  selector: 'pms-vision-master',
  templateUrl: './vision.master.html',
  styleUrls: ['./vision.master.css']
})
export class VisionMasterUI extends MasterModal<Vision> {

  constructor(private visionService: VisionService) {
    super(visionService);
  }

  onApproved(visionApprovedEditUI: VisionApprovedEditUI) {
    visionApprovedEditUI.Vision = this.currentInstance;
    visionApprovedEditUI.ShowDialog(new VisionApproved());
  }

}