import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { MilitaryServiceStatus } from '../militaryServiceStatus';
import { MilitaryServiceStatusService } from '../militaryServiceStatus.service';
import { MilitaryServiceStatusMasterUI } from '../master/militaryServiceStatus.master';
import { MilitaryServiceStatusEditUI } from '../edit/militaryServiceStatus.edit';
import { MilitaryServiceStatusDeleteUI } from '../delete/militaryServiceStatus.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { MilitaryServiceEditUI } from '../../../HR/MilitaryService/edit/militaryService.edit';
import { MilitaryService } from '../../../HR/MilitaryService/militaryService';



@Component({
  selector: 'base-militaryServiceStatus-index',
  templateUrl: './militaryServiceStatus.index.html',
  styleUrls: ['./militaryServiceStatus.index.css']
})
export class MilitaryServiceStatusIndexUI extends IndexView<MilitaryServiceStatus> implements AfterViewInit, IIndexView<MilitaryServiceStatus> {

  constructor(private militaryServiceStatusService: MilitaryServiceStatusService) {
    super(militaryServiceStatusService);
    this.filterInstance = MilitaryServiceStatus.SeekInstance();
    this.currentInstance = new MilitaryServiceStatus();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region MilitaryService

  public militaryService_Clicked(militaryServiceEditUI: MilitaryServiceEditUI) {
    militaryServiceEditUI.MilitaryServiceStatus = this.currentInstance;
    militaryServiceEditUI.ShowDialog(new MilitaryService());
  }
                    
  public militaryServiceEditUI_Closed(militaryService: MilitaryService) {
    if (!militaryService)
      return;
    this.onRefresh();
  }
  
  //#endregion MilitaryService


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(militaryServiceStatusEditUI: MilitaryServiceStatusEditUI){
    militaryServiceStatusEditUI.ShowDialog(new MilitaryServiceStatus());
  }

  resetFilter() {
    this.filterInstance = MilitaryServiceStatus.SeekInstance();
    
    
  }

  public onEditModalClosed(militaryServiceStatus: MilitaryServiceStatus) {
    this.onRefresh();
    this.currentInstance = new MilitaryServiceStatus();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}