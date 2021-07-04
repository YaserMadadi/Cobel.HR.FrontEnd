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
    this.targetSettingService.PositionService.RetrieveById(this.currentInstance.position.id)
      .then(position => {
        this.position = position;
        if (this.position.positionCategory.id == 2) { // PositionCategory.Id = 2 : NonOperation
          this.targetSettingService
            .PositionService
            .LevelService
            .ServiceCollection
            .CollectionOfObjectiveWeightNonOperational(this.position.level)
            .then(objectiveWeightList => {
              if (objectiveWeightList.length <= 0)
                return;
              this.functionalHeading = `Functional Objective ( ${objectiveWeightList[0].functionalWeight}% )`;
              this.behavioralHeading = `Behavioral Objective ( ${objectiveWeightList[0].behavioralWeight}% )`;
            });
        } else { // PositionCategory.Id = 1 : Operational
            this.behavioralHeading = 'Behavioral Objective';
            this.functionalHeading = 'Functional Objective';
        }
      });
  }

  functionalHeading: string = 'Functional Objective';

  behavioralHeading: string = 'Behavioral Objective';

}