import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ConnectionType } from '../connectionType';
import { ConnectionTypeService } from '../connectionType.service';
import { ConnectionTypeMasterUI } from '../master/connectionType.master';
import { ConnectionTypeEditUI } from '../edit/connectionType.edit';
import { ConnectionTypeDeleteUI } from '../delete/connectionType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { CoachConnectionLineEditUI } from '../../../LAD/CoachConnectionLine/edit/coachConnectionLine.edit';
import { CoachConnectionLine } from '../../../LAD/CoachConnectionLine/coachConnectionLine';
import { AssessorConnectionLineEditUI } from '../../../LAD/AssessorConnectionLine/edit/assessorConnectionLine.edit';
import { AssessorConnectionLine } from '../../../LAD/AssessorConnectionLine/assessorConnectionLine';
import { PersonConnectionEditUI } from '../../../HR/PersonConnection/edit/personConnection.edit';
import { PersonConnection } from '../../../HR/PersonConnection/personConnection';



@Component({
  selector: 'base-connectionType-index',
  templateUrl: './connectionType.index.html',
  styleUrls: ['./connectionType.index.css']
})
export class ConnectionTypeIndexUI extends IndexView<ConnectionType> implements AfterViewInit, IIndexView<ConnectionType> {

  constructor(private connectionTypeService: ConnectionTypeService) {
    super(connectionTypeService);
    this.filterInstance = ConnectionType.SeekInstance();
    this.currentInstance = new ConnectionType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region CoachConnectionLine

  public coachConnectionLine_Clicked(coachConnectionLineEditUI: CoachConnectionLineEditUI) {
    coachConnectionLineEditUI.ConnectionType = this.currentInstance;
    coachConnectionLineEditUI.ShowDialog(new CoachConnectionLine());
  }
                    
  public coachConnectionLineEditUI_Closed(coachConnectionLine: CoachConnectionLine) {
    if (!coachConnectionLine)
      return;
    this.onRefresh();
  }
  
  //#endregion CoachConnectionLine

  //#region AssessorConnectionLine

  public assessorConnectionLine_Clicked(assessorConnectionLineEditUI: AssessorConnectionLineEditUI) {
    assessorConnectionLineEditUI.ConnectionType = this.currentInstance;
    assessorConnectionLineEditUI.ShowDialog(new AssessorConnectionLine());
  }
                    
  public assessorConnectionLineEditUI_Closed(assessorConnectionLine: AssessorConnectionLine) {
    if (!assessorConnectionLine)
      return;
    this.onRefresh();
  }
  
  //#endregion AssessorConnectionLine

  //#region PersonConnection

  public personConnection_Clicked(personConnectionEditUI: PersonConnectionEditUI) {
    personConnectionEditUI.ConnectionType = this.currentInstance;
    personConnectionEditUI.ShowDialog(new PersonConnection());
  }
                    
  public personConnectionEditUI_Closed(personConnection: PersonConnection) {
    if (!personConnection)
      return;
    this.onRefresh();
  }
  
  //#endregion PersonConnection


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(connectionTypeEditUI: ConnectionTypeEditUI){
    connectionTypeEditUI.ShowDialog(new ConnectionType());
  }

  resetFilter() {
    this.filterInstance = ConnectionType.SeekInstance();
    
    
  }

  public onEditModalClosed(connectionType: ConnectionType) {
    this.onRefresh();
    this.currentInstance = new ConnectionType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}