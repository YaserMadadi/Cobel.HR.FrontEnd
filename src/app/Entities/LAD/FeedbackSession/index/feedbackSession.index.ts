import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { FeedbackSession } from '../feedbackSession';
import { FeedbackSessionService } from '../feedbackSession.service';
import { FeedbackSessionMasterUI } from '../master/feedbackSession.master';
import { FeedbackSessionEditUI } from '../edit/feedbackSession.edit';
import { FeedbackSessionDeleteUI } from '../delete/feedbackSession.delete';

import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-feedbackSession-index',
  templateUrl: './feedbackSession.index.html',
  styleUrls: ['./feedbackSession.index.css']
})
export class FeedbackSessionIndexUI extends IndexView<FeedbackSession> implements AfterViewInit, IIndexView<FeedbackSession> {

  constructor(private feedbackSessionService: FeedbackSessionService) {
    super(feedbackSessionService);
    this.filterInstance = FeedbackSession.SeekInstance();
    this.currentInstance = new FeedbackSession();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(feedbackSessionEditUI: FeedbackSessionEditUI){
    feedbackSessionEditUI.ShowDialog(new FeedbackSession());
  }

  resetFilter() {
    this.filterInstance = FeedbackSession.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(feedbackSession: FeedbackSession) {
    this.onRefresh();
    this.currentInstance = new FeedbackSession();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}