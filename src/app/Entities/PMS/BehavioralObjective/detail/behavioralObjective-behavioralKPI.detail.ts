import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { BehavioralObjective } from '../behavioralObjective';
import { BehavioralObjectiveService } from '../behavioralObjective.service';

import { BehavioralKPI } from '../../BehavioralKPI/behavioralKPI';
import { BehavioralKPIMasterUI } from '../../BehavioralKPI/master/behavioralKPI.master';
import { BehavioralKPIEditUI } from '../../BehavioralKPI/edit/behavioralKPI.edit';
import { BehavioralKPIDeleteUI } from '../../BehavioralKPI/delete/behavioralKPI.delete';
import { AuthService } from '../../../../../xcore/security/auth_service';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { MessageType } from '../../../../../xcore/tools/Enum';



@Component({
  selector: 'behavioralObjective-behavioralKPI-detail',
  templateUrl: './behavioralObjective-behavioralKPI.detail.html',
  styleUrls: ['./behavioralObjective-behavioralKPI.detail.css'],
  providers: [BehavioralObjectiveService]
})

@Injectable()
export class BehavioralObjective_BehavioralKPI_DetailUI extends DetailView<BehavioralObjective> {

  constructor(private behavioralObjectiveService: BehavioralObjectiveService) {
    super(behavioralObjectiveService);
  }

  public BehavioralKPIList: BehavioralKPI[] = [];

  public currentBehavioralKPI: BehavioralKPI = new BehavioralKPI();

  private behavioralObjective: BehavioralObjective = new BehavioralObjective();

  @Input()
  public set BehavioralObjective(value: BehavioralObjective) {
    this.behavioralObjective = value;
    this.onReload();
  }

  public get BehavioralObjective(): BehavioralObjective { return this.behavioralObjective }

  public onReload() {
    if (BehavioralObjective.NotConfirm(this.behavioralObjective))
      return;
    this.behavioralObjectiveService
      .ServiceCollection
      .CollectionOfBehavioralKPI(this.behavioralObjective)
      .then(behavioralKPIList => {
        this.BehavioralKPIList = behavioralKPIList;
        this.currentBehavioralKPI = new BehavioralKPI();
      });
  }

  public onSelect(i: number) {
    this.currentBehavioralKPI = this.BehavioralKPIList[i];
    if (BehavioralKPI.NotConfirm(this.currentBehavioralKPI))
      this.currentBehavioralKPI = new BehavioralKPI();
  }

  public onDblClicked(masterUI: BehavioralKPIMasterUI) {
    if (BehavioralKPI.NotConfirm(this.currentBehavioralKPI))
      return;
    masterUI.ShowDialog(this.currentBehavioralKPI);
  }

  public onAdd(editUI: BehavioralKPIEditUI) {
    editUI.BehavioralObjective = this.behavioralObjective;
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0)
      editUI.ShowDialog(new BehavioralKPI());
    else
      MessageController.ShowMessage(MessageType.AddPermissionDenied);
  }

  public onEdit(editUI: BehavioralKPIEditUI) {
    if (BehavioralKPI.NotConfirm(this.currentBehavioralKPI))
      return;
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0)
      editUI.ShowDialog(this.currentBehavioralKPI);
    else
      MessageController.ShowMessage(MessageType.EditPermissionDenied);
  }

  public onDelete(deleteUI: BehavioralKPIDeleteUI) {
    if (BehavioralKPI.NotConfirm(this.currentBehavioralKPI))
      return;
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0)
      deleteUI.ShowDialog(this.currentBehavioralKPI);
    else
      MessageController.ShowMessage(MessageType.EditPermissionDenied);
  }

  public onEditModal_Closed(behavioralKPI: BehavioralKPI) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}