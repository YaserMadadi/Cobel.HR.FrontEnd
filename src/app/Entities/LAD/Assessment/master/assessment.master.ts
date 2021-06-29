import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';
import { AssessmentDeleteUI } from '../delete/assessment.delete';
import { AssessmentEditUI } from '../edit/assessment.edit';
import { PromotionAssessmentService } from '../../PromotionAssessment/promotionAssessment.service';
import { FeedbackSessionService } from '../../FeedbackSession/feedbackSession.service';
import { DevelopmentGoalService } from '../../DevelopmentGoal/developmentGoal.service';
import { ConclusionService } from '../../Conclusion/conclusion.service';
import { CoachingQuestionaryService } from '../../CoachingQuestionary/coachingQuestionary.service';
import { AssessmentTrainingService } from '../../AssessmentTraining/assessmentTraining.service';
import { AssessmentScoreService } from '../../AssessmentScore/assessmentScore.service';
import { AssessmentCoachingService } from '../../AssessmentCoaching/assessmentCoaching.service';
import { RotationAssessmentService } from '../../RotationAssessment/rotationAssessment.service';



@Component({
  selector: 'lad-assessment-master',
  templateUrl: './assessment.master.html',
  styleUrls: ['./assessment.master.css'],
  providers: [
    AssessmentService,
    PromotionAssessmentService,
		FeedbackSessionService,
		DevelopmentGoalService,
		ConclusionService,
		CoachingQuestionaryService,
		AssessmentTrainingService,
		AssessmentScoreService,
		AssessmentCoachingService,
		RotationAssessmentService,
  ]
})
export class AssessmentMasterUI extends MasterModal<Assessment> {

  constructor(private assessmentService: AssessmentService) {
    super(assessmentService);
  }
}