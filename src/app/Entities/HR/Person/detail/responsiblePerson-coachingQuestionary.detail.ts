import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { CoachingQuestionary } from '../../../LAD/CoachingQuestionary/coachingQuestionary';
import { CoachingQuestionaryMasterUI } from '../../../LAD/CoachingQuestionary/master/coachingQuestionary.master';
import { CoachingQuestionaryEditUI } from '../../../LAD/CoachingQuestionary/edit/coachingQuestionary.edit';
import { CoachingQuestionaryDeleteUI } from '../../../LAD/CoachingQuestionary/delete/coachingQuestionary.delete';



@Component({
  selector: 'responsiblePerson-coachingQuestionary-detail',
  templateUrl: './responsiblePerson-coachingQuestionary.detail.html',
  styleUrls: ['./responsiblePerson-coachingQuestionary.detail.css']
})
export class ResponsiblePerson_CoachingQuestionary_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public CoachingQuestionaryList : CoachingQuestionary[] = [];
  
  public currentCoachingQuestionary : CoachingQuestionary = new CoachingQuestionary();

  private responsiblePerson: Person = new Person();

  @Input()
  public set ResponsiblePerson(value: Person) {
    this.responsiblePerson = value;
    this.onReload();
  }

  public get ResponsiblePerson(): Person { return this.responsiblePerson }

  public onReload(){
    if (Person.NotConfirm(this.responsiblePerson))
      return;
    this.personService
      .ServiceCollection
      .CollectionOfCoachingQuestionary_ResponsiblePerson(this.responsiblePerson)
      .then(coachingQuestionaryList => {
        this.CoachingQuestionaryList = coachingQuestionaryList;
        this.currentCoachingQuestionary = new CoachingQuestionary();
      });
  }

  public onSelect(i: number) {
    this.currentCoachingQuestionary = this.CoachingQuestionaryList[i];
    if (CoachingQuestionary.NotConfirm(this.currentCoachingQuestionary))
      this.currentCoachingQuestionary = new CoachingQuestionary();
  }

  public onDblClicked(masterUI: CoachingQuestionaryMasterUI) {
    if (CoachingQuestionary.NotConfirm(this.currentCoachingQuestionary))
      return;
    masterUI.ShowDialog(this.currentCoachingQuestionary);
  }

  public onAdd(editUI: CoachingQuestionaryEditUI) {
    editUI.ResponsiblePerson = this.responsiblePerson;
    editUI.ShowDialog(new CoachingQuestionary());
  }

  public onEdit(editUI: CoachingQuestionaryEditUI) {
    if (CoachingQuestionary.NotConfirm(this.currentCoachingQuestionary))
      return;
    editUI.ShowDialog(this.currentCoachingQuestionary);
  }

  public onDelete(deleteUI: CoachingQuestionaryDeleteUI) {
    if (CoachingQuestionary.NotConfirm(this.currentCoachingQuestionary))
      return;
    deleteUI.ShowDialog(this.currentCoachingQuestionary);
  }

  public onEditModal_Closed(coachingQuestionary: CoachingQuestionary) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}