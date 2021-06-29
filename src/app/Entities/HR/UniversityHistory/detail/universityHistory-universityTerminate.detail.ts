import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { UniversityHistory } from '../universityHistory';
import { UniversityHistoryService } from '../universityHistory.service';

import { UniversityTerminate } from '../../UniversityTerminate/universityTerminate';
import { UniversityTerminateMasterUI } from '../../UniversityTerminate/master/universityTerminate.master';
import { UniversityTerminateEditUI } from '../../UniversityTerminate/edit/universityTerminate.edit';
import { UniversityTerminateDeleteUI } from '../../UniversityTerminate/delete/universityTerminate.delete';



@Component({
  selector: 'universityHistory-universityTerminate-detail',
  templateUrl: './universityHistory-universityTerminate.detail.html',
  styleUrls: ['./universityHistory-universityTerminate.detail.css'],
  providers: [UniversityHistoryService]
}) 

@Injectable()
export class UniversityHistory_UniversityTerminate_DetailUI extends DetailView<UniversityHistory> {

  constructor(private universityHistoryService: UniversityHistoryService) {
    super(universityHistoryService);
  }

  public UniversityTerminateList : UniversityTerminate[] = [];
  
  public currentUniversityTerminate : UniversityTerminate = new UniversityTerminate();

  private universityHistory: UniversityHistory = new UniversityHistory();

  @Input()
  public set UniversityHistory(value: UniversityHistory) {
    this.universityHistory = value;
    this.onReload();
  }

  public get UniversityHistory(): UniversityHistory { return this.universityHistory }

  public onReload(){
    if (UniversityHistory.NotConfirm(this.universityHistory))
      return;
    this.universityHistoryService
      .ServiceCollection
      .CollectionOfUniversityTerminate(this.universityHistory)
      .then(universityTerminateList => {
        this.UniversityTerminateList = universityTerminateList;
        this.currentUniversityTerminate = new UniversityTerminate();
      });
  }

  public onSelect(i: number) {
    this.currentUniversityTerminate = this.UniversityTerminateList[i];
    if (UniversityTerminate.NotConfirm(this.currentUniversityTerminate))
      this.currentUniversityTerminate = new UniversityTerminate();
  }

  public onDblClicked(masterUI: UniversityTerminateMasterUI) {
    if (UniversityTerminate.NotConfirm(this.currentUniversityTerminate))
      return;
    masterUI.ShowDialog(this.currentUniversityTerminate);
  }

  public onAdd(editUI: UniversityTerminateEditUI) {
    editUI.UniversityHistory = this.universityHistory;
    editUI.ShowDialog(new UniversityTerminate());
  }

  public onEdit(editUI: UniversityTerminateEditUI) {
    if (UniversityTerminate.NotConfirm(this.currentUniversityTerminate))
      return;
    editUI.ShowDialog(this.currentUniversityTerminate);
  }

  public onDelete(deleteUI: UniversityTerminateDeleteUI) {
    if (UniversityTerminate.NotConfirm(this.currentUniversityTerminate))
      return;
    deleteUI.ShowDialog(this.currentUniversityTerminate);
  }

  public onEditModal_Closed(universityTerminate: UniversityTerminate) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}