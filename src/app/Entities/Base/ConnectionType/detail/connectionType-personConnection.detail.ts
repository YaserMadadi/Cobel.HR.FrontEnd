import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ConnectionType } from '../connectionType';
import { ConnectionTypeService } from '../connectionType.service';

import { PersonConnection } from '../../../HR/PersonConnection/personConnection';
import { PersonConnectionMasterUI } from '../../../HR/PersonConnection/master/personConnection.master';
import { PersonConnectionEditUI } from '../../../HR/PersonConnection/edit/personConnection.edit';
import { PersonConnectionDeleteUI } from '../../../HR/PersonConnection/delete/personConnection.delete';



@Component({
  selector: 'connectionType-personConnection-detail',
  templateUrl: './connectionType-personConnection.detail.html',
  styleUrls: ['./connectionType-personConnection.detail.css'],
  
})

@Injectable()
export class ConnectionType_PersonConnection_DetailUI extends DetailView<ConnectionType> {

  constructor(private connectionTypeService: ConnectionTypeService) {
    super(connectionTypeService);
  }

  public PersonConnectionList: PersonConnection[] = [];

  public currentPersonConnection: PersonConnection = new PersonConnection();

  private connectionType: ConnectionType = new ConnectionType();

  @Input()
  public set ConnectionType(value: ConnectionType) {
    this.connectionType = value;
    this.onReload();
  }

  public get ConnectionType(): ConnectionType { return this.connectionType }

  public onReload() {
    console.log('ConnectionType : ', this.connectionType);
    if (ConnectionType.NotConfirm(this.connectionType))
      return;
    this.connectionTypeService
      .ServiceCollection
      .CollectionOfPersonConnection(this.connectionType)
      .then(personConnectionList => {
        this.PersonConnectionList = personConnectionList;
        this.currentPersonConnection = new PersonConnection();
      });
  }

  public onSelect(i: number) {
    this.currentPersonConnection = this.PersonConnectionList[i];
    if (PersonConnection.NotConfirm(this.currentPersonConnection))
      this.currentPersonConnection = new PersonConnection();
  }

  public onDblClicked(masterUI: PersonConnectionMasterUI) {
    if (PersonConnection.NotConfirm(this.currentPersonConnection))
      return;
    masterUI.ShowDialog(this.currentPersonConnection);
  }

  public onAdd(editUI: PersonConnectionEditUI) {
    editUI.ConnectionType = this.connectionType;
    editUI.ShowDialog(new PersonConnection());
  }

  public onEdit(editUI: PersonConnectionEditUI) {
    if (PersonConnection.NotConfirm(this.currentPersonConnection))
      return;
    editUI.ShowDialog(this.currentPersonConnection);
  }

  public onDelete(deleteUI: PersonConnectionDeleteUI) {
    if (PersonConnection.NotConfirm(this.currentPersonConnection))
      return;
    deleteUI.ShowDialog(this.currentPersonConnection);
  }

  public onEditModal_Closed(personConnection: PersonConnection) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}