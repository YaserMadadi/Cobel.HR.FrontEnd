import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { FieldCategory } from '../fieldCategory';
import { FieldCategoryService } from '../fieldCategory.service';

import { PersonCertificate } from '../../../HR/PersonCertificate/personCertificate';
import { PersonCertificateMasterUI } from '../../../HR/PersonCertificate/master/personCertificate.master';
import { PersonCertificateEditUI } from '../../../HR/PersonCertificate/edit/personCertificate.edit';
import { PersonCertificateDeleteUI } from '../../../HR/PersonCertificate/delete/personCertificate.delete';



@Component({
  selector: 'fieldCategory-personCertificate-detail',
  templateUrl: './fieldCategory-personCertificate.detail.html',
  styleUrls: ['./fieldCategory-personCertificate.detail.css']
})
export class FieldCategory_PersonCertificate_DetailUI extends DetailView<FieldCategory> {

  constructor(private fieldCategoryService: FieldCategoryService) {
    super(fieldCategoryService);
  }

  public PersonCertificateList : PersonCertificate[] = [];
  
  public currentPersonCertificate : PersonCertificate = new PersonCertificate();

  private fieldCategory: FieldCategory = new FieldCategory();

  @Input()
  public set FieldCategory(value: FieldCategory) {
    this.fieldCategory = value;
    this.onReload();
  }

  public get FieldCategory(): FieldCategory { return this.fieldCategory }

  public onReload(){
    if (FieldCategory.NotConfirm(this.fieldCategory))
      return;
    this.fieldCategoryService
      .ServiceCollection
      .CollectionOfPersonCertificate(this.fieldCategory)
      .then(personCertificateList => {
        this.PersonCertificateList = personCertificateList;
        this.currentPersonCertificate = new PersonCertificate();
      });
  }

  public onSelect(i: number) {
    this.currentPersonCertificate = this.PersonCertificateList[i];
    if (PersonCertificate.NotConfirm(this.currentPersonCertificate))
      this.currentPersonCertificate = new PersonCertificate();
  }

  public onDblClicked(masterUI: PersonCertificateMasterUI) {
    if (PersonCertificate.NotConfirm(this.currentPersonCertificate))
      return;
    masterUI.ShowDialog(this.currentPersonCertificate);
  }

  public onAdd(editUI: PersonCertificateEditUI) {
    editUI.FieldCategory = this.fieldCategory;
    editUI.ShowDialog(new PersonCertificate());
  }

  public onEdit(editUI: PersonCertificateEditUI) {
    if (PersonCertificate.NotConfirm(this.currentPersonCertificate))
      return;
    editUI.ShowDialog(this.currentPersonCertificate);
  }

  public onDelete(deleteUI: PersonCertificateDeleteUI) {
    if (PersonCertificate.NotConfirm(this.currentPersonCertificate))
      return;
    deleteUI.ShowDialog(this.currentPersonCertificate);
  }

  public onEditModal_Closed(personCertificate: PersonCertificate) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}