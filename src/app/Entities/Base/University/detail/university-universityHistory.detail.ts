import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { University } from '../university';
import { UniversityService } from '../university.service';

import { UniversityHistory } from '../../../HR/UniversityHistory/universityHistory';
import { UniversityHistoryMasterUI } from '../../../HR/UniversityHistory/master/universityHistory.master';
import { UniversityHistoryEditUI } from '../../../HR/UniversityHistory/edit/universityHistory.edit';
import { UniversityHistoryDeleteUI } from '../../../HR/UniversityHistory/delete/universityHistory.delete';



@Component({
  selector: 'university-universityHistory-detail',
  templateUrl: './university-universityHistory.detail.html',
  styleUrls: ['./university-universityHistory.detail.css'],
  providers: [UniversityService]
}) 

@Injectable()
export class University_UniversityHistory_DetailUI extends DetailView<University> {

  constructor(private universityService: UniversityService) {
    super(universityService);
  }

  public UniversityHistoryList : UniversityHistory[] = [];
  
  public currentUniversityHistory : UniversityHistory = new UniversityHistory();

  private university: University = new University();

  @Input()
  public set University(value: University) {
    this.university = value;
    this.onReload();
  }

  public get University(): University { return this.university }

  public onReload(){
    if (University.NotConfirm(this.university))
      return;
    this.universityService
      .ServiceCollection
      .CollectionOfUniversityHistory(this.university)
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
    editUI.University = this.university;
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