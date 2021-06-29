import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../xcore/security/auth_guard';

import { QuestionaryItemIndexUI } from './QuestionaryItem/index/questionaryItem.index';
import { QuestionaryTypeIndexUI } from './QuestionaryType/index/questionaryType.index';
import { RotationAssessmentIndexUI } from './RotationAssessment/index/rotationAssessment.index';
import { AnswerTypeIndexUI } from './AnswerType/index/answerType.index';
import { AnswerTypeItemIndexUI } from './AnswerTypeItem/index/answerTypeItem.index';
import { AssessmentIndexUI } from './Assessment/index/assessment.index';
import { AssessmentCoachingIndexUI } from './AssessmentCoaching/index/assessmentCoaching.index';
import { AssessmentScoreIndexUI } from './AssessmentScore/index/assessmentScore.index';
import { AssessmentTrainingIndexUI } from './AssessmentTraining/index/assessmentTraining.index';
import { AssessmentTypeIndexUI } from './AssessmentType/index/assessmentType.index';
import { AssessorIndexUI } from './Assessor/index/assessor.index';
import { AssessorConnectionLineIndexUI } from './AssessorConnectionLine/index/assessorConnectionLine.index';
import { CoachIndexUI } from './Coach/index/coach.index';
import { CoachConnectionLineIndexUI } from './CoachConnectionLine/index/coachConnectionLine.index';
import { CoachingIndexUI } from './Coaching/index/coaching.index';
import { CoachingQuestionaryIndexUI } from './CoachingQuestionary/index/coachingQuestionary.index';
import { CoachingQuestionaryAnsweredIndexUI } from './CoachingQuestionaryAnswered/index/coachingQuestionaryAnswered.index';
import { CoachingQuestionaryDetailIndexUI } from './CoachingQuestionaryDetail/index/coachingQuestionaryDetail.index';
import { CoachingSessionIndexUI } from './CoachingSession/index/coachingSession.index';
import { ConclusionIndexUI } from './Conclusion/index/conclusion.index';
import { ConclusionTypeIndexUI } from './ConclusionType/index/conclusionType.index';
import { DevelopmentGoalIndexUI } from './DevelopmentGoal/index/developmentGoal.index';
import { FeedbackSessionIndexUI } from './FeedbackSession/index/feedbackSession.index';
import { PromotionAssessmentIndexUI } from './PromotionAssessment/index/promotionAssessment.index';
import { PromotionResultIndexUI } from './PromotionResult/index/promotionResult.index';

const lad_routes : Routes = [
  { path: 'AnswerType', redirectTo: 'AnswerType/0' },
	{ path: 'AnswerType/:id', component: AnswerTypeIndexUI, canActivate: [AuthGuard], data: { title: 'AnswerType' }  },
	{ path: 'AnswerTypeItem', redirectTo: 'AnswerTypeItem/0' },
	{ path: 'AnswerTypeItem/:id', component: AnswerTypeItemIndexUI, canActivate: [AuthGuard], data: { title: 'AnswerTypeItem' }  },
	{ path: 'Assessment', redirectTo: 'Assessment/0' },
	{ path: 'Assessment/:id', component: AssessmentIndexUI, canActivate: [AuthGuard], data: { title: 'Assessment' }  },
	{ path: 'AssessmentCoaching', redirectTo: 'AssessmentCoaching/0' },
	{ path: 'AssessmentCoaching/:id', component: AssessmentCoachingIndexUI, canActivate: [AuthGuard], data: { title: 'AssessmentCoaching' }  },
	{ path: 'AssessmentScore', redirectTo: 'AssessmentScore/0' },
	{ path: 'AssessmentScore/:id', component: AssessmentScoreIndexUI, canActivate: [AuthGuard], data: { title: 'AssessmentScore' }  },
	{ path: 'AssessmentTraining', redirectTo: 'AssessmentTraining/0' },
	{ path: 'AssessmentTraining/:id', component: AssessmentTrainingIndexUI, canActivate: [AuthGuard], data: { title: 'AssessmentTraining' }  },
	{ path: 'AssessmentType', redirectTo: 'AssessmentType/0' },
	{ path: 'AssessmentType/:id', component: AssessmentTypeIndexUI, canActivate: [AuthGuard], data: { title: 'AssessmentType' }  },
	{ path: 'Assessor', redirectTo: 'Assessor/0' },
	{ path: 'Assessor/:id', component: AssessorIndexUI, canActivate: [AuthGuard], data: { title: 'Assessor' }  },
	{ path: 'AssessorConnectionLine', redirectTo: 'AssessorConnectionLine/0' },
	{ path: 'AssessorConnectionLine/:id', component: AssessorConnectionLineIndexUI, canActivate: [AuthGuard], data: { title: 'AssessorConnectionLine' }  },
	{ path: 'Coach', redirectTo: 'Coach/0' },
	{ path: 'Coach/:id', component: CoachIndexUI, canActivate: [AuthGuard], data: { title: 'Coach' }  },
	{ path: 'CoachConnectionLine', redirectTo: 'CoachConnectionLine/0' },
	{ path: 'CoachConnectionLine/:id', component: CoachConnectionLineIndexUI, canActivate: [AuthGuard], data: { title: 'CoachConnectionLine' }  },
	{ path: 'Coaching', redirectTo: 'Coaching/0' },
	{ path: 'Coaching/:id', component: CoachingIndexUI, canActivate: [AuthGuard], data: { title: 'Coaching' }  },
	{ path: 'CoachingQuestionary', redirectTo: 'CoachingQuestionary/0' },
	{ path: 'CoachingQuestionary/:id', component: CoachingQuestionaryIndexUI, canActivate: [AuthGuard], data: { title: 'CoachingQuestionary' }  },
	{ path: 'CoachingQuestionaryAnswered', redirectTo: 'CoachingQuestionaryAnswered/0' },
	{ path: 'CoachingQuestionaryAnswered/:id', component: CoachingQuestionaryAnsweredIndexUI, canActivate: [AuthGuard], data: { title: 'CoachingQuestionaryAnswered' }  },
	{ path: 'CoachingQuestionaryDetail', redirectTo: 'CoachingQuestionaryDetail/0' },
	{ path: 'CoachingQuestionaryDetail/:id', component: CoachingQuestionaryDetailIndexUI, canActivate: [AuthGuard], data: { title: 'CoachingQuestionaryDetail' }  },
	{ path: 'CoachingSession', redirectTo: 'CoachingSession/0' },
	{ path: 'CoachingSession/:id', component: CoachingSessionIndexUI, canActivate: [AuthGuard], data: { title: 'CoachingSession' }  },
	{ path: 'Conclusion', redirectTo: 'Conclusion/0' },
	{ path: 'Conclusion/:id', component: ConclusionIndexUI, canActivate: [AuthGuard], data: { title: 'Conclusion' }  },
	{ path: 'ConclusionType', redirectTo: 'ConclusionType/0' },
	{ path: 'ConclusionType/:id', component: ConclusionTypeIndexUI, canActivate: [AuthGuard], data: { title: 'ConclusionType' }  },
	{ path: 'DevelopmentGoal', redirectTo: 'DevelopmentGoal/0' },
	{ path: 'DevelopmentGoal/:id', component: DevelopmentGoalIndexUI, canActivate: [AuthGuard], data: { title: 'DevelopmentGoal' }  },
	{ path: 'FeedbackSession', redirectTo: 'FeedbackSession/0' },
	{ path: 'FeedbackSession/:id', component: FeedbackSessionIndexUI, canActivate: [AuthGuard], data: { title: 'FeedbackSession' }  },
	{ path: 'PromotionAssessment', redirectTo: 'PromotionAssessment/0' },
	{ path: 'PromotionAssessment/:id', component: PromotionAssessmentIndexUI, canActivate: [AuthGuard], data: { title: 'PromotionAssessment' }  },
	{ path: 'PromotionResult', redirectTo: 'PromotionResult/0' },
	{ path: 'PromotionResult/:id', component: PromotionResultIndexUI, canActivate: [AuthGuard], data: { title: 'PromotionResult' }  },
	{ path: 'QuestionaryItem', redirectTo: 'QuestionaryItem/0' },
	{ path: 'QuestionaryItem/:id', component: QuestionaryItemIndexUI, canActivate: [AuthGuard], data: { title: 'QuestionaryItem' }  },
	{ path: 'QuestionaryType', redirectTo: 'QuestionaryType/0' },
	{ path: 'QuestionaryType/:id', component: QuestionaryTypeIndexUI, canActivate: [AuthGuard], data: { title: 'QuestionaryType' }  },
	{ path: 'RotationAssessment', redirectTo: 'RotationAssessment/0' },
	{ path: 'RotationAssessment/:id', component: RotationAssessmentIndexUI, canActivate: [AuthGuard], data: { title: 'RotationAssessment' }  },
	
];

@NgModule({
  imports: [
    RouterModule.forChild(lad_routes)
  ],
  exports: [RouterModule]
})

export class LAD_RouteModule{}

//   ****    should be add into app.routing.ts
//  { path: 'LAD', loadChildren: () => import('./Entities/LAD/lad.module').then(x => x.LAD_Module) }