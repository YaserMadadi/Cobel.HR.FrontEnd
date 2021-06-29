import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Assessment } from '../assessment';
import { AssessmentService } from '../assessment.service';

import { FeedbackSession } from '../../FeedbackSession/feedbackSession';
import { FeedbackSessionMasterUI } from '../../FeedbackSession/master/feedbackSession.master';
import { FeedbackSessionEditUI } from '../../FeedbackSession/edit/feedbackSession.edit';
import { FeedbackSessionDeleteUI } from '../../FeedbackSession/delete/feedbackSession.delete';



@Component({
  selector: 'assessment-feedbackSession-detail',
  templateUrl: './assessment-feedbackSession.detail.html',
  styleUrls: ['./assessment-feedbackSession.detail.css'],
  providers: [AssessmentService]
}) 

@Injectable()
export class Assessment_FeedbackSession_DetailUI extends DetailView<Assessment> {

  constructor(private assessmentService: AssessmentService) {
    super(assessmentService);
  }

  public FeedbackSessionList : FeedbackSession[] = [];
  
  public currentFeedbackSession : FeedbackSession = new FeedbackSession();

  private assessment: Assessment = new Assessment();

  @Input()
  public set Assessment(value: Assessment) {
    this.assessment = value;
    this.onReload();
  }

  public get Assessment(): Assessment { return this.assessment }

  public onReload(){
    if (Assessment.NotConfirm(this.assessment))
      return;
    this.assessmentService
      .ServiceCollection
      .CollectionOfFeedbackSession(this.assessment)
      .then(feedbackSessionList => {
        this.FeedbackSessionList = feedbackSessionList;
        this.currentFeedbackSession = new FeedbackSession();
      });
  }

  public onSelect(i: number) {
    this.currentFeedbackSession = this.FeedbackSessionList[i];
    if (FeedbackSession.NotConfirm(this.currentFeedbackSession))
      this.currentFeedbackSession = new FeedbackSession();
  }

  public onDblClicked(masterUI: FeedbackSessionMasterUI) {
    if (FeedbackSession.NotConfirm(this.currentFeedbackSession))
      return;
    masterUI.ShowDialog(this.currentFeedbackSession);
  }

  public onAdd(editUI: FeedbackSessionEditUI) {
    editUI.Assessment = this.assessment;
    editUI.ShowDialog(new FeedbackSession());
  }

  public onEdit(editUI: FeedbackSessionEditUI) {
    if (FeedbackSession.NotConfirm(this.currentFeedbackSession))
      return;
    editUI.ShowDialog(this.currentFeedbackSession);
  }

  public onDelete(deleteUI: FeedbackSessionDeleteUI) {
    if (FeedbackSession.NotConfirm(this.currentFeedbackSession))
      return;
    deleteUI.ShowDialog(this.currentFeedbackSession);
  }

  public onEditModal_Closed(feedbackSession: FeedbackSession) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}