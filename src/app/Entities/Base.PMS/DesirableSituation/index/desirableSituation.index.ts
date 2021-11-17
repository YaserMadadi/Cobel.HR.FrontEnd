import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { DesirableSituation } from '../desirableSituation';
import { DesirableSituationService } from '../desirableSituation.service';
import { DesirableSituationMasterUI } from '../master/desirableSituation.master';
import { DesirableSituationEditUI } from '../edit/desirableSituation.edit';
import { DesirableSituationDeleteUI } from '../delete/desirableSituation.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { IndividualDevelopmentPlanEditUI } from '../../../PMS/IndividualDevelopmentPlan/edit/individualDevelopmentPlan.edit';
import { IndividualDevelopmentPlan } from '../../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';



@Component({
  selector: 'base-pms-desirableSituation-index',
  templateUrl: './desirableSituation.index.html',
  styleUrls: ['./desirableSituation.index.css']
})
export class DesirableSituationIndexUI extends IndexView<DesirableSituation> implements AfterViewInit, IIndexView<DesirableSituation> {

  constructor(private desirableSituationService: DesirableSituationService) {
    super(desirableSituationService);
    this.filterInstance = DesirableSituation.SeekInstance();
    this.currentInstance = new DesirableSituation();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region IndividualDevelopmentPlan

  public individualDevelopmentPlan_Clicked(individualDevelopmentPlanEditUI: IndividualDevelopmentPlanEditUI) {
    individualDevelopmentPlanEditUI.DesirableSituation = this.currentInstance;
    individualDevelopmentPlanEditUI.ShowDialog(new IndividualDevelopmentPlan());
  }
                    
  public individualDevelopmentPlanEditUI_Closed(individualDevelopmentPlan: IndividualDevelopmentPlan) {
    if (!individualDevelopmentPlan)
      return;
    this.onRefresh();
  }
  
  //#endregion IndividualDevelopmentPlan


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(desirableSituationEditUI: DesirableSituationEditUI){
    desirableSituationEditUI.ShowDialog(new DesirableSituation());
  }

  resetFilter() {
    this.filterInstance = DesirableSituation.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(desirableSituation: DesirableSituation) {
    this.onRefresh();
    this.currentInstance = new DesirableSituation();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}