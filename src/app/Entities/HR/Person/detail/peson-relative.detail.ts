import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { Relative } from '../../Relative/relative';
import { RelativeMasterUI } from '../../Relative/master/relative.master';
import { RelativeEditUI } from '../../Relative/edit/relative.edit';
import { RelativeDeleteUI } from '../../Relative/delete/relative.delete';



@Component({
  selector: 'peson-relative-detail',
  templateUrl: './peson-relative.detail.html',
  styleUrls: ['./peson-relative.detail.css']
})
export class Peson_Relative_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public RelativeList : Relative[] = [];
  
  public currentRelative : Relative = new Relative();

  private peson: Person = new Person();

  @Input()
  public set Peson(value: Person) {
    this.peson = value;
    this.onReload();
  }

  public get Peson(): Person { return this.peson }

  public onReload(){
    if (Person.NotConfirm(this.peson))
      return;
    this.personService
      .ServiceCollection
      .CollectionOfRelative_Peson(this.peson)
      .then(relativeList => {
        this.RelativeList = relativeList;
        this.currentRelative = new Relative();
      });
  }

  public onSelect(i: number) {
    this.currentRelative = this.RelativeList[i];
    if (Relative.NotConfirm(this.currentRelative))
      this.currentRelative = new Relative();
  }

  public onDblClicked(masterUI: RelativeMasterUI) {
    if (Relative.NotConfirm(this.currentRelative))
      return;
    masterUI.ShowDialog(this.currentRelative);
  }

  public onAdd(editUI: RelativeEditUI) {
    editUI.Peson = this.peson;
    editUI.ShowDialog(new Relative());
  }

  public onEdit(editUI: RelativeEditUI) {
    if (Relative.NotConfirm(this.currentRelative))
      return;
    editUI.ShowDialog(this.currentRelative);
  }

  public onDelete(deleteUI: RelativeDeleteUI) {
    if (Relative.NotConfirm(this.currentRelative))
      return;
    deleteUI.ShowDialog(this.currentRelative);
  }

  public onEditModal_Closed(relative: Relative) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}