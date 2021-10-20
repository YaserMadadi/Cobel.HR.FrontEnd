import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { FeedbackSession } from '../feedbackSession';
import { FeedbackSessionService } from '../feedbackSession.service';
import { FeedbackSessionDeleteUI } from '../delete/feedbackSession.delete';
import { FeedbackSessionEditUI } from '../edit/feedbackSession.edit';



@Component({
  selector: 'lad-feedbackSession-master',
  templateUrl: './feedbackSession.master.html',
  styleUrls: ['./feedbackSession.master.css']
})
export class FeedbackSessionMasterUI extends MasterModal<FeedbackSession> {

  constructor(private feedbackSessionService: FeedbackSessionService) {
    super(feedbackSessionService);
  }
}