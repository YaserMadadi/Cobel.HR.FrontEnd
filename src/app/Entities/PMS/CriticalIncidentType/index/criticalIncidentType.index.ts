import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CriticalIncidentType } from '../criticalIncidentType';
import { CriticalIncidentTypeService } from '../criticalIncidentType.service';
import { CriticalIncidentTypeMasterUI } from '../master/criticalIncidentType.master';
import { CriticalIncidentTypeEditUI } from '../edit/criticalIncidentType.edit';
import { CriticalIncidentTypeDeleteUI } from '../delete/criticalIncidentType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { CriticalIncidentEditUI } from '../../CriticalIncident/edit/criticalIncident.edit';
import { CriticalIncident } from '../../CriticalIncident/criticalIncident';



@Component({
  selector: 'pms-criticalIncidentType-index',
  templateUrl: './criticalIncidentType.index.html',
  styleUrls: ['./criticalIncidentType.index.css']
})
export class CriticalIncidentTypeIndexUI extends IndexView<CriticalIncidentType> implements AfterViewInit, IIndexView<CriticalIncidentType> {

  constructor(private criticalIncidentTypeService: CriticalIncidentTypeService) {
    super(criticalIncidentTypeService);
    this.filterInstance = CriticalIncidentType.SeekInstance();
    this.currentInstance = new CriticalIncidentType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region CriticalIncident

  public criticalIncident_Clicked(criticalIncidentEditUI: CriticalIncidentEditUI) {
    criticalIncidentEditUI.CriticalIncidentType = this.currentInstance;
    criticalIncidentEditUI.ShowDialog(new CriticalIncident());
  }
                    
  public criticalIncidentEditUI_Closed(criticalIncident: CriticalIncident) {
    if (!criticalIncident)
      return;
    this.onRefresh();
  }
  
  //#endregion CriticalIncident


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(criticalIncidentTypeEditUI: CriticalIncidentTypeEditUI){
    criticalIncidentTypeEditUI.ShowDialog(new CriticalIncidentType());
  }

  resetFilter() {
    this.filterInstance = CriticalIncidentType.SeekInstance();
    
    
  }

  public onEditModalClosed(criticalIncidentType: CriticalIncidentType) {
    this.onRefresh();
    this.currentInstance = new CriticalIncidentType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}