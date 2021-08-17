import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { PersonConnection } from '../personConnection';
import { PersonConnectionService } from '../personConnection.service';
import { PersonConnectionMasterUI } from '../master/personConnection.master';
import { PersonConnectionEditUI } from '../edit/personConnection.edit';
import { PersonConnectionDeleteUI } from '../delete/personConnection.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { ConnectionType } from '../../../Base/ConnectionType/connectionType';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-personConnection-index',
  templateUrl: './personConnection.index.html',
  styleUrls: ['./personConnection.index.css']
})
export class PersonConnectionIndexUI extends IndexView<PersonConnection> implements AfterViewInit, IIndexView<PersonConnection> {

  constructor(private personConnectionService: PersonConnectionService) {
    super(personConnectionService);
    this.filterInstance = PersonConnection.SeekInstance();
    this.currentInstance = new PersonConnection();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(personConnectionEditUI: PersonConnectionEditUI){
    personConnectionEditUI.ShowDialog(new PersonConnection());
  }

  resetFilter() {
    this.filterInstance = PersonConnection.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(personConnection: PersonConnection) {
    this.onRefresh();
    this.currentInstance = new PersonConnection();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}