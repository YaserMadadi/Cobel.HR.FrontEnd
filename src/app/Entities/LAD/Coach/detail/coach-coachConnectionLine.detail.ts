import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Coach } from '../coach';
import { CoachService } from '../coach.service';

import { CoachConnectionLine } from '../../CoachConnectionLine/coachConnectionLine';
import { CoachConnectionLineMasterUI } from '../../CoachConnectionLine/master/coachConnectionLine.master';
import { CoachConnectionLineEditUI } from '../../CoachConnectionLine/edit/coachConnectionLine.edit';
import { CoachConnectionLineDeleteUI } from '../../CoachConnectionLine/delete/coachConnectionLine.delete';



@Component({
  selector: 'coach-coachConnectionLine-detail',
  templateUrl: './coach-coachConnectionLine.detail.html',
  styleUrls: ['./coach-coachConnectionLine.detail.css']
})
export class Coach_CoachConnectionLine_DetailUI extends DetailView<Coach> {

  constructor(private coachService: CoachService) {
    super(coachService);
  }

  public CoachConnectionLineList : CoachConnectionLine[] = [];
  
  public currentCoachConnectionLine : CoachConnectionLine = new CoachConnectionLine();

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
      .CollectionOfCoachConnectionLine(this.coach)
      .then(coachConnectionLineList => {
        this.CoachConnectionLineList = coachConnectionLineList;
        this.currentCoachConnectionLine = new CoachConnectionLine();
      });
  }

  public onSelect(i: number) {
    this.currentCoachConnectionLine = this.CoachConnectionLineList[i];
    if (CoachConnectionLine.NotConfirm(this.currentCoachConnectionLine))
      this.currentCoachConnectionLine = new CoachConnectionLine();
  }

  public onDblClicked(masterUI: CoachConnectionLineMasterUI) {
    if (CoachConnectionLine.NotConfirm(this.currentCoachConnectionLine))
      return;
    masterUI.ShowDialog(this.currentCoachConnectionLine);
  }

  public onAdd(editUI: CoachConnectionLineEditUI) {
    editUI.Coach = this.coach;
    editUI.ShowDialog(new CoachConnectionLine());
  }

  public onEdit(editUI: CoachConnectionLineEditUI) {
    if (CoachConnectionLine.NotConfirm(this.currentCoachConnectionLine))
      return;
    editUI.ShowDialog(this.currentCoachConnectionLine);
  }

  public onDelete(deleteUI: CoachConnectionLineDeleteUI) {
    if (CoachConnectionLine.NotConfirm(this.currentCoachConnectionLine))
      return;
    deleteUI.ShowDialog(this.currentCoachConnectionLine);
  }

  public onEditModal_Closed(coachConnectionLine: CoachConnectionLine) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}