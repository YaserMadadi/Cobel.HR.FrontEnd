import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Gender } from '../gender';
import { GenderService } from '../gender.service';

import { Coach } from '../../../LAD/Coach/coach';
import { CoachMasterUI } from '../../../LAD/Coach/master/coach.master';
import { CoachEditUI } from '../../../LAD/Coach/edit/coach.edit';
import { CoachDeleteUI } from '../../../LAD/Coach/delete/coach.delete';



@Component({
  selector: 'gender-coach-detail',
  templateUrl: './gender-coach.detail.html',
  styleUrls: ['./gender-coach.detail.css'],
  providers: [GenderService]
}) 

@Injectable()
export class Gender_Coach_DetailUI extends DetailView<Gender> {

  constructor(private genderService: GenderService) {
    super(genderService);
  }

  public CoachList : Coach[] = [];
  
  public currentCoach : Coach = new Coach();

  private gender: Gender = new Gender();

  @Input()
  public set Gender(value: Gender) {
    this.gender = value;
    this.onReload();
  }

  public get Gender(): Gender { return this.gender }

  public onReload(){
    if (Gender.NotConfirm(this.gender))
      return;
    this.genderService
      .ServiceCollection
      .CollectionOfCoach(this.gender)
      .then(coachList => {
        this.CoachList = coachList;
        this.currentCoach = new Coach();
      });
  }

  public onSelect(i: number) {
    this.currentCoach = this.CoachList[i];
    if (Coach.NotConfirm(this.currentCoach))
      this.currentCoach = new Coach();
  }

  public onDblClicked(masterUI: CoachMasterUI) {
    if (Coach.NotConfirm(this.currentCoach))
      return;
    masterUI.ShowDialog(this.currentCoach);
  }

  public onAdd(editUI: CoachEditUI) {
    editUI.Gender = this.gender;
    editUI.ShowDialog(new Coach());
  }

  public onEdit(editUI: CoachEditUI) {
    if (Coach.NotConfirm(this.currentCoach))
      return;
    editUI.ShowDialog(this.currentCoach);
  }

  public onDelete(deleteUI: CoachDeleteUI) {
    if (Coach.NotConfirm(this.currentCoach))
      return;
    deleteUI.ShowDialog(this.currentCoach);
  }

  public onEditModal_Closed(coach: Coach) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}