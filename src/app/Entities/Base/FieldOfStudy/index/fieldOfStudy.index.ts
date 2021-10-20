import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { FieldOfStudy } from '../fieldOfStudy';
import { FieldOfStudyService } from '../fieldOfStudy.service';
import { FieldOfStudyMasterUI } from '../master/fieldOfStudy.master';
import { FieldOfStudyEditUI } from '../edit/fieldOfStudy.edit';
import { FieldOfStudyDeleteUI } from '../delete/fieldOfStudy.delete';

import { UniversityFieldCategory } from '../../UniversityFieldCategory/universityFieldCategory';
import { UniversityFieldCategoryEditUI } from '../../UniversityFieldCategory/edit/universityFieldCategory.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { UniversityHistoryEditUI } from '../../../HR/UniversityHistory/edit/universityHistory.edit';
import { UniversityHistory } from '../../../HR/UniversityHistory/universityHistory';



@Component({
  selector: 'base-fieldOfStudy-index',
  templateUrl: './fieldOfStudy.index.html',
  styleUrls: ['./fieldOfStudy.index.css']
})
export class FieldOfStudyIndexUI extends IndexView<FieldOfStudy> implements AfterViewInit, IIndexView<FieldOfStudy> {

  constructor(private fieldOfStudyService: FieldOfStudyService) {
    super(fieldOfStudyService);
    this.filterInstance = FieldOfStudy.SeekInstance();
    this.currentInstance = new FieldOfStudy();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region UniversityHistory

  public universityHistory_Clicked(universityHistoryEditUI: UniversityHistoryEditUI) {
    universityHistoryEditUI.FieldOfStudy = this.currentInstance;
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

  public onAdd(fieldOfStudyEditUI: FieldOfStudyEditUI){
    fieldOfStudyEditUI.ShowDialog(new FieldOfStudy());
  }

  resetFilter() {
    this.filterInstance = FieldOfStudy.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(fieldOfStudy: FieldOfStudy) {
    this.onRefresh();
    this.currentInstance = new FieldOfStudy();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}