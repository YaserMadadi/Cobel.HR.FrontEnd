import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CoachingQuestionaryDetail } from '../coachingQuestionaryDetail';
import { CoachingQuestionaryDetailService } from '../coachingQuestionaryDetail.service';
import { CoachingQuestionaryDetailMasterUI } from '../master/coachingQuestionaryDetail.master';
import { CoachingQuestionaryDetailEditUI } from '../edit/coachingQuestionaryDetail.edit';
import { CoachingQuestionaryDetailDeleteUI } from '../delete/coachingQuestionaryDetail.delete';

import { CoachingQuestionary } from '../../CoachingQuestionary/coachingQuestionary';
import { CoachingQuestionaryEditUI } from '../../CoachingQuestionary/edit/coachingQuestionary.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-coachingQuestionaryDetail-index',
  templateUrl: './coachingQuestionaryDetail.index.html',
  styleUrls: ['./coachingQuestionaryDetail.index.css']
})
export class CoachingQuestionaryDetailIndexUI extends IndexView<CoachingQuestionaryDetail> implements AfterViewInit, IIndexView<CoachingQuestionaryDetail> {

  constructor(private coachingQuestionaryDetailService: CoachingQuestionaryDetailService) {
    super(coachingQuestionaryDetailService);
    this.filterInstance = CoachingQuestionaryDetail.SeekInstance();
    this.currentInstance = new CoachingQuestionaryDetail();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(coachingQuestionaryDetailEditUI: CoachingQuestionaryDetailEditUI){
    coachingQuestionaryDetailEditUI.ShowDialog(new CoachingQuestionaryDetail());
  }

  resetFilter() {
    this.filterInstance = CoachingQuestionaryDetail.SeekInstance();
    
    
  }

  public onEditModalClosed(coachingQuestionaryDetail: CoachingQuestionaryDetail) {
    this.onRefresh();
    this.currentInstance = new CoachingQuestionaryDetail();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}