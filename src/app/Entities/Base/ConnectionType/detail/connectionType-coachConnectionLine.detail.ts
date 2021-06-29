import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ConnectionType } from '../connectionType';
import { ConnectionTypeService } from '../connectionType.service';

import { CoachConnectionLine } from '../../../LAD/CoachConnectionLine/coachConnectionLine';
import { CoachConnectionLineMasterUI } from '../../../LAD/CoachConnectionLine/master/coachConnectionLine.master';
import { CoachConnectionLineEditUI } from '../../../LAD/CoachConnectionLine/edit/coachConnectionLine.edit';
import { CoachConnectionLineDeleteUI } from '../../../LAD/CoachConnectionLine/delete/coachConnectionLine.delete';



@Component({
  selector: 'connectionType-coachConnectionLine-detail',
  templateUrl: './connectionType-coachConnectionLine.detail.html',
  styleUrls: ['./connectionType-coachConnectionLine.detail.css'],
  providers: [ConnectionTypeService]
}) 

@Injectable()
export class ConnectionType_CoachConnectionLine_DetailUI extends DetailView<ConnectionType> {

  constructor(private connectionTypeService: ConnectionTypeService) {
    super(connectionTypeService);
  }

  public CoachConnectionLineList : CoachConnectionLine[] = [];
  
  public currentCoachConnectionLine : CoachConnectionLine = new CoachConnectionLine();

  private connectionType: ConnectionType = new ConnectionType();

  @Input()
  public set ConnectionType(value: ConnectionType) {
    this.connectionType = value;
    this.onReload();
  }

  public get ConnectionType(): ConnectionType { return this.connectionType }

  public onReload(){
    if (ConnectionType.NotConfirm(this.connectionType))
      return;
    this.connectionTypeService
      .ServiceCollection
      .CollectionOfCoachConnectionLine(this.connectionType)
      .then(coachConnectionLineList => {
        this.CoachConnectionLineList = coachConnectionLineList;
        this.currentCoachConnectionLine = new CoachConnectionLine();
      });
  }

  public onSelect(i: number) {
    this.currentCoachConnectionLine = this.CoachConnectionLineList[i];
    if (CoachConnectionLine.NotConfirm(this.currentCoachConnectionLine))
      this.currentCoachConnectionLine = new CoachConnectionLine();
  }

  public onDblClicked(masterUI: CoachConnectionLineMasterUI) {
    if (CoachConnectionLine.NotConfirm(this.currentCoachConnectionLine))
      return;
    masterUI.ShowDialog(this.currentCoachConnectionLine);
  }

  public onAdd(editUI: CoachConnectionLineEditUI) {
    editUI.ConnectionType = this.connectionType;
    editUI.ShowDialog(new CoachConnectionLine());
  }

  public onEdit(editUI: CoachConnectionLineEditUI) {
    if (CoachConnectionLine.NotConfirm(this.currentCoachConnectionLine))
      return;
    editUI.ShowDialog(this.currentCoachConnectionLine);
  }

  public onDelete(deleteUI: CoachConnectionLineDeleteUI) {
    if (CoachConnectionLine.NotConfirm(this.currentCoachConnectionLine))
      return;
    deleteUI.ShowDialog(this.currentCoachConnectionLine);
  }

  public onEditModal_Closed(coachConnectionLine: CoachConnectionLine) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}