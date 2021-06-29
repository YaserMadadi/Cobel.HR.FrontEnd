import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { TargetSetting } from '../targetSetting';
import { TargetSettingService } from '../targetSetting.service';
import { TargetSettingDeleteUI } from '../delete/targetSetting.delete';
import { TargetSettingEditUI } from '../edit/targetSetting.edit';
import { BehavioralObjectiveService } from '../../BehavioralObjective/behavioralObjective.service';
import { FinalApprovementService } from '../../FinalApprovement/finalApprovement.service';
import { FunctionalObjectiveService } from '../../FunctionalObjective/functionalObjective.service';
import { FinalAppraiseService } from '../../FinalAppraise/finalAppraise.service';
import { QuantitativeAppraiseService } from '../../QuantitativeAppraise/quantitativeAppraise.service';
import { OperationalAppraiseService } from '../../OperationalAppraise/operationalAppraise.service';
import { NonOperationalAppraiseService } from '../../NonOperationalAppraise/nonOperationalAppraise.service';
import { QualitativeObjectiveService } from '../../QualitativeObjective/qualitativeObjective.service';
import { Position } from '../../../HR/Position/position';



@Component({
  selector: 'pms-targetSetting-master',
  templateUrl: './targetSetting.master.html',
  styleUrls: ['./targetSetting.master.css'],
  providers: [
    TargetSettingService,
    BehavioralObjectiveService,
    FinalApprovementService,
    FunctionalObjectiveService,
    FinalAppraiseService,
    QuantitativeAppraiseService,
    OperationalAppraiseService,
    NonOperationalAppraiseService,
    QualitativeObjectiveService,
  ]
})
export class TargetSettingMasterUI extends MasterModal<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
  }

  public position: Position = new Position();

  onShown() {
    console.log('TargetSetting Current Instance : ', this.currentInstance);
    // this.targetSettingService.RetrieveById(this.currentInstance.id)
    //   .then(targetSetting => {
    //     this.currentInstance = targetSetting;

    //});
    this.targetSettingService.PositionService.RetrieveById(this.currentInstance.position.id)
      .then(position => this.position = position);

  }
}