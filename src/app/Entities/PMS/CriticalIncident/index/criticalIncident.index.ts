import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CriticalIncident } from '../criticalIncident';
import { CriticalIncidentService } from '../criticalIncident.service';
import { CriticalIncidentMasterUI } from '../master/criticalIncident.master';
import { CriticalIncidentEditUI } from '../edit/criticalIncident.edit';
import { CriticalIncidentDeleteUI } from '../delete/criticalIncident.delete';

import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { CriticalIncidentType } from '../../CriticalIncidentType/criticalIncidentType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { CriticalIncidentRecognitionEditUI } from '../../CriticalIncidentRecognition/edit/criticalIncidentRecognition.edit';
import { CriticalIncidentRecognition } from '../../CriticalIncidentRecognition/criticalIncidentRecognition';



@Component({
  selector: 'pms-criticalIncident-index',
  templateUrl: './criticalIncident.index.html',
  styleUrls: ['./criticalIncident.index.css']
})
export class CriticalIncidentIndexUI extends IndexView<CriticalIncident> implements AfterViewInit, IIndexView<CriticalIncident> {

  constructor(private criticalIncidentService: CriticalIncidentService) {
    super(criticalIncidentService);
    this.filterInstance = CriticalIncident.SeekInstance();
    this.currentInstance = new CriticalIncident();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region CriticalIncidentRecognition

  public criticalIncidentRecognition_Clicked(criticalIncidentRecognitionEditUI: CriticalIncidentRecognitionEditUI) {
    criticalIncidentRecognitionEditUI.CriticalIncident = this.currentInstance;
    criticalIncidentRecognitionEditUI.ShowDialog(new CriticalIncidentRecognition());
  }
                    
  public criticalIncidentRecognitionEditUI_Closed(criticalIncidentRecognition: CriticalIncidentRecognition) {
    if (!criticalIncidentRecognition)
      return;
    this.onRefresh();
  }
  
  //#endregion CriticalIncidentRecognition


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(criticalIncidentEditUI: CriticalIncidentEditUI){
    criticalIncidentEditUI.ShowDialog(new CriticalIncident());
  }

  resetFilter() {
    this.filterInstance = CriticalIncident.SeekInstance();
    
    
  }

  public onEditModalClosed(criticalIncident: CriticalIncident) {
    this.onRefresh();
    this.currentInstance = new CriticalIncident();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}