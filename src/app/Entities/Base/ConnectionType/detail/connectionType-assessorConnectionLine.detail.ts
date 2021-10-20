import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { ConnectionType } from '../connectionType';
import { ConnectionTypeService } from '../connectionType.service';

import { AssessorConnectionLine } from '../../../LAD/AssessorConnectionLine/assessorConnectionLine';
import { AssessorConnectionLineMasterUI } from '../../../LAD/AssessorConnectionLine/master/assessorConnectionLine.master';
import { AssessorConnectionLineEditUI } from '../../../LAD/AssessorConnectionLine/edit/assessorConnectionLine.edit';
import { AssessorConnectionLineDeleteUI } from '../../../LAD/AssessorConnectionLine/delete/assessorConnectionLine.delete';



@Component({
  selector: 'connectionType-assessorConnectionLine-detail',
  templateUrl: './connectionType-assessorConnectionLine.detail.html',
  styleUrls: ['./connectionType-assessorConnectionLine.detail.css'],
}) 

@Injectable()
export class ConnectionType_AssessorConnectionLine_DetailUI extends DetailView<ConnectionType> {

  constructor(private connectionTypeService: ConnectionTypeService) {
    super(connectionTypeService);
  }

  public AssessorConnectionLineList : AssessorConnectionLine[] = [];
  
  public currentAssessorConnectionLine : AssessorConnectionLine = new AssessorConnectionLine();

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
      .CollectionOfAssessorConnectionLine(this.connectionType)
      .then(assessorConnectionLineList => {
        this.AssessorConnectionLineList = assessorConnectionLineList;
        this.currentAssessorConnectionLine = new AssessorConnectionLine();
      });
  }

  public onSelect(i: number) {
    this.currentAssessorConnectionLine = this.AssessorConnectionLineList[i];
    if (AssessorConnectionLine.NotConfirm(this.currentAssessorConnectionLine))
      this.currentAssessorConnectionLine = new AssessorConnectionLine();
  }

  public onDblClicked(masterUI: AssessorConnectionLineMasterUI) {
    if (AssessorConnectionLine.NotConfirm(this.currentAssessorConnectionLine))
      return;
    masterUI.ShowDialog(this.currentAssessorConnectionLine);
  }

  public onAdd(editUI: AssessorConnectionLineEditUI) {
    editUI.ConnectionType = this.connectionType;
    editUI.ShowDialog(new AssessorConnectionLine());
  }

  public onEdit(editUI: AssessorConnectionLineEditUI) {
    if (AssessorConnectionLine.NotConfirm(this.currentAssessorConnectionLine))
      return;
    editUI.ShowDialog(this.currentAssessorConnectionLine);
  }

  public onDelete(deleteUI: AssessorConnectionLineDeleteUI) {
    if (AssessorConnectionLine.NotConfirm(this.currentAssessorConnectionLine))
      return;
    deleteUI.ShowDialog(this.currentAssessorConnectionLine);
  }

  public onEditModal_Closed(assessorConnectionLine: AssessorConnectionLine) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}