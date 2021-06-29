import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Coach } from '../coach';
import { CoachService } from '../coach.service';
import { CoachMasterUI } from '../master/coach.master';
import { CoachEditUI } from '../edit/coach.edit';
import { CoachDeleteUI } from '../delete/coach.delete';

import { Gender } from '../../../Base/Gender/gender';
import { GenderEditUI } from '../../../Base/Gender/edit/gender.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { CoachingEditUI } from '../../Coaching/edit/coaching.edit';
import { Coaching } from '../../Coaching/coaching';
import { CoachConnectionLineEditUI } from '../../CoachConnectionLine/edit/coachConnectionLine.edit';
import { CoachConnectionLine } from '../../CoachConnectionLine/coachConnectionLine';



@Component({
  selector: 'lad-coach-index',
  templateUrl: './coach.index.html',
  styleUrls: ['./coach.index.css']
})
export class CoachIndexUI extends IndexView<Coach> implements AfterViewInit, IIndexView<Coach> {

  constructor(private coachService: CoachService) {
    super(coachService);
    this.filterInstance = Coach.SeekInstance();
    this.currentInstance = new Coach();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Coaching

  public coaching_Clicked(coachingEditUI: CoachingEditUI) {
    coachingEditUI.Coach = this.currentInstance;
    coachingEditUI.ShowDialog(new Coaching());
  }
                    
  public coachingEditUI_Closed(coaching: Coaching) {
    if (!coaching)
      return;
    this.onRefresh();
  }
  
  //#endregion Coaching

  //#region CoachConnectionLine

  public coachConnectionLine_Clicked(coachConnectionLineEditUI: CoachConnectionLineEditUI) {
    coachConnectionLineEditUI.Coach = this.currentInstance;
    coachConnectionLineEditUI.ShowDialog(new CoachConnectionLine());
  }
                    
  public coachConnectionLineEditUI_Closed(coachConnectionLine: CoachConnectionLine) {
    if (!coachConnectionLine)
      return;
    this.onRefresh();
  }
  
  //#endregion CoachConnectionLine


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(coachEditUI: CoachEditUI){
    coachEditUI.ShowDialog(new Coach());
  }

  resetFilter() {
    this.filterInstance = Coach.SeekInstance();
    
    
  }

  public onEditModalClosed(coach: Coach) {
    this.onRefresh();
    this.currentInstance = new Coach();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}