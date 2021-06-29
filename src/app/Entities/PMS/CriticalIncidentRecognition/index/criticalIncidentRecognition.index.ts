import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CriticalIncidentRecognition } from '../criticalIncidentRecognition';
import { CriticalIncidentRecognitionService } from '../criticalIncidentRecognition.service';
import { CriticalIncidentRecognitionMasterUI } from '../master/criticalIncidentRecognition.master';
import { CriticalIncidentRecognitionEditUI } from '../edit/criticalIncidentRecognition.edit';
import { CriticalIncidentRecognitionDeleteUI } from '../delete/criticalIncidentRecognition.delete';

import { CriticalIncident } from '../../CriticalIncident/criticalIncident';
import { CriticalIncidentEditUI } from '../../CriticalIncident/edit/criticalIncident.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-criticalIncidentRecognition-index',
  templateUrl: './criticalIncidentRecognition.index.html',
  styleUrls: ['./criticalIncidentRecognition.index.css']
})
export class CriticalIncidentRecognitionIndexUI extends IndexView<CriticalIncidentRecognition> implements AfterViewInit, IIndexView<CriticalIncidentRecognition> {

  constructor(private criticalIncidentRecognitionService: CriticalIncidentRecognitionService) {
    super(criticalIncidentRecognitionService);
    this.filterInstance = CriticalIncidentRecognition.SeekInstance();
    this.currentInstance = new CriticalIncidentRecognition();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(criticalIncidentRecognitionEditUI: CriticalIncidentRecognitionEditUI){
    criticalIncidentRecognitionEditUI.ShowDialog(new CriticalIncidentRecognition());
  }

  resetFilter() {
    this.filterInstance = CriticalIncidentRecognition.SeekInstance();
    
    
  }

  public onEditModalClosed(criticalIncidentRecognition: CriticalIncidentRecognition) {
    this.onRefresh();
    this.currentInstance = new CriticalIncidentRecognition();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}