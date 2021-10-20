import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Person } from '../person';
import { PersonService } from '../person.service';

import { MaritalInfo } from '../../MaritalInfo/maritalInfo';
import { MaritalInfoMasterUI } from '../../MaritalInfo/master/maritalInfo.master';
import { MaritalInfoEditUI } from '../../MaritalInfo/edit/maritalInfo.edit';
import { MaritalInfoDeleteUI } from '../../MaritalInfo/delete/maritalInfo.delete';



@Component({
  selector: 'person-maritalInfo-detail',
  templateUrl: './person-maritalInfo.detail.html',
  styleUrls: ['./person-maritalInfo.detail.css']
})
export class Person_MaritalInfo_DetailUI extends DetailView<Person> {

  constructor(private personService: PersonService) {
    super(personService);
  }

  public MaritalInfoList : MaritalInfo[] = [];
  
  public currentMaritalInfo : MaritalInfo = new MaritalInfo();

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
      .CollectionOfMaritalInfo(this.person)
      .then(maritalInfoList => {
        this.MaritalInfoList = maritalInfoList;
        this.currentMaritalInfo = new MaritalInfo();
      });
  }

  public onSelect(i: number) {
    this.currentMaritalInfo = this.MaritalInfoList[i];
    if (MaritalInfo.NotConfirm(this.currentMaritalInfo))
      this.currentMaritalInfo = new MaritalInfo();
  }

  public onDblClicked(masterUI: MaritalInfoMasterUI) {
    if (MaritalInfo.NotConfirm(this.currentMaritalInfo))
      return;
    masterUI.ShowDialog(this.currentMaritalInfo);
  }

  public onAdd(editUI: MaritalInfoEditUI) {
    editUI.Person = this.person;
    editUI.ShowDialog(new MaritalInfo());
  }

  public onEdit(editUI: MaritalInfoEditUI) {
    if (MaritalInfo.NotConfirm(this.currentMaritalInfo))
      return;
    editUI.ShowDialog(this.currentMaritalInfo);
  }

  public onDelete(deleteUI: MaritalInfoDeleteUI) {
    if (MaritalInfo.NotConfirm(this.currentMaritalInfo))
      return;
    deleteUI.ShowDialog(this.currentMaritalInfo);
  }

  public onEditModal_Closed(maritalInfo: MaritalInfo) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}