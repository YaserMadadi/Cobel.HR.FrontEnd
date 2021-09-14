import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Position } from '../position';
import { PositionService } from '../position.service';
import { PositionDeleteUI } from '../delete/position.delete';
import { PositionEditUI } from '../edit/position.edit';
import { PromotionAssessmentService } from '../../../LAD/PromotionAssessment/promotionAssessment.service';
import { ConfigTargetSettingService } from '../../../PMS/ConfigTargetSetting/configTargetSetting.service';
import { TargetSettingService } from '../../../PMS/TargetSetting/targetSetting.service';
import { PositionAssignmentService } from '../../PositionAssignment/positionAssignment.service';
import { RotationAssessmentService } from '../../../LAD/RotationAssessment/rotationAssessment.service';



@Component({
  selector: 'hr-position-master',
  templateUrl: './position.master.html',
  styleUrls: ['./position.master.css'],
})
export class PositionMasterUI extends MasterModal<Position> {

  constructor(private positionService: PositionService) {
    super(positionService);
  }
}