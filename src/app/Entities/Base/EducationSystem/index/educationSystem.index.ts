import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { EducationSystem } from '../educationSystem';
import { EducationSystemService } from '../educationSystem.service';
import { EducationSystemMasterUI } from '../master/educationSystem.master';
import { EducationSystemEditUI } from '../edit/educationSystem.edit';
import { EducationSystemDeleteUI } from '../delete/educationSystem.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { UniversityHistoryEditUI } from '../../../HR/UniversityHistory/edit/universityHistory.edit';
import { UniversityHistory } from '../../../HR/UniversityHistory/universityHistory';



@Component({
  selector: 'base-educationSystem-index',
  templateUrl: './educationSystem.index.html',
  styleUrls: ['./educationSystem.index.css']
})
export class EducationSystemIndexUI extends IndexView<EducationSystem> implements AfterViewInit, IIndexView<EducationSystem> {

  constructor(private educationSystemService: EducationSystemService) {
    super(educationSystemService);
    this.filterInstance = EducationSystem.SeekInstance();
    this.currentInstance = new EducationSystem();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region UniversityHistory

  public universityHistory_Clicked(universityHistoryEditUI: UniversityHistoryEditUI) {
    universityHistoryEditUI.EducationSystem = this.currentInstance;
    universityHistoryEditUI.ShowDialog(new UniversityHistory());
  }
                    
  public universityHistoryEditUI_Closed(universityHistory: UniversityHistory) {
    if (!universityHistory)
      return;
    this.onRefresh();
  }
  
  //#endregion UniversityHistory


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(educationSystemEditUI: EducationSystemEditUI){
    educationSystemEditUI.ShowDialog(new EducationSystem());
  }

  resetFilter() {
    this.filterInstance = EducationSystem.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(educationSystem: EducationSystem) {
    this.onRefresh();
    this.currentInstance = new EducationSystem();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}