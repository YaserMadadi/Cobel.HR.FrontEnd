import {NgModule} from '@angular/core';

import { AppraisalApproverConfigModule } from './AppraisalApproverConfig/appraisalApproverConfig.module';
import { AppraiseResultModule } from './AppraiseResult/appraiseResult.module';
import { BehavioralAppraiseModule } from './BehavioralAppraise/behavioralAppraise.module';
import { BehavioralKPIModule } from './BehavioralKPI/behavioralKPI.module';
import { BehavioralObjectiveModule } from './BehavioralObjective/behavioralObjective.module';
import { CellActionModule } from './CellAction/cellAction.module';
import { CompetencyItemModule } from './CompetencyItem/competencyItem.module';
import { CompetencyItemKPIModule } from './CompetencyItemKPI/competencyItemKPI.module';
import { ConfigQualitativeKPIModule } from './ConfigQualitativeKPI/configQualitativeKPI.module';
import { ConfigQualitativeObjectiveModule } from './ConfigQualitativeObjective/configQualitativeObjective.module';
import { ConfigTargetSettingModule } from './ConfigTargetSetting/configTargetSetting.module';
import { CriticalIncidentModule } from './CriticalIncident/criticalIncident.module';
import { CriticalIncidentRecognitionModule } from './CriticalIncidentRecognition/criticalIncidentRecognition.module';
import { CriticalIncidentTypeModule } from './CriticalIncidentType/criticalIncidentType.module';
import { DevelopmentPlanCompetencyModule } from './DevelopmentPlanCompetency/developmentPlanCompetency.module';
import { FinalAppraiseModule } from './FinalAppraise/finalAppraise.module';
import { FinalApprovementModule } from './FinalApprovement/finalApprovement.module';
import { FunctionalAppraiseModule } from './FunctionalAppraise/functionalAppraise.module';
import { FunctionalKPIModule } from './FunctionalKPI/functionalKPI.module';
import { FunctionalKPICommentModule } from './FunctionalKPIComment/functionalKPIComment.module';
import { FunctionalObjectiveModule } from './FunctionalObjective/functionalObjective.module';
import { FunctionalObjectiveCommentModule } from './FunctionalObjectiveComment/functionalObjectiveComment.module';
import { IndividualDevelopmentPlanModule } from './IndividualDevelopmentPlan/individualDevelopmentPlan.module';
import { NonOperationalAppraiseModule } from './NonOperationalAppraise/nonOperationalAppraise.module';
import { OperationalAppraiseModule } from './OperationalAppraise/operationalAppraise.module';
import { QualitativeAppraiseModule } from './QualitativeAppraise/qualitativeAppraise.module';
import { QualitativeKPIModule } from './QualitativeKPI/qualitativeKPI.module';
import { QualitativeObjectiveModule } from './QualitativeObjective/qualitativeObjective.module';
import { QuantitativeAppraiseModule } from './QuantitativeAppraise/quantitativeAppraise.module';
import { ScoreCellModule } from './ScoreCell/scoreCell.module';
import { StrategicObjectveModule } from './StrategicObjectve/strategicObjectve.module';
import { TargetSettingModule } from './TargetSetting/targetSetting.module';
import { VisionModule } from './Vision/vision.module';
import { VisionApprovedModule } from './VisionApproved/visionApproved.module';
import { VisionCommentModule } from './VisionComment/visionComment.module';
import { PMS_RouteModule } from './pms.route.module';

@NgModule({
  declarations: [],
  imports: [
    AppraisalApproverConfigModule,
		AppraiseResultModule,
		BehavioralAppraiseModule,
		BehavioralKPIModule,
		BehavioralObjectiveModule,
		CellActionModule,
		CompetencyItemModule,
		CompetencyItemKPIModule,
		ConfigQualitativeKPIModule,
		ConfigQualitativeObjectiveModule,
		ConfigTargetSettingModule,
		CriticalIncidentModule,
		CriticalIncidentRecognitionModule,
		CriticalIncidentTypeModule,
		DevelopmentPlanCompetencyModule,
		FinalAppraiseModule,
		FinalApprovementModule,
		FunctionalAppraiseModule,
		FunctionalKPIModule,
		FunctionalKPICommentModule,
		FunctionalObjectiveModule,
		FunctionalObjectiveCommentModule,
		IndividualDevelopmentPlanModule,
		NonOperationalAppraiseModule,
		OperationalAppraiseModule,
		QualitativeAppraiseModule,
		QualitativeKPIModule,
		QualitativeObjectiveModule,
		QuantitativeAppraiseModule,
		ScoreCellModule,
		StrategicObjectveModule,
		TargetSettingModule,
		VisionModule,
		VisionApprovedModule,
		VisionCommentModule,
		PMS_RouteModule
  ],
  exports: [
    AppraisalApproverConfigModule,
		AppraiseResultModule,
		BehavioralAppraiseModule,
		BehavioralKPIModule,
		BehavioralObjectiveModule,
		CellActionModule,
		CompetencyItemModule,
		CompetencyItemKPIModule,
		ConfigQualitativeKPIModule,
		ConfigQualitativeObjectiveModule,
		ConfigTargetSettingModule,
		CriticalIncidentModule,
		CriticalIncidentRecognitionModule,
		CriticalIncidentTypeModule,
		DevelopmentPlanCompetencyModule,
		FinalAppraiseModule,
		FinalApprovementModule,
		FunctionalAppraiseModule,
		FunctionalKPIModule,
		FunctionalKPICommentModule,
		FunctionalObjectiveModule,
		FunctionalObjectiveCommentModule,
		IndividualDevelopmentPlanModule,
		NonOperationalAppraiseModule,
		OperationalAppraiseModule,
		QualitativeAppraiseModule,
		QualitativeKPIModule,
		QualitativeObjectiveModule,
		QuantitativeAppraiseModule,
		ScoreCellModule,
		StrategicObjectveModule,
		TargetSettingModule,
		VisionModule,
		VisionApprovedModule,
		VisionCommentModule,
		PMS_RouteModule
  ]
})
export class PMS_Module { }