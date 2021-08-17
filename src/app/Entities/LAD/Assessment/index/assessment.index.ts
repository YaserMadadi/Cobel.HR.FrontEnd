import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';
import { AssessmentMasterUI } from '../master/assessment.master';
import { AssessmentEditUI } from '../edit/assessment.edit';
import { AssessmentDeleteUI } from '../delete/assessment.delete';

import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { AssessmentType } from '../../AssessmentType/assessmentType';
import { Assessor } from '../../Assessor/assessor';
import { AssessorEditUI } from '../../Assessor/edit/assessor.edit';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PromotionAssessmentEditUI } from '../../PromotionAssessment/edit/promotionAssessment.edit';
import { PromotionAssessment } from '../../PromotionAssessment/promotionAssessment';
import { FeedbackSessionEditUI } from '../../FeedbackSession/edit/feedbackSession.edit';
import { FeedbackSession } from '../../FeedbackSession/feedbackSession';
import { DevelopmentGoalEditUI } from '../../DevelopmentGoal/edit/developmentGoal.edit';
import { DevelopmentGoal } from '../../DevelopmentGoal/developmentGoal';
import { ConclusionEditUI } from '../../Conclusion/edit/conclusion.edit';
import { Conclusion } from '../../Conclusion/conclusion';
import { CoachingQuestionaryEditUI } from '../../CoachingQuestionary/edit/coachingQuestionary.edit';
import { CoachingQuestionary } from '../../CoachingQuestionary/coachingQuestionary';
import { AssessmentTrainingEditUI } from '../../AssessmentTraining/edit/assessmentTraining.edit';
import { AssessmentTraining } from '../../AssessmentTraining/assessmentTraining';
import { AssessmentScoreEditUI } from '../../AssessmentScore/edit/assessmentScore.edit';
import { AssessmentScore } from '../../AssessmentScore/assessmentScore';
import { AssessmentCoachingEditUI } from '../../AssessmentCoaching/edit/assessmentCoaching.edit';
import { AssessmentCoaching } from '../../AssessmentCoaching/assessmentCoaching';
import { RotationAssessmentEditUI } from '../../RotationAssessment/edit/rotationAssessment.edit';
import { RotationAssessment } from '../../RotationAssessment/rotationAssessment';



@Component({
  selector: 'lad-assessment-index',
  templateUrl: './assessment.index.html',
  styleUrls: ['./assessment.index.css']
})
export class AssessmentIndexUI extends IndexView<Assessment> implements AfterViewInit, IIndexView<Assessment> {

  constructor(private assessmentService: AssessmentService) {
    super(assessmentService);
    this.filterInstance = Assessment.SeekInstance();
    this.currentInstance = new Assessment();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region PromotionAssessment

  public promotionAssessment_Clicked(promotionAssessmentEditUI: PromotionAssessmentEditUI) {
    promotionAssessmentEditUI.Assessment = this.currentInstance;
    promotionAssessmentEditUI.ShowDialog(new PromotionAssessment());
  }
                    
  public promotionAssessmentEditUI_Closed(promotionAssessment: PromotionAssessment) {
    if (!promotionAssessment)
      return;
    this.onRefresh();
  }
  
  //#endregion PromotionAssessment

  //#region FeedbackSession

  public feedbackSession_Clicked(feedbackSessionEditUI: FeedbackSessionEditUI) {
    feedbackSessionEditUI.Assessment = this.currentInstance;
    feedbackSessionEditUI.ShowDialog(new FeedbackSession());
  }
                    
  public feedbackSessionEditUI_Closed(feedbackSession: FeedbackSession) {
    if (!feedbackSession)
      return;
    this.onRefresh();
  }
  
  //#endregion FeedbackSession

  //#region DevelopmentGoal

  public developmentGoal_Clicked(developmentGoalEditUI: DevelopmentGoalEditUI) {
    developmentGoalEditUI.Assessment = this.currentInstance;
    developmentGoalEditUI.ShowDialog(new DevelopmentGoal());
  }
                    
  public developmentGoalEditUI_Closed(developmentGoal: DevelopmentGoal) {
    if (!developmentGoal)
      return;
    this.onRefresh();
  }
  
  //#endregion DevelopmentGoal

  //#region Conclusion

  public conclusion_Clicked(conclusionEditUI: ConclusionEditUI) {
    conclusionEditUI.Assessment = this.currentInstance;
    conclusionEditUI.ShowDialog(new Conclusion());
  }
                    
  public conclusionEditUI_Closed(conclusion: Conclusion) {
    if (!conclusion)
      return;
    this.onRefresh();
  }
  
  //#endregion Conclusion

  //#region CoachingQuestionary

  public coachingQuestionary_Clicked(coachingQuestionaryEditUI: CoachingQuestionaryEditUI) {
    coachingQuestionaryEditUI.Assessment = this.currentInstance;
    coachingQuestionaryEditUI.ShowDialog(new CoachingQuestionary());
  }
                    
  public coachingQuestionaryEditUI_Closed(coachingQuestionary: CoachingQuestionary) {
    if (!coachingQuestionary)
      return;
    this.onRefresh();
  }
  
  //#endregion CoachingQuestionary

  //#region AssessmentTraining

  public assessmentTraining_Clicked(assessmentTrainingEditUI: AssessmentTrainingEditUI) {
    assessmentTrainingEditUI.Assessment = this.currentInstance;
    assessmentTrainingEditUI.ShowDialog(new AssessmentTraining());
  }
                    
  public assessmentTrainingEditUI_Closed(assessmentTraining: AssessmentTraining) {
    if (!assessmentTraining)
      return;
    this.onRefresh();
  }
  
  //#endregion AssessmentTraining

  //#region AssessmentScore

  public assessmentScore_Clicked(assessmentScoreEditUI: AssessmentScoreEditUI) {
    assessmentScoreEditUI.Assessment = this.currentInstance;
    assessmentScoreEditUI.ShowDialog(new AssessmentScore());
  }
                    
  public assessmentScoreEditUI_Closed(assessmentScore: AssessmentScore) {
    if (!assessmentScore)
      return;
    this.onRefresh();
  }
  
  //#endregion AssessmentScore

  //#region AssessmentCoaching

  public assessmentCoaching_Clicked(assessmentCoachingEditUI: AssessmentCoachingEditUI) {
    assessmentCoachingEditUI.Assessment = this.currentInstance;
    assessmentCoachingEditUI.ShowDialog(new AssessmentCoaching());
  }
                    
  public assessmentCoachingEditUI_Closed(assessmentCoaching: AssessmentCoaching) {
    if (!assessmentCoaching)
      return;
    this.onRefresh();
  }
  
  //#endregion AssessmentCoaching

  //#region RotationAssessment

  public rotationAssessment_Clicked(rotationAssessmentEditUI: RotationAssessmentEditUI) {
    rotationAssessmentEditUI.Assessment = this.currentInstance;
    rotationAssessmentEditUI.ShowDialog(new RotationAssessment());
  }
                    
  public rotationAssessmentEditUI_Closed(rotationAssessment: RotationAssessment) {
    if (!rotationAssessment)
      return;
    this.onRefresh();
  }
  
  //#endregion RotationAssessment


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(assessmentEditUI: AssessmentEditUI){
    assessmentEditUI.ShowDialog(new Assessment());
  }

  resetFilter() {
    this.filterInstance = Assessment.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(assessment: Assessment) {
    this.onRefresh();
    this.currentInstance = new Assessment();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}