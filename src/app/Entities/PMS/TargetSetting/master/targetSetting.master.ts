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
import { ConfigTargetSetting } from '../../ConfigTargetSetting/configTargetSetting';
import { TabItemComponent } from '../../../../../xcore/tools/tabItem.component';



@Component({
  selector: 'pms-targetSetting-master',
  templateUrl: './targetSetting.master.html',
  styleUrls: ['./targetSetting.master.css']
})
export class TargetSettingMasterUI extends MasterModal<TargetSetting> {

  constructor(private targetSettingService: TargetSettingService) {
    super(targetSettingService);
  }

  public position: Position = new Position();

  quantitativeTabItem: TabItemComponent = new TabItemComponent();

  qualitativeTabItem: TabItemComponent = new TabItemComponent();

  nonBehavioralTabItem: TabItemComponent = new TabItemComponent();

  functionalTabItem: TabItemComponent = new TabItemComponent();

  behavioralTabItem: TabItemComponent = new TabItemComponent();

  f_behavioralTabItem: TabItemComponent = new TabItemComponent();

  appraiseResultTabItem: TabItemComponent = new TabItemComponent();

  finalAppraiseTabItem: TabItemComponent = new TabItemComponent();

  idpFormTabItem: TabItemComponent = new TabItemComponent();

  onShown() {

    this.nonBehavioralTabItem = new TabItemComponent();
    this.quantitativeTabItem = new TabItemComponent();
    this.qualitativeTabItem = new TabItemComponent();
    this.functionalTabItem = new TabItemComponent();
    this.behavioralTabItem = new TabItemComponent();
    this.f_behavioralTabItem = new TabItemComponent();
    this.appraiseResultTabItem = new TabItemComponent();
    this.finalAppraiseTabItem = new TabItemComponent();
    this.idpFormTabItem = new TabItemComponent();


    this.targetSettingService.PositionService.RetrieveById(this.currentInstance.position.id)
      .then(position => {
        this.position = position;
        if (this.position == null)
          return;
        if (this.position?.positionDivision.id == 2) { // positionDivision.Id = 2 : NonOperation
          this.targetSettingService
            .PositionService
            .LevelService
            .ServiceCollection
            .CollectionOfObjectiveWeightNonOperational(this.position.level)
            .then(objectiveWeightList => {
              if (objectiveWeightList.length <= 0)
                return;

              this.functionalTabItem.isVisible = objectiveWeightList[0].functionalWeight > 0;
              this.functionalTabItem.headLine = `Functional Objective ( ${objectiveWeightList[0].functionalWeight}% )`;

              this.f_behavioralTabItem.isVisible = objectiveWeightList[0].behavioralWeight > 0;
              this.f_behavioralTabItem.headLine = `Behavioral Objective ( ${objectiveWeightList[0].behavioralWeight}% )`;

              this.appraiseResultTabItem.isVisible = true;
              this.appraiseResultTabItem.headLine = 'Appraise Result';

              this.finalAppraiseTabItem.isVisible = true;
              this.finalAppraiseTabItem.headLine = 'Appraisal Results by Director';

              this.idpFormTabItem.isVisible = true;
              this.idpFormTabItem.headLine = 'IDP Form';

            });
        } else { // PositionDivision.Id = 1 : Operational
          this.targetSettingService
            .PositionService
            .PositionCategoryService
            .ServiceCollection
            .CollectionOfConfigTargetSetting(this.position.positionCategory)
            .then(configTargetSettingList => {

              if (configTargetSettingList.length > 0) {
                this.configWeight = configTargetSettingList[0];
              } else {
                this.configWeight = new ConfigTargetSetting();

                this.configWeight.quantitativeWeight = 20;
                this.configWeight.qualitativeWeight = 80;
                this.configWeight.qualitativeBehavioralWeight = 20;
                this.configWeight.qualitativeNonBehavioralWeight = 80;
              }

              this.quantitativeTabItem.isVisible = true;//this.configWeight.quantitativeWeight > 0;
              this.quantitativeTabItem.headLine = `Quantitative Objective ( ${this.configWeight.quantitativeWeight}% )`;

              this.qualitativeTabItem.isVisible = this.configWeight.qualitativeWeight > 0;
              this.qualitativeTabItem.headLine = `Qualitative Objective ( ${this.configWeight.qualitativeWeight}% )`;


              this.nonBehavioralTabItem.isVisible = (this.configWeight.qualitativeNonBehavioralWeight * this.configWeight.qualitativeWeight) > 0;
              this.nonBehavioralTabItem.headLine = `Qualitative - NonBehavioral ( ${this.configWeight.qualitativeNonBehavioralWeight}% )`;//`Qualitative - NonBehavioral ( ${this.configWeight.qualitativeNonBehavioralWeight * this.configWeight.qualitativeWeight / 100}% )`;

              this.behavioralTabItem.isVisible = true;//this.configWeight.qualitativeBehavioralWeight > 0;
              this.behavioralTabItem.headLine = `Qualitative - Behavioral ( ${this.configWeight.qualitativeBehavioralWeight}% )`;//`Qualitative - Behavioral ( ${this.configWeight.qualitativeBehavioralWeight * this.configWeight.qualitativeWeight / 100}% )`;

              this.appraiseResultTabItem.isVisible = true;
              this.appraiseResultTabItem.headLine = 'Appraise Result';

              this.finalAppraiseTabItem.isVisible = false;
              this.finalAppraiseTabItem.headLine = 'Appraisal Results by Director';

              this.idpFormTabItem.isVisible = true;
              this.idpFormTabItem.headLine = 'IDP Form';
            });
        }
      });
  }

  configWeight: ConfigTargetSetting = new ConfigTargetSetting();
}