import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { FunctionalObjective } from '../functionalObjective';
import { FunctionalObjectiveService } from '../functionalObjective.service';

import { FunctionalKPI } from '../../FunctionalKPI/functionalKPI';
import { FunctionalKPIMasterUI } from '../../FunctionalKPI/master/functionalKPI.master';
import { FunctionalKPIEditUI } from '../../FunctionalKPI/edit/functionalKPI.edit';
import { FunctionalKPIDeleteUI } from '../../FunctionalKPI/delete/functionalKPI.delete';
import { AuthService } from '../../../../../xcore/security/auth_service';
import { MessageType } from '../../../../../xcore/tools/Enum';
import { MessageController } from '../../../../../xcore/tools/controller.message';



@Component({
  selector: 'functionalObjective-functionalKPI-detail',
  templateUrl: './functionalObjective-functionalKPI.detail.html',
  styleUrls: ['./functionalObjective-functionalKPI.detail.css'],
  providers: [FunctionalObjectiveService]
})

@Injectable()
export class FunctionalObjective_FunctionalKPI_DetailUI extends DetailView<FunctionalObjective> {

  constructor(private functionalObjectiveService: FunctionalObjectiveService) {
    super(functionalObjectiveService);
  }

  public FunctionalKPIList: FunctionalKPI[] = [];

  public currentFunctionalKPI: FunctionalKPI = new FunctionalKPI();

  private functionalObjective: FunctionalObjective = new FunctionalObjective();

  @Input()
  public set FunctionalObjective(value: FunctionalObjective) {
    this.functionalObjective = value;
    this.onReload();
  }

  public get FunctionalObjective(): FunctionalObjective { return this.functionalObjective }

  public onReload() {
    if (FunctionalObjective.NotConfirm(this.functionalObjective))
      return;
    this.functionalObjectiveService
      .ServiceCollection
      .CollectionOfFunctionalKPI(this.functionalObjective)
      .then(functionalKPIList => {
        this.FunctionalKPIList = functionalKPIList;
        this.currentFunctionalKPI = new FunctionalKPI();
      });
  }

  public onSelect(i: number) {
    this.currentFunctionalKPI = this.FunctionalKPIList[i];
    if (FunctionalKPI.NotConfirm(this.currentFunctionalKPI))
      this.currentFunctionalKPI = new FunctionalKPI();
  }

  public onDblClicked(masterUI: FunctionalKPIMasterUI) {
    if (FunctionalKPI.NotConfirm(this.currentFunctionalKPI))
      return;
    masterUI.ShowDialog(this.currentFunctionalKPI);
  }

  public onAdd(editUI: FunctionalKPIEditUI) {
    editUI.FunctionalObjective = this.functionalObjective;
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0)
      editUI.ShowDialog(new FunctionalKPI());
    else
      MessageController.ShowMessage(MessageType.AddPermissionDenied);

  }

  public onEdit(editUI: FunctionalKPIEditUI) {
    if (FunctionalKPI.NotConfirm(this.currentFunctionalKPI))
      return;
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0)
      editUI.ShowDialog(this.currentFunctionalKPI);
    else
      MessageController.ShowMessage(MessageType.EditPermissionDenied);

  }

  public onDelete(deleteUI: FunctionalKPIDeleteUI) {
    if (FunctionalKPI.NotConfirm(this.currentFunctionalKPI))
      return;
    if (AuthService.currentPositionList.filter(item => item.childCount > 0).length > 0)
      deleteUI.ShowDialog(this.currentFunctionalKPI);
    else
      MessageController.ShowMessage(MessageType.DeletePermissionDenied);
  }

  public onEditModal_Closed(functionalKPI: FunctionalKPI) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}