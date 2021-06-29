import { Injectable } from '@angular/core';

import { API_Operation } from '../../../../xcore/service/api.operation';
import { ServiceCollection } from '../../../../xcore/service/base/service.collection';

import { Assessment } from './assessment';

import { PromotionAssessment } from '../PromotionAssessment/promotionAssessment';
import { FeedbackSession } from '../FeedbackSession/feedbackSession';
import { DevelopmentGoal } from '../DevelopmentGoal/developmentGoal';
import { Conclusion } from '../Conclusion/conclusion';
import { CoachingQuestionary } from '../CoachingQuestionary/coachingQuestionary';
import { AssessmentTraining } from '../AssessmentTraining/assessmentTraining';
import { AssessmentScore } from '../AssessmentScore/assessmentScore';
import { AssessmentCoaching } from '../AssessmentCoaching/assessmentCoaching';
import { RotationAssessment } from '../RotationAssessment/rotationAssessment';


@Injectable({ providedIn: 'root' })
export class AssessmentServiceCollection extends ServiceCollection<Assessment> {

  constructor(public API_Operation: API_Operation<Assessment>) {
        super(API_Operation);
    }

  //region CollectionMethods

  CollectionOfAssessmentCoaching(assessment: Assessment, assessmentCoaching: AssessmentCoaching = AssessmentCoaching.SeekInstance()): Promise<AssessmentCoaching[]> {
    return super.CollectionOf<AssessmentCoaching>(assessment, assessmentCoaching);
  }

  CollectionOfAssessmentScore(assessment: Assessment, assessmentScore: AssessmentScore = AssessmentScore.SeekInstance()): Promise<AssessmentScore[]> {
    return super.CollectionOf<AssessmentScore>(assessment, assessmentScore);
  }

  CollectionOfAssessmentTraining(assessment: Assessment, assessmentTraining: AssessmentTraining = AssessmentTraining.SeekInstance()): Promise<AssessmentTraining[]> {
    return super.CollectionOf<AssessmentTraining>(assessment, assessmentTraining);
  }

  CollectionOfCoachingQuestionary(assessment: Assessment, coachingQuestionary: CoachingQuestionary = CoachingQuestionary.SeekInstance()): Promise<CoachingQuestionary[]> {
    return super.CollectionOf<CoachingQuestionary>(assessment, coachingQuestionary);
  }

  CollectionOfConclusion(assessment: Assessment, conclusion: Conclusion = Conclusion.SeekInstance()): Promise<Conclusion[]> {
    return super.CollectionOf<Conclusion>(assessment, conclusion);
  }

  CollectionOfDevelopmentGoal(assessment: Assessment, developmentGoal: DevelopmentGoal = DevelopmentGoal.SeekInstance()): Promise<DevelopmentGoal[]> {
    return super.CollectionOf<DevelopmentGoal>(assessment, developmentGoal);
  }

  CollectionOfFeedbackSession(assessment: Assessment, feedbackSession: FeedbackSession = FeedbackSession.SeekInstance()): Promise<FeedbackSession[]> {
    return super.CollectionOf<FeedbackSession>(assessment, feedbackSession);
  }

  CollectionOfPromotionAssessment(assessment: Assessment, promotionAssessment: PromotionAssessment = PromotionAssessment.SeekInstance()): Promise<PromotionAssessment[]> {
    return super.CollectionOf<PromotionAssessment>(assessment, promotionAssessment);
  }

  CollectionOfRotationAssessment(assessment: Assessment, rotationAssessment: RotationAssessment = RotationAssessment.SeekInstance()): Promise<RotationAssessment[]> {
    return super.CollectionOf<RotationAssessment>(assessment, rotationAssessment);
  }

	//endregion
}