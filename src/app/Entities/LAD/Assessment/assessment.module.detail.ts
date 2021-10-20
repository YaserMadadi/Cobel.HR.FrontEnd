import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';

import { AssessmentService } from './assessment.service';
import { AssessmentServiceCollection } from './assessment.service.collection';


import { Assessment_AssessmentCoaching_DetailUI } from './detail/assessment-assessmentCoaching.detail';
import { AssessmentCoaching_ModuleMaster } from '../AssessmentCoaching/assessmentCoaching.module.master';
import { Assessment_AssessmentScore_DetailUI } from './detail/assessment-assessmentScore.detail';
import { AssessmentScore_ModuleMaster } from '../AssessmentScore/assessmentScore.module.master';
import { Assessment_AssessmentTraining_DetailUI } from './detail/assessment-assessmentTraining.detail';
import { AssessmentTraining_ModuleMaster } from '../AssessmentTraining/assessmentTraining.module.master';
import { Assessment_CoachingQuestionary_DetailUI } from './detail/assessment-coachingQuestionary.detail';
import { CoachingQuestionary_ModuleMaster } from '../CoachingQuestionary/coachingQuestionary.module.master';
import { Assessment_Conclusion_DetailUI } from './detail/assessment-conclusion.detail';
import { Conclusion_ModuleMaster } from '../Conclusion/conclusion.module.master';
import { Assessment_DevelopmentGoal_DetailUI } from './detail/assessment-developmentGoal.detail';
import { DevelopmentGoal_ModuleMaster } from '../DevelopmentGoal/developmentGoal.module.master';
import { Assessment_FeedbackSession_DetailUI } from './detail/assessment-feedbackSession.detail';
import { FeedbackSession_ModuleMaster } from '../FeedbackSession/feedbackSession.module.master';
import { Assessment_PromotionAssessment_DetailUI } from './detail/assessment-promotionAssessment.detail';
import { PromotionAssessment_ModuleMaster } from '../PromotionAssessment/promotionAssessment.module.master';
import { Assessment_RotationAssessment_DetailUI } from './detail/assessment-rotationAssessment.detail';
import { RotationAssessment_ModuleMaster } from '../RotationAssessment/rotationAssessment.module.master';

@NgModule({
  declarations: [
    Assessment_AssessmentCoaching_DetailUI,
		Assessment_AssessmentScore_DetailUI,
		Assessment_AssessmentTraining_DetailUI,
		Assessment_CoachingQuestionary_DetailUI,
		Assessment_Conclusion_DetailUI,
		Assessment_DevelopmentGoal_DetailUI,
		Assessment_FeedbackSession_DetailUI,
		Assessment_PromotionAssessment_DetailUI,
		Assessment_RotationAssessment_DetailUI
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
		AssessmentCoaching_ModuleMaster,
		AssessmentScore_ModuleMaster,
		AssessmentTraining_ModuleMaster,
		CoachingQuestionary_ModuleMaster,
		Conclusion_ModuleMaster,
		DevelopmentGoal_ModuleMaster,
		FeedbackSession_ModuleMaster,
		PromotionAssessment_ModuleMaster,
		RotationAssessment_ModuleMaster,
  ],
  exports: [
    Assessment_AssessmentCoaching_DetailUI,
		Assessment_AssessmentScore_DetailUI,
		Assessment_AssessmentTraining_DetailUI,
		Assessment_CoachingQuestionary_DetailUI,
		Assessment_Conclusion_DetailUI,
		Assessment_DevelopmentGoal_DetailUI,
		Assessment_FeedbackSession_DetailUI,
		Assessment_PromotionAssessment_DetailUI,
		Assessment_RotationAssessment_DetailUI
  ],
  
})
export class Assessment_ModuleDetail { }