import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../xcore/security/auth_guard';

import { IndividualDevelopmentPlanIndexUI } from './IndividualDevelopmentPlan/index/individualDevelopmentPlan.index';
import { DevelopmentPlanCompetencyIndexUI } from './DevelopmentPlanCompetency/index/developmentPlanCompetency.index';
import { QualitativeAppraiseIndexUI } from './QualitativeAppraise/index/qualitativeAppraise.index';
import { ScoreCellIndexUI } from './ScoreCell/index/scoreCell.index';
import { CellActionIndexUI } from './CellAction/index/cellAction.index';
import { NonOperationalAppraiseIndexUI } from './NonOperationalAppraise/index/nonOperationalAppraise.index';
import { FunctionalObjectiveIndexUI } from './FunctionalObjective/index/functionalObjective.index';
import { StrategicObjectveIndexUI } from './StrategicObjectve/index/strategicObjectve.index';
import { OperationalAppraiseIndexUI } from './OperationalAppraise/index/operationalAppraise.index';
import { CriticalIncidentTypeIndexUI } from './CriticalIncidentType/index/criticalIncidentType.index';
import { TargetSettingIndexUI } from './TargetSetting/index/targetSetting.index';
import { CriticalIncidentIndexUI } from './CriticalIncident/index/criticalIncident.index';
import { CompetencyItemIndexUI } from './CompetencyItem/index/competencyItem.index';
import { QuantitativeAppraiseIndexUI } from './QuantitativeAppraise/index/quantitativeAppraise.index';
import { FunctionalAppraiseIndexUI } from './FunctionalAppraise/index/functionalAppraise.index';
import { BehavioralKPIIndexUI } from './BehavioralKPI/index/behavioralKPI.index';
import { FinalAppraiseIndexUI } from './FinalAppraise/index/finalAppraise.index';
import { FunctionalObjectiveCommentIndexUI } from './FunctionalObjectiveComment/index/functionalObjectiveComment.index';
import { CriticalIncidentRecognitionIndexUI } from './CriticalIncidentRecognition/index/criticalIncidentRecognition.index';
import { FunctionalKPIIndexUI } from './FunctionalKPI/index/functionalKPI.index';
import { FunctionalKPICommentIndexUI } from './FunctionalKPIComment/index/functionalKPIComment.index';
import { AppraisalApproverConfigIndexUI } from './AppraisalApproverConfig/index/appraisalApproverConfig.index';
import { FinalApprovementIndexUI } from './FinalApprovement/index/finalApprovement.index';
import { CompetencyItemKPIIndexUI } from './CompetencyItemKPI/index/competencyItemKPI.index';
import { QualitativeObjectiveIndexUI } from './QualitativeObjective/index/qualitativeObjective.index';
import { ConfigQualitativeKPIIndexUI } from './ConfigQualitativeKPI/index/configQualitativeKPI.index';
import { ConfigQualitativeObjectiveIndexUI } from './ConfigQualitativeObjective/index/configQualitativeObjective.index';
import { ConfigTargetSettingIndexUI } from './ConfigTargetSetting/index/configTargetSetting.index';
import { QualitativeKPIIndexUI } from './QualitativeKPI/index/qualitativeKPI.index';
import { VisionIndexUI } from './Vision/index/vision.index';
import { BehavioralAppraiseIndexUI } from './BehavioralAppraise/index/behavioralAppraise.index';
import { VisionApprovedIndexUI } from './VisionApproved/index/visionApproved.index';
import { VisionCommentIndexUI } from './VisionComment/index/visionComment.index';
import { BehavioralObjectiveIndexUI } from './BehavioralObjective/index/behavioralObjective.index';
import { AppraiseResultIndexUI } from './AppraiseResult/index/appraiseResult.index';

const pms_routes : Routes = [
  { path: 'AppraisalApproverConfig', redirectTo: 'AppraisalApproverConfig/0' },
	{ path: 'AppraisalApproverConfig/:id', component: AppraisalApproverConfigIndexUI, canActivate: [AuthGuard], data: { title: 'AppraisalApproverConfig' }  },
	{ path: 'AppraiseResult', redirectTo: 'AppraiseResult/0' },
	{ path: 'AppraiseResult/:id', component: AppraiseResultIndexUI, canActivate: [AuthGuard], data: { title: 'AppraiseResult' }  },
	{ path: 'BehavioralAppraise', redirectTo: 'BehavioralAppraise/0' },
	{ path: 'BehavioralAppraise/:id', component: BehavioralAppraiseIndexUI, canActivate: [AuthGuard], data: { title: 'BehavioralAppraise' }  },
	{ path: 'BehavioralKPI', redirectTo: 'BehavioralKPI/0' },
	{ path: 'BehavioralKPI/:id', component: BehavioralKPIIndexUI, canActivate: [AuthGuard], data: { title: 'BehavioralKPI' }  },
	{ path: 'BehavioralObjective', redirectTo: 'BehavioralObjective/0' },
	{ path: 'BehavioralObjective/:id', component: BehavioralObjectiveIndexUI, canActivate: [AuthGuard], data: { title: 'BehavioralObjective' }  },
	{ path: 'CellAction', redirectTo: 'CellAction/0' },
	{ path: 'CellAction/:id', component: CellActionIndexUI, canActivate: [AuthGuard], data: { title: 'CellAction' }  },
	{ path: 'CompetencyItem', redirectTo: 'CompetencyItem/0' },
	{ path: 'CompetencyItem/:id', component: CompetencyItemIndexUI, canActivate: [AuthGuard], data: { title: 'CompetencyItem' }  },
	{ path: 'CompetencyItemKPI', redirectTo: 'CompetencyItemKPI/0' },
	{ path: 'CompetencyItemKPI/:id', component: CompetencyItemKPIIndexUI, canActivate: [AuthGuard], data: { title: 'CompetencyItemKPI' }  },
	{ path: 'ConfigQualitativeKPI', redirectTo: 'ConfigQualitativeKPI/0' },
	{ path: 'ConfigQualitativeKPI/:id', component: ConfigQualitativeKPIIndexUI, canActivate: [AuthGuard], data: { title: 'ConfigQualitativeKPI' }  },
	{ path: 'ConfigQualitativeObjective', redirectTo: 'ConfigQualitativeObjective/0' },
	{ path: 'ConfigQualitativeObjective/:id', component: ConfigQualitativeObjectiveIndexUI, canActivate: [AuthGuard], data: { title: 'ConfigQualitativeObjective' }  },
	{ path: 'ConfigTargetSetting', redirectTo: 'ConfigTargetSetting/0' },
	{ path: 'ConfigTargetSetting/:id', component: ConfigTargetSettingIndexUI, canActivate: [AuthGuard], data: { title: 'ConfigTargetSetting' }  },
	{ path: 'CriticalIncident', redirectTo: 'CriticalIncident/0' },
	{ path: 'CriticalIncident/:id', component: CriticalIncidentIndexUI, canActivate: [AuthGuard], data: { title: 'CriticalIncident' }  },
	{ path: 'CriticalIncidentRecognition', redirectTo: 'CriticalIncidentRecognition/0' },
	{ path: 'CriticalIncidentRecognition/:id', component: CriticalIncidentRecognitionIndexUI, canActivate: [AuthGuard], data: { title: 'CriticalIncidentRecognition' }  },
	{ path: 'CriticalIncidentType', redirectTo: 'CriticalIncidentType/0' },
	{ path: 'CriticalIncidentType/:id', component: CriticalIncidentTypeIndexUI, canActivate: [AuthGuard], data: { title: 'CriticalIncidentType' }  },
	{ path: 'DevelopmentPlanCompetency', redirectTo: 'DevelopmentPlanCompetency/0' },
	{ path: 'DevelopmentPlanCompetency/:id', component: DevelopmentPlanCompetencyIndexUI, canActivate: [AuthGuard], data: { title: 'DevelopmentPlanCompetency' }  },
	{ path: 'FinalAppraise', redirectTo: 'FinalAppraise/0' },
	{ path: 'FinalAppraise/:id', component: FinalAppraiseIndexUI, canActivate: [AuthGuard], data: { title: 'FinalAppraise' }  },
	{ path: 'FinalApprovement', redirectTo: 'FinalApprovement/0' },
	{ path: 'FinalApprovement/:id', component: FinalApprovementIndexUI, canActivate: [AuthGuard], data: { title: 'FinalApprovement' }  },
	{ path: 'FunctionalAppraise', redirectTo: 'FunctionalAppraise/0' },
	{ path: 'FunctionalAppraise/:id', component: FunctionalAppraiseIndexUI, canActivate: [AuthGuard], data: { title: 'FunctionalAppraise' }  },
	{ path: 'FunctionalKPI', redirectTo: 'FunctionalKPI/0' },
	{ path: 'FunctionalKPI/:id', component: FunctionalKPIIndexUI, canActivate: [AuthGuard], data: { title: 'FunctionalKPI' }  },
	{ path: 'FunctionalKPIComment', redirectTo: 'FunctionalKPIComment/0' },
	{ path: 'FunctionalKPIComment/:id', component: FunctionalKPICommentIndexUI, canActivate: [AuthGuard], data: { title: 'FunctionalKPIComment' }  },
	{ path: 'FunctionalObjective', redirectTo: 'FunctionalObjective/0' },
	{ path: 'FunctionalObjective/:id', component: FunctionalObjectiveIndexUI, canActivate: [AuthGuard], data: { title: 'FunctionalObjective' }  },
	{ path: 'FunctionalObjectiveComment', redirectTo: 'FunctionalObjectiveComment/0' },
	{ path: 'FunctionalObjectiveComment/:id', component: FunctionalObjectiveCommentIndexUI, canActivate: [AuthGuard], data: { title: 'FunctionalObjectiveComment' }  },
	{ path: 'IndividualDevelopmentPlan', redirectTo: 'IndividualDevelopmentPlan/0' },
	{ path: 'IndividualDevelopmentPlan/:id', component: IndividualDevelopmentPlanIndexUI, canActivate: [AuthGuard], data: { title: 'IndividualDevelopmentPlan' }  },
	{ path: 'NonOperationalAppraise', redirectTo: 'NonOperationalAppraise/0' },
	{ path: 'NonOperationalAppraise/:id', component: NonOperationalAppraiseIndexUI, canActivate: [AuthGuard], data: { title: 'NonOperationalAppraise' }  },
	{ path: 'OperationalAppraise', redirectTo: 'OperationalAppraise/0' },
	{ path: 'OperationalAppraise/:id', component: OperationalAppraiseIndexUI, canActivate: [AuthGuard], data: { title: 'OperationalAppraise' }  },
	{ path: 'QualitativeAppraise', redirectTo: 'QualitativeAppraise/0' },
	{ path: 'QualitativeAppraise/:id', component: QualitativeAppraiseIndexUI, canActivate: [AuthGuard], data: { title: 'QualitativeAppraise' }  },
	{ path: 'QualitativeKPI', redirectTo: 'QualitativeKPI/0' },
	{ path: 'QualitativeKPI/:id', component: QualitativeKPIIndexUI, canActivate: [AuthGuard], data: { title: 'QualitativeKPI' }  },
	{ path: 'QualitativeObjective', redirectTo: 'QualitativeObjective/0' },
	{ path: 'QualitativeObjective/:id', component: QualitativeObjectiveIndexUI, canActivate: [AuthGuard], data: { title: 'QualitativeObjective' }  },
	{ path: 'QuantitativeAppraise', redirectTo: 'QuantitativeAppraise/0' },
	{ path: 'QuantitativeAppraise/:id', component: QuantitativeAppraiseIndexUI, canActivate: [AuthGuard], data: { title: 'QuantitativeAppraise' }  },
	{ path: 'ScoreCell', redirectTo: 'ScoreCell/0' },
	{ path: 'ScoreCell/:id', component: ScoreCellIndexUI, canActivate: [AuthGuard], data: { title: 'ScoreCell' }  },
	{ path: 'StrategicObjectve', redirectTo: 'StrategicObjectve/0' },
	{ path: 'StrategicObjectve/:id', component: StrategicObjectveIndexUI, canActivate: [AuthGuard], data: { title: 'StrategicObjectve' }  },
	{ path: 'TargetSetting', redirectTo: 'TargetSetting/0' },
	{ path: 'TargetSetting/:id', component: TargetSettingIndexUI, canActivate: [AuthGuard], data: { title: 'TargetSetting' }  },
	{ path: 'Vision', redirectTo: 'Vision/0' },
	{ path: 'Vision/:id', component: VisionIndexUI, canActivate: [AuthGuard], data: { title: 'Vision' }  },
	{ path: 'VisionApproved', redirectTo: 'VisionApproved/0' },
	{ path: 'VisionApproved/:id', component: VisionApprovedIndexUI, canActivate: [AuthGuard], data: { title: 'VisionApproved' }  },
	{ path: 'VisionComment', redirectTo: 'VisionComment/0' },
	{ path: 'VisionComment/:id', component: VisionCommentIndexUI, canActivate: [AuthGuard], data: { title: 'VisionComment' }  },
	
];

@NgModule({
  imports: [
    RouterModule.forChild(pms_routes)
  ],
  exports: [RouterModule]
})

export class PMS_RouteModule{}

//   ****    should be add into app.routing.ts
//  { path: 'PMS', loadChildren: () => import('./Entities/PMS/pms.module').then(x => x.PMS_Module) }