import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { UniversityDegree } from '../universityDegree';
import { UniversityDegreeService } from '../universityDegree.service';
import { UniversityDegreeMasterUI } from '../master/universityDegree.master';
import { UniversityDegreeEditUI } from '../edit/universityDegree.edit';
import { UniversityDegreeDeleteUI } from '../delete/universityDegree.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { UniversityHistoryEditUI } from '../../../HR/UniversityHistory/edit/universityHistory.edit';
import { UniversityHistory } from '../../../HR/UniversityHistory/universityHistory';



@Component({
  selector: 'base-universityDegree-index',
  templateUrl: './universityDegree.index.html',
  styleUrls: ['./universityDegree.index.css']
})
export class UniversityDegreeIndexUI extends IndexView<UniversityDegree> implements AfterViewInit, IIndexView<UniversityDegree> {

  constructor(private universityDegreeService: UniversityDegreeService) {
    super(universityDegreeService);
    this.filterInstance = UniversityDegree.SeekInstance();
    this.currentInstance = new UniversityDegree();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region UniversityHistory

  public universityHistory_Clicked(universityHistoryEditUI: UniversityHistoryEditUI) {
    universityHistoryEditUI.UniversityDegree = this.currentInstance;
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

  public onAdd(universityDegreeEditUI: UniversityDegreeEditUI){
    universityDegreeEditUI.ShowDialog(new UniversityDegree());
  }

  resetFilter() {
    this.filterInstance = UniversityDegree.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(universityDegree: UniversityDegree) {
    this.onRefresh();
    this.currentInstance = new UniversityDegree();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}