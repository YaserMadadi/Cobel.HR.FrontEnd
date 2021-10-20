import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { UniversityHistory } from '../universityHistory';
import { UniversityHistoryService } from '../universityHistory.service';
import { UniversityHistoryMasterUI } from '../master/universityHistory.master';
import { UniversityHistoryEditUI } from '../edit/universityHistory.edit';
import { UniversityHistoryDeleteUI } from '../delete/universityHistory.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { UniversityDegree } from '../../../Base/UniversityDegree/universityDegree';
import { University } from '../../../Base/University/university';
import { UniversityEditUI } from '../../../Base/University/edit/university.edit';
import { FieldOfStudy } from '../../../Base/FieldOfStudy/fieldOfStudy';
import { FieldOfStudyEditUI } from '../../../Base/FieldOfStudy/edit/fieldOfStudy.edit';
import { EducationSystem } from '../../../Base/EducationSystem/educationSystem';
import { CertificationType } from '../../../Base/CertificationType/certificationType';






import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { UniversityTerminateEditUI } from '../../UniversityTerminate/edit/universityTerminate.edit';
import { UniversityTerminate } from '../../UniversityTerminate/universityTerminate';



@Component({
  selector: 'hr-universityHistory-index',
  templateUrl: './universityHistory.index.html',
  styleUrls: ['./universityHistory.index.css']
})
export class UniversityHistoryIndexUI extends IndexView<UniversityHistory> implements AfterViewInit, IIndexView<UniversityHistory> {

  constructor(private universityHistoryService: UniversityHistoryService) {
    super(universityHistoryService);
    this.filterInstance = UniversityHistory.SeekInstance();
    this.currentInstance = new UniversityHistory();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region UniversityTerminate

  public universityTerminate_Clicked(universityTerminateEditUI: UniversityTerminateEditUI) {
    universityTerminateEditUI.UniversityHistory = this.currentInstance;
    universityTerminateEditUI.ShowDialog(new UniversityTerminate());
  }
                    
  public universityTerminateEditUI_Closed(universityTerminate: UniversityTerminate) {
    if (!universityTerminate)
      return;
    this.onRefresh();
  }
  
  //#endregion UniversityTerminate


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(universityHistoryEditUI: UniversityHistoryEditUI){
    universityHistoryEditUI.ShowDialog(new UniversityHistory());
  }

  resetFilter() {
    this.filterInstance = UniversityHistory.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(universityHistory: UniversityHistory) {
    this.onRefresh();
    this.currentInstance = new UniversityHistory();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}