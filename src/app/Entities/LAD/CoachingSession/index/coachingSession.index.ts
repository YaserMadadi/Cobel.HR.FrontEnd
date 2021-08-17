import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CoachingSession } from '../coachingSession';
import { CoachingSessionService } from '../coachingSession.service';
import { CoachingSessionMasterUI } from '../master/coachingSession.master';
import { CoachingSessionEditUI } from '../edit/coachingSession.edit';
import { CoachingSessionDeleteUI } from '../delete/coachingSession.delete';

import { Coaching } from '../../Coaching/coaching';
import { CoachingEditUI } from '../../Coaching/edit/coaching.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-coachingSession-index',
  templateUrl: './coachingSession.index.html',
  styleUrls: ['./coachingSession.index.css']
})
export class CoachingSessionIndexUI extends IndexView<CoachingSession> implements AfterViewInit, IIndexView<CoachingSession> {

  constructor(private coachingSessionService: CoachingSessionService) {
    super(coachingSessionService);
    this.filterInstance = CoachingSession.SeekInstance();
    this.currentInstance = new CoachingSession();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(coachingSessionEditUI: CoachingSessionEditUI){
    coachingSessionEditUI.ShowDialog(new CoachingSession());
  }

  resetFilter() {
    this.filterInstance = CoachingSession.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(coachingSession: CoachingSession) {
    this.onRefresh();
    this.currentInstance = new CoachingSession();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}