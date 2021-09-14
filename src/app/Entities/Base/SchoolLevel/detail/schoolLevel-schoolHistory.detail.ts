import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { SchoolLevel } from '../schoolLevel';
import { SchoolLevelService } from '../schoolLevel.service';

import { SchoolHistory } from '../../../HR/SchoolHistory/schoolHistory';
import { SchoolHistoryMasterUI } from '../../../HR/SchoolHistory/master/schoolHistory.master';
import { SchoolHistoryEditUI } from '../../../HR/SchoolHistory/edit/schoolHistory.edit';
import { SchoolHistoryDeleteUI } from '../../../HR/SchoolHistory/delete/schoolHistory.delete';



@Component({
  selector: 'schoolLevel-schoolHistory-detail',
  templateUrl: './schoolLevel-schoolHistory.detail.html',
  styleUrls: ['./schoolLevel-schoolHistory.detail.css']
})
export class SchoolLevel_SchoolHistory_DetailUI extends DetailView<SchoolLevel> {

  constructor(private schoolLevelService: SchoolLevelService) {
    super(schoolLevelService);
  }

  public SchoolHistoryList : SchoolHistory[] = [];
  
  public currentSchoolHistory : SchoolHistory = new SchoolHistory();

  private schoolLevel: SchoolLevel = new SchoolLevel();

  @Input()
  public set SchoolLevel(value: SchoolLevel) {
    this.schoolLevel = value;
    this.onReload();
  }

  public get SchoolLevel(): SchoolLevel { return this.schoolLevel }

  public onReload(){
    if (SchoolLevel.NotConfirm(this.schoolLevel))
      return;
    this.schoolLevelService
      .ServiceCollection
      .CollectionOfSchoolHistory(this.schoolLevel)
      .then(schoolHistoryList => {
        this.SchoolHistoryList = schoolHistoryList;
        this.currentSchoolHistory = new SchoolHistory();
      });
  }

  public onSelect(i: number) {
    this.currentSchoolHistory = this.SchoolHistoryList[i];
    if (SchoolHistory.NotConfirm(this.currentSchoolHistory))
      this.currentSchoolHistory = new SchoolHistory();
  }

  public onDblClicked(masterUI: SchoolHistoryMasterUI) {
    if (SchoolHistory.NotConfirm(this.currentSchoolHistory))
      return;
    masterUI.ShowDialog(this.currentSchoolHistory);
  }

  public onAdd(editUI: SchoolHistoryEditUI) {
    editUI.SchoolLevel = this.schoolLevel;
    editUI.ShowDialog(new SchoolHistory());
  }

  public onEdit(editUI: SchoolHistoryEditUI) {
    if (SchoolHistory.NotConfirm(this.currentSchoolHistory))
      return;
    editUI.ShowDialog(this.currentSchoolHistory);
  }

  public onDelete(deleteUI: SchoolHistoryDeleteUI) {
    if (SchoolHistory.NotConfirm(this.currentSchoolHistory))
      return;
    deleteUI.ShowDialog(this.currentSchoolHistory);
  }

  public onEditModal_Closed(schoolHistory: SchoolHistory) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}