import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { CompetencyItem } from './competencyItem';

import { BehavioralObjective } from '../BehavioralObjective/behavioralObjective';
import { AssessmentScore } from '../../LAD/AssessmentScore/assessmentScore';
import { CompetencyItemKPI } from '../CompetencyItemKPI/competencyItemKPI';
import { DevelopmentPlanCompetency } from '../DevelopmentPlanCompetency/developmentPlanCompetency';


@Injectable({ providedIn: 'root' })
export class CompetencyItemServiceCollection extends ServiceCollection<CompetencyItem> {

  constructor(public API_Operation: API_Operation<CompetencyItem>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfAssessmentScore(competencyItem: CompetencyItem, assessmentScore: AssessmentScore = AssessmentScore.SeekInstance()): Promise<AssessmentScore[]> {
    return super.CollectionOf<AssessmentScore>(competencyItem, assessmentScore);
  }

  CollectionOfBehavioralObjective(competencyItem: CompetencyItem, behavioralObjective: BehavioralObjective = BehavioralObjective.SeekInstance()): Promise<BehavioralObjective[]> {
    return super.CollectionOf<BehavioralObjective>(competencyItem, behavioralObjective);
  }

  CollectionOfCompetencyItemKPI(competencyItem: CompetencyItem, competencyItemKPI: CompetencyItemKPI = CompetencyItemKPI.SeekInstance()): Promise<CompetencyItemKPI[]> {
    return super.CollectionOf<CompetencyItemKPI>(competencyItem, competencyItemKPI);
  }

  CollectionOfDevelopmentPlanCompetency(competencyItem: CompetencyItem, developmentPlanCompetency: DevelopmentPlanCompetency = DevelopmentPlanCompetency.SeekInstance()): Promise<DevelopmentPlanCompetency[]> {
    return super.CollectionOf<DevelopmentPlanCompetency>(competencyItem, developmentPlanCompetency);
  }

	//endregion
}