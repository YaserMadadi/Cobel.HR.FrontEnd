import { Component } from '@angular/core';

import { DeleteModal } from '../../../../../xcore/tools/ui/view-base/delete.modal';

import { FeedbackSession } from '../feedbackSession';
import { FeedbackSessionService } from '../feedbackSession.service';


@Component({
  selector: 'lad-feedbackSession-delete',
  templateUrl: './feedbackSession.delete.html',
  styleUrls: ['./feedbackSession.delete.css'],
  
})
export class FeedbackSessionDeleteUI extends DeleteModal<FeedbackSession> {

    constructor(private feedbackSessionService: FeedbackSessionService){
        super(feedbackSessionService);
    }

}