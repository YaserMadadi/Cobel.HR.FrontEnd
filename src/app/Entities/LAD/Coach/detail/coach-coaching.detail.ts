import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Coach } from '../coach';
import { CoachService } from '../coach.service';

import { Coaching } from '../../Coaching/coaching';
import { CoachingMasterUI } from '../../Coaching/master/coaching.master';
import { CoachingEditUI } from '../../Coaching/edit/coaching.edit';
import { CoachingDeleteUI } from '../../Coaching/delete/coaching.delete';



@Component({
  selector: 'coach-coaching-detail',
  templateUrl: './coach-coaching.detail.html',
  styleUrls: ['./coach-coaching.detail.css']
})
export class Coach_Coaching_DetailUI extends DetailView<Coach> {

  constructor(private coachService: CoachService) {
    super(coachService);
  }

  public CoachingList : Coaching[] = [];
  
  public currentCoaching : Coaching = new Coaching();

  private coach: Coach = new Coach();

  @Input()
  public set Coach(value: Coach) {
    this.coach = value;
    this.onReload();
  }

  public get Coach(): Coach { return this.coach }

  public onReload(){
    if (Coach.NotConfirm(this.coach))
      return;
    this.coachService
      .ServiceCollection
      .CollectionOfCoaching(this.coach)
      .then(coachingList => {
        this.CoachingList = coachingList;
        this.currentCoaching = new Coaching();
      });
  }

  public onSelect(i: number) {
    this.currentCoaching = this.CoachingList[i];
    if (Coaching.NotConfirm(this.currentCoaching))
      this.currentCoaching = new Coaching();
  }

  public onDblClicked(masterUI: CoachingMasterUI) {
    if (Coaching.NotConfirm(this.currentCoaching))
      return;
    masterUI.ShowDialog(this.currentCoaching);
  }

  public onAdd(editUI: CoachingEditUI) {
    editUI.Coach = this.coach;
    editUI.ShowDialog(new Coaching());
  }

  public onEdit(editUI: CoachingEditUI) {
    if (Coaching.NotConfirm(this.currentCoaching))
      return;
    editUI.ShowDialog(this.currentCoaching);
  }

  public onDelete(deleteUI: CoachingDeleteUI) {
    if (Coaching.NotConfirm(this.currentCoaching))
      return;
    deleteUI.ShowDialog(this.currentCoaching);
  }

  public onEditModal_Closed(coaching: Coaching) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}