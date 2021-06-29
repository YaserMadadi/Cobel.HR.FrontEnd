import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { FieldOfStudy } from '../fieldOfStudy';
import { FieldOfStudyService } from '../fieldOfStudy.service';

import { UniversityHistory } from '../../../HR/UniversityHistory/universityHistory';
import { UniversityHistoryMasterUI } from '../../../HR/UniversityHistory/master/universityHistory.master';
import { UniversityHistoryEditUI } from '../../../HR/UniversityHistory/edit/universityHistory.edit';
import { UniversityHistoryDeleteUI } from '../../../HR/UniversityHistory/delete/universityHistory.delete';



@Component({
  selector: 'fieldOfStudy-universityHistory-detail',
  templateUrl: './fieldOfStudy-universityHistory.detail.html',
  styleUrls: ['./fieldOfStudy-universityHistory.detail.css'],
  providers: [FieldOfStudyService]
}) 

@Injectable()
export class FieldOfStudy_UniversityHistory_DetailUI extends DetailView<FieldOfStudy> {

  constructor(private fieldOfStudyService: FieldOfStudyService) {
    super(fieldOfStudyService);
  }

  public UniversityHistoryList : UniversityHistory[] = [];
  
  public currentUniversityHistory : UniversityHistory = new UniversityHistory();

  private fieldOfStudy: FieldOfStudy = new FieldOfStudy();

  @Input()
  public set FieldOfStudy(value: FieldOfStudy) {
    this.fieldOfStudy = value;
    this.onReload();
  }

  public get FieldOfStudy(): FieldOfStudy { return this.fieldOfStudy }

  public onReload(){
    if (FieldOfStudy.NotConfirm(this.fieldOfStudy))
      return;
    this.fieldOfStudyService
      .ServiceCollection
      .CollectionOfUniversityHistory(this.fieldOfStudy)
      .then(universityHistoryList => {
        this.UniversityHistoryList = universityHistoryList;
        this.currentUniversityHistory = new UniversityHistory();
      });
  }

  public onSelect(i: number) {
    this.currentUniversityHistory = this.UniversityHistoryList[i];
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      this.currentUniversityHistory = new UniversityHistory();
  }

  public onDblClicked(masterUI: UniversityHistoryMasterUI) {
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      return;
    masterUI.ShowDialog(this.currentUniversityHistory);
  }

  public onAdd(editUI: UniversityHistoryEditUI) {
    editUI.FieldOfStudy = this.fieldOfStudy;
    editUI.ShowDialog(new UniversityHistory());
  }

  public onEdit(editUI: UniversityHistoryEditUI) {
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      return;
    editUI.ShowDialog(this.currentUniversityHistory);
  }

  public onDelete(deleteUI: UniversityHistoryDeleteUI) {
    if (UniversityHistory.NotConfirm(this.currentUniversityHistory))
      return;
    deleteUI.ShowDialog(this.currentUniversityHistory);
  }

  public onEditModal_Closed(universityHistory: UniversityHistory) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}