

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { MaritalStatus } from '../maritalStatus';
import { MaritalStatusService } from '../maritalStatus.service';
import { MaritalStatusMasterUI } from '../master/maritalStatus.master';
import { MaritalStatusEditUI } from '../edit/maritalStatus.edit';
import { MaritalStatusDeleteUI } from '../delete/maritalStatus.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';
import { Person } from '../../../HR/Person/person';



@Component({
  selector: 'base-hr-maritalStatus-index',
  templateUrl: './maritalStatus.index.html',
  styleUrls: ['./maritalStatus.index.css']
})
export class MaritalStatusIndexUI extends IndexView<MaritalStatus> implements AfterViewInit, IIndexView<MaritalStatus> {

  constructor(private maritalStatusService: MaritalStatusService) {
    super(maritalStatusService);
    this.filterInstance = MaritalStatus.SeekInstance();
    this.currentInstance = new MaritalStatus();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Person

  public person_Clicked(personEditUI: PersonEditUI) {
    personEditUI.MaritalStatus = this.currentInstance;
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

  public onAdd(maritalStatusEditUI: MaritalStatusEditUI){
    maritalStatusEditUI.ShowDialog(new MaritalStatus());
  }

  resetFilter() {
    this.filterInstance = MaritalStatus.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(maritalStatus: MaritalStatus) {
    this.onRefresh();
    this.currentInstance = new MaritalStatus();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
