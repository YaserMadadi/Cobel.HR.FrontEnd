import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { WorkExperience } from '../../WorkExperience/workExperience';
import { WorkExperienceMasterUI } from '../../WorkExperience/master/workExperience.master';
import { WorkExperienceEditUI } from '../../WorkExperience/edit/workExperience.edit';
import { WorkExperienceDeleteUI } from '../../WorkExperience/delete/workExperience.delete';



@Component({
  selector: 'person-workExperience-detail',
  templateUrl: './person-workExperience.detail.html',
  styleUrls: ['./person-workExperience.detail.css']
})
export class Person_WorkExperience_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public WorkExperienceList : WorkExperience[] = [];
  
  public currentWorkExperience : WorkExperience = new WorkExperience();

  private person: Person = new Person();

  @Input()
  public set Person(value: Person) {
    this.person = value;
    this.onReload();
  }

  public get Person(): Person { return this.person }

  public onReload(){
    if (Person.NotConfirm(this.person))
      return;
    this.personService
      .ServiceCollection
      .CollectionOfWorkExperience(this.person)
      .then(workExperienceList => {
        this.WorkExperienceList = workExperienceList;
        this.currentWorkExperience = new WorkExperience();
      });
  }

  public onSelect(i: number) {
    this.currentWorkExperience = this.WorkExperienceList[i];
    if (WorkExperience.NotConfirm(this.currentWorkExperience))
      this.currentWorkExperience = new WorkExperience();
  }

  public onDblClicked(masterUI: WorkExperienceMasterUI) {
    if (WorkExperience.NotConfirm(this.currentWorkExperience))
      return;
    masterUI.ShowDialog(this.currentWorkExperience);
  }

  public onAdd(editUI: WorkExperienceEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new WorkExperience());
  }

  public onEdit(editUI: WorkExperienceEditUI) {
    if (WorkExperience.NotConfirm(this.currentWorkExperience))
      return;
    editUI.ShowDialog(this.currentWorkExperience);
  }

  public onDelete(deleteUI: WorkExperienceDeleteUI) {
    if (WorkExperience.NotConfirm(this.currentWorkExperience))
      return;
    deleteUI.ShowDialog(this.currentWorkExperience);
  }

  public onEditModal_Closed(workExperience: WorkExperience) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}