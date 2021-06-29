import {NgModule} from '@angular/core';

import { AnswerTypeModule } from './AnswerType/answerType.module';
import { AnswerTypeItemModule } from './AnswerTypeItem/answerTypeItem.module';
import { AssessmentModule } from './Assessment/assessment.module';
import { AssessmentCoachingModule } from './AssessmentCoaching/assessmentCoaching.module';
import { AssessmentScoreModule } from './AssessmentScore/assessmentScore.module';
import { AssessmentTrainingModule } from './AssessmentTraining/assessmentTraining.module';
import { AssessmentTypeModule } from './AssessmentType/assessmentType.module';
import { AssessorModule } from './Assessor/assessor.module';
import { AssessorConnectionLineModule } from './AssessorConnectionLine/assessorConnectionLine.module';
import { CoachModule } from './Coach/coach.module';
import { CoachConnectionLineModule } from './CoachConnectionLine/coachConnectionLine.module';
import { CoachingModule } from './Coaching/coaching.module';
import { CoachingQuestionaryModule } from './CoachingQuestionary/coachingQuestionary.module';
import { CoachingQuestionaryAnsweredModule } from './CoachingQuestionaryAnswered/coachingQuestionaryAnswered.module';
import { CoachingQuestionaryDetailModule } from './CoachingQuestionaryDetail/coachingQuestionaryDetail.module';
import { CoachingSessionModule } from './CoachingSession/coachingSession.module';
import { ConclusionModule } from './Conclusion/conclusion.module';
import { ConclusionTypeModule } from './ConclusionType/conclusionType.module';
import { DevelopmentGoalModule } from './DevelopmentGoal/developmentGoal.module';
import { FeedbackSessionModule } from './FeedbackSession/feedbackSession.module';
import { PromotionAssessmentModule } from './PromotionAssessment/promotionAssessment.module';
import { PromotionResultModule } from './PromotionResult/promotionResult.module';
import { QuestionaryItemModule } from './QuestionaryItem/questionaryItem.module';
import { QuestionaryTypeModule } from './QuestionaryType/questionaryType.module';
import { RotationAssessmentModule } from './RotationAssessment/rotationAssessment.module';
import { LAD_RouteModule } from './lad.route.module';

@NgModule({
  declarations: [],
  imports: [
    AnswerTypeModule,
		AnswerTypeItemModule,
		AssessmentModule,
		AssessmentCoachingModule,
		AssessmentScoreModule,
		AssessmentTrainingModule,
		AssessmentTypeModule,
		AssessorModule,
		AssessorConnectionLineModule,
		CoachModule,
		CoachConnectionLineModule,
		CoachingModule,
		CoachingQuestionaryModule,
		CoachingQuestionaryAnsweredModule,
		CoachingQuestionaryDetailModule,
		CoachingSessionModule,
		ConclusionModule,
		ConclusionTypeModule,
		DevelopmentGoalModule,
		FeedbackSessionModule,
		PromotionAssessmentModule,
		PromotionResultModule,
		QuestionaryItemModule,
		QuestionaryTypeModule,
		RotationAssessmentModule,
		LAD_RouteModule
  ],
  exports: [
    AnswerTypeModule,
		AnswerTypeItemModule,
		AssessmentModule,
		AssessmentCoachingModule,
		AssessmentScoreModule,
		AssessmentTrainingModule,
		AssessmentTypeModule,
		AssessorModule,
		AssessorConnectionLineModule,
		CoachModule,
		CoachConnectionLineModule,
		CoachingModule,
		CoachingQuestionaryModule,
		CoachingQuestionaryAnsweredModule,
		CoachingQuestionaryDetailModule,
		CoachingSessionModule,
		ConclusionModule,
		ConclusionTypeModule,
		DevelopmentGoalModule,
		FeedbackSessionModule,
		PromotionAssessmentModule,
		PromotionResultModule,
		QuestionaryItemModule,
		QuestionaryTypeModule,
		RotationAssessmentModule,
		LAD_RouteModule
  ]
})
export class LAD_Module { }