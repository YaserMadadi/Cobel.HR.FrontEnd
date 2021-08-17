import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { HealthStatus } from '../healthStatus';
import { HealthStatusService } from '../healthStatus.service';
import { HealthStatusMasterUI } from '../master/healthStatus.master';
import { HealthStatusEditUI } from '../edit/healthStatus.edit';
import { HealthStatusDeleteUI } from '../delete/healthStatus.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';
import { Person } from '../../../HR/Person/person';



@Component({
  selector: 'base-healthStatus-index',
  templateUrl: './healthStatus.index.html',
  styleUrls: ['./healthStatus.index.css']
})
export class HealthStatusIndexUI extends IndexView<HealthStatus> implements AfterViewInit, IIndexView<HealthStatus> {

  constructor(private healthStatusService: HealthStatusService) {
    super(healthStatusService);
    this.filterInstance = HealthStatus.SeekInstance();
    this.currentInstance = new HealthStatus();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Person

  public person_Clicked(personEditUI: PersonEditUI) {
    personEditUI.HealthStatus = this.currentInstance;
    personEditUI.ShowDialog(new Person());
  }
                    
  public personEditUI_Closed(person: Person) {
    if (!person)
      return;
    this.onRefresh();
  }
  
  //#endregion Person


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(healthStatusEditUI: HealthStatusEditUI){
    healthStatusEditUI.ShowDialog(new HealthStatus());
  }

  resetFilter() {
    this.filterInstance = HealthStatus.SeekInstance();
    super.resetFilter();
    
  }

  public onEditModalClosed(healthStatus: HealthStatus) {
    this.onRefresh();
    this.currentInstance = new HealthStatus();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}