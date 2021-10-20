import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { UniversityFieldCategory } from '../universityFieldCategory';
import { UniversityFieldCategoryService } from '../universityFieldCategory.service';

import { FieldOfStudy } from '../../FieldOfStudy/fieldOfStudy';
import { FieldOfStudyMasterUI } from '../../FieldOfStudy/master/fieldOfStudy.master';
import { FieldOfStudyEditUI } from '../../FieldOfStudy/edit/fieldOfStudy.edit';
import { FieldOfStudyDeleteUI } from '../../FieldOfStudy/delete/fieldOfStudy.delete';



@Component({
  selector: 'universityFieldCategory-fieldOfStudy-detail',
  templateUrl: './universityFieldCategory-fieldOfStudy.detail.html',
  styleUrls: ['./universityFieldCategory-fieldOfStudy.detail.css']
})
export class UniversityFieldCategory_FieldOfStudy_DetailUI extends DetailView<UniversityFieldCategory> {

  constructor(private universityFieldCategoryService: UniversityFieldCategoryService) {
    super(universityFieldCategoryService);
  }

  public FieldOfStudyList : FieldOfStudy[] = [];
  
  public currentFieldOfStudy : FieldOfStudy = new FieldOfStudy();

  private universityFieldCategory: UniversityFieldCategory = new UniversityFieldCategory();

  @Input()
  public set UniversityFieldCategory(value: UniversityFieldCategory) {
    this.universityFieldCategory = value;
    this.onReload();
  }

  public get UniversityFieldCategory(): UniversityFieldCategory { return this.universityFieldCategory }

  public onReload(){
    if (UniversityFieldCategory.NotConfirm(this.universityFieldCategory))
      return;
    this.universityFieldCategoryService
      .ServiceCollection
      .CollectionOfFieldOfStudy(this.universityFieldCategory)
      .then(fieldOfStudyList => {
        this.FieldOfStudyList = fieldOfStudyList;
        this.currentFieldOfStudy = new FieldOfStudy();
      });
  }

  public onSelect(i: number) {
    this.currentFieldOfStudy = this.FieldOfStudyList[i];
    if (FieldOfStudy.NotConfirm(this.currentFieldOfStudy))
      this.currentFieldOfStudy = new FieldOfStudy();
  }

  public onDblClicked(masterUI: FieldOfStudyMasterUI) {
    if (FieldOfStudy.NotConfirm(this.currentFieldOfStudy))
      return;
    masterUI.ShowDialog(this.currentFieldOfStudy);
  }

  public onAdd(editUI: FieldOfStudyEditUI) {
    editUI.UniversityFieldCategory = this.universityFieldCategory;
    editUI.ShowDialog(new FieldOfStudy());
  }

  public onEdit(editUI: FieldOfStudyEditUI) {
    if (FieldOfStudy.NotConfirm(this.currentFieldOfStudy))
      return;
    editUI.ShowDialog(this.currentFieldOfStudy);
  }

  public onDelete(deleteUI: FieldOfStudyDeleteUI) {
    if (FieldOfStudy.NotConfirm(this.currentFieldOfStudy))
      return;
    deleteUI.ShowDialog(this.currentFieldOfStudy);
  }

  public onEditModal_Closed(fieldOfStudy: FieldOfStudy) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}