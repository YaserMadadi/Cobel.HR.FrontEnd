import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { University } from '../university';
import { UniversityService } from '../university.service';
import { UniversityMasterUI } from '../master/university.master';
import { UniversityEditUI } from '../edit/university.edit';
import { UniversityDeleteUI } from '../delete/university.delete';

import { City } from '../../City/city';
import { CityEditUI } from '../../City/edit/city.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { UniversityHistoryEditUI } from '../../../HR/UniversityHistory/edit/universityHistory.edit';
import { UniversityHistory } from '../../../HR/UniversityHistory/universityHistory';



@Component({
  selector: 'base-university-index',
  templateUrl: './university.index.html',
  styleUrls: ['./university.index.css']
})
export class UniversityIndexUI extends IndexView<University> implements AfterViewInit, IIndexView<University> {

  constructor(private universityService: UniversityService) {
    super(universityService);
    this.filterInstance = University.SeekInstance();
    this.currentInstance = new University();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region UniversityHistory

  public universityHistory_Clicked(universityHistoryEditUI: UniversityHistoryEditUI) {
    universityHistoryEditUI.University = this.currentInstance;
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

  public onAdd(universityEditUI: UniversityEditUI){
    universityEditUI.ShowDialog(new University());
  }

  resetFilter() {
    this.filterInstance = University.SeekInstance();
    
    
  }

  public onEditModalClosed(university: University) {
    this.onRefresh();
    this.currentInstance = new University();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}