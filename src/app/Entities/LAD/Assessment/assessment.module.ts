import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../../xcore/shared/shared.module';
import { LogViewerModule } from '../../../../xcore/tools/ui/log-viewer/logViewer.Module';


import { AssessmentService } from './assessment.service';
import { AssessmentServiceCollection } from './assessment.service.collection';

import { AssessmentIndexUI } from './index/assessment.index';
import { Assessment_ModuleFunc } from './assessment.module.func';
import { Assessment_ModuleMaster } from './assessment.module.master';


import { AssessmentCoaching_ModuleFunc } from '../AssessmentCoaching/assessmentCoaching.module.func';
import { AssessmentCoaching_ModuleMaster } from '../AssessmentCoaching/assessmentCoaching.module.master';
import { AssessmentScore_ModuleFunc } from '../AssessmentScore/assessmentScore.module.func';
import { AssessmentScore_ModuleMaster } from '../AssessmentScore/assessmentScore.module.master';
import { AssessmentTraining_ModuleFunc } from '../AssessmentTraining/assessmentTraining.module.func';
import { AssessmentTraining_ModuleMaster } from '../AssessmentTraining/assessmentTraining.module.master';
import { CoachingQuestionary_ModuleFunc } from '../CoachingQuestionary/coachingQuestionary.module.func';
import { CoachingQuestionary_ModuleMaster } from '../CoachingQuestionary/coachingQuestionary.module.master';
import { Conclusion_ModuleFunc } from '../Conclusion/conclusion.module.func';
import { Conclusion_ModuleMaster } from '../Conclusion/conclusion.module.master';
import { DevelopmentGoal_ModuleFunc } from '../DevelopmentGoal/developmentGoal.module.func';
import { DevelopmentGoal_ModuleMaster } from '../DevelopmentGoal/developmentGoal.module.master';
import { FeedbackSession_ModuleFunc } from '../FeedbackSession/feedbackSession.module.func';
import { FeedbackSession_ModuleMaster } from '../FeedbackSession/feedbackSession.module.master';
import { PromotionAssessment_ModuleFunc } from '../PromotionAssessment/promotionAssessment.module.func';
import { PromotionAssessment_ModuleMaster } from '../PromotionAssessment/promotionAssessment.module.master';
import { RotationAssessment_ModuleFunc } from '../RotationAssessment/rotationAssessment.module.func';
import { RotationAssessment_ModuleMaster } from '../RotationAssessment/rotationAssessment.module.master';

@NgModule({
  declarations: [
    AssessmentIndexUI,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    LogViewerModule,
    Assessment_ModuleMaster,
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
    AssessmentIndexUI,
		Assessment_ModuleMaster,
  ],
  providers: [
    // AssessmentService,
    // AssessmentServiceCollection
  ]
})
export class AssessmentModule {}