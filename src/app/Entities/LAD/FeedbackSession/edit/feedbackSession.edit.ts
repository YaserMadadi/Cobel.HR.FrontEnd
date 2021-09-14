import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { FeedbackSession } from '../feedbackSession';
import { FeedbackSessionService } from '../feedbackSession.service';
import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';



@Component({
  selector: 'lad-feedbackSession-edit',
  templateUrl: './feedbackSession.edit.html',
  styleUrls: ['./feedbackSession.edit.css']
})
export class FeedbackSessionEditUI extends EditModal<FeedbackSession> implements IEditModal<FeedbackSession>  {
  
  constructor(private feedbackSessionService: FeedbackSessionService) {
    super(feedbackSessionService); 
    this.currentInstance = new FeedbackSession();
  }

  //#region Foreign Entities
	
	//#region -- Assessment --

  assessmentComponent : ForeignComponent<Assessment> = new ForeignComponent<Assessment>(this.feedbackSessionService.AssessmentService);

  @Input()
  public set Assessment(value: Assessment) {
    this.currentInstance.assessment = this.assessmentComponent.instance = value;
  }  


  //#endregion -- Assessment --
	//#endregion

  @ViewChild('feedbackSessionEditUI')
  private feedbackSessionEditUI: NgForm;

  Init(feedbackSession: FeedbackSession = new FeedbackSession()) {
    if (feedbackSession.isNew)
      this.feedbackSessionEditUI.reset();
    this.InitFeedbackSession(feedbackSession);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitFeedbackSession(feedbackSession: FeedbackSession){
    this.currentInstance = this.service.CreateInstance();
    if (!feedbackSession.isNew) {
      // Fixed Properties : those you want to not Changable.
      this.assessmentComponent.instance = feedbackSession.assessment;
    } else {
      feedbackSession.assessment = this.assessmentComponent.instance;
    }
    this.currentInstance = feedbackSession;
  }

  ResetForm() {
    this.Assessment = new Assessment();
  }
}