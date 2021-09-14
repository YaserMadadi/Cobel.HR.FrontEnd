import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Coaching } from '../coaching';
import { CoachingService } from '../coaching.service';

import { CoachingSession } from '../../CoachingSession/coachingSession';
import { CoachingSessionMasterUI } from '../../CoachingSession/master/coachingSession.master';
import { CoachingSessionEditUI } from '../../CoachingSession/edit/coachingSession.edit';
import { CoachingSessionDeleteUI } from '../../CoachingSession/delete/coachingSession.delete';



@Component({
  selector: 'coaching-coachingSession-detail',
  templateUrl: './coaching-coachingSession.detail.html',
  styleUrls: ['./coaching-coachingSession.detail.css']
})
export class Coaching_CoachingSession_DetailUI extends DetailView<Coaching> {

  constructor(private coachingService: CoachingService) {
    super(coachingService);
  }

  public CoachingSessionList : CoachingSession[] = [];
  
  public currentCoachingSession : CoachingSession = new CoachingSession();

  private coaching: Coaching = new Coaching();

  @Input()
  public set Coaching(value: Coaching) {
    this.coaching = value;
    this.onReload();
  }

  public get Coaching(): Coaching { return this.coaching }

  public onReload(){
    if (Coaching.NotConfirm(this.coaching))
      return;
    this.coachingService
      .ServiceCollection
      .CollectionOfCoachingSession(this.coaching)
      .then(coachingSessionList => {
        this.CoachingSessionList = coachingSessionList;
        this.currentCoachingSession = new CoachingSession();
      });
  }

  public onSelect(i: number) {
    this.currentCoachingSession = this.CoachingSessionList[i];
    if (CoachingSession.NotConfirm(this.currentCoachingSession))
      this.currentCoachingSession = new CoachingSession();
  }

  public onDblClicked(masterUI: CoachingSessionMasterUI) {
    if (CoachingSession.NotConfirm(this.currentCoachingSession))
      return;
    masterUI.ShowDialog(this.currentCoachingSession);
  }

  public onAdd(editUI: CoachingSessionEditUI) {
    editUI.Coaching = this.coaching;
    editUI.ShowDialog(new CoachingSession());
  }

  public onEdit(editUI: CoachingSessionEditUI) {
    if (CoachingSession.NotConfirm(this.currentCoachingSession))
      return;
    editUI.ShowDialog(this.currentCoachingSession);
  }

  public onDelete(deleteUI: CoachingSessionDeleteUI) {
    if (CoachingSession.NotConfirm(this.currentCoachingSession))
      return;
    deleteUI.ShowDialog(this.currentCoachingSession);
  }

  public onEditModal_Closed(coachingSession: CoachingSession) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}