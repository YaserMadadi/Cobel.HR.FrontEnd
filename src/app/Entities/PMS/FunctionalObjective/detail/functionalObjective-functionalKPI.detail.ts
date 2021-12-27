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
import { TargetSetting } from '../../TargetSetting/targetSetting';



@Component({
  selector: 'functionalObjective-functionalKPI-detail',
  templateUrl: './functionalObjective-functionalKPI.detail.html',
  styleUrls: ['./functionalObjective-functionalKPI.detail.css'],

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
    console.log(this.functionalObjective.targetSetting);
    this.currentFunctionalKPI.functionalObjective = this.functionalObjective;
    masterUI.ShowDialog(this.currentFunctionalKPI);
  }

  private async checkTargetSetting(): Promise<Boolean> {
    //var targetSetting = await this.functionalObjectiveService.TargetSettingService.RetrieveById(this.functionalObjective.targetSetting.id);
    //this.functionalObjective.targetSetting = targetSetting;
    if (this.functionalObjective.targetSetting.targetSettingMode.id != 2) {
      MessageController.ShowMessage(MessageType.NotTargetReviewingMode);
      return false;
    }
    if (this.functionalObjective.targetSetting.employee.id == AuthService.currentEmployee.id ||
      this.functionalObjective.targetSetting.isLocked) {
      MessageController.ShowMessage(MessageType.RecordIsLocked);
      return false;
    }
    return true;
  }

  public async onAdd(editUI: FunctionalKPIEditUI) {
    let result = await this.checkTargetSetting();
    if (!result)
      return;
    editUI.FunctionalObjective = this.functionalObjective;
    editUI.ShowDialog(new FunctionalKPI());
  }

  public async onEdit(editUI: FunctionalKPIEditUI) {
    let result = await this.checkTargetSetting();
    if (!result)
      return;

    if (FunctionalKPI.NotConfirm(this.currentFunctionalKPI))
      return;

    //editUI.FunctionalObjective = this.functionalObjective;
    editUI.ShowDialog(this.currentFunctionalKPI);
  }

  public async onDelete(deleteUI: FunctionalKPIDeleteUI) {
    let result = await this.checkTargetSetting();
    if (!result)
      return;
    if (FunctionalKPI.NotConfirm(this.currentFunctionalKPI))
      return;
    deleteUI.ShowDialog(this.currentFunctionalKPI);
  }

  public onEditModal_Closed(functionalKPI: FunctionalKPI) {
    this.onReload();
  }

  public onDeleteModal_Closed(result: boolean) {
    this.onReload();
  }
}