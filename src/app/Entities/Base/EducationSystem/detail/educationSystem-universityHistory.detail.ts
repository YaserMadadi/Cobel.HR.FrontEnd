import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { EducationSystem } from '../educationSystem';
import { EducationSystemService } from '../educationSystem.service';

import { UniversityHistory } from '../../../HR/UniversityHistory/universityHistory';
import { UniversityHistoryMasterUI } from '../../../HR/UniversityHistory/master/universityHistory.master';
import { UniversityHistoryEditUI } from '../../../HR/UniversityHistory/edit/universityHistory.edit';
import { UniversityHistoryDeleteUI } from '../../../HR/UniversityHistory/delete/universityHistory.delete';



@Component({
  selector: 'educationSystem-universityHistory-detail',
  templateUrl: './educationSystem-universityHistory.detail.html',
  styleUrls: ['./educationSystem-universityHistory.detail.css'],
  providers: [EducationSystemService]
}) 

@Injectable()
export class EducationSystem_UniversityHistory_DetailUI extends DetailView<EducationSystem> {

  constructor(private educationSystemService: EducationSystemService) {
    super(educationSystemService);
  }

  public UniversityHistoryList : UniversityHistory[] = [];
  
  public currentUniversityHistory : UniversityHistory = new UniversityHistory();

  private educationSystem: EducationSystem = new EducationSystem();

  @Input()
  public set EducationSystem(value: EducationSystem) {
    this.educationSystem = value;
    this.onReload();
  }

  public get EducationSystem(): EducationSystem { return this.educationSystem }

  public onReload(){
    if (EducationSystem.NotConfirm(this.educationSystem))
      return;
    this.educationSystemService
      .ServiceCollection
      .CollectionOfUniversityHistory(this.educationSystem)
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
    editUI.EducationSystem = this.educationSystem;
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