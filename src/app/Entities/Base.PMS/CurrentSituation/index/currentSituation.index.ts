import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CurrentSituation } from '../currentSituation';
import { CurrentSituationService } from '../currentSituation.service';
import { CurrentSituationMasterUI } from '../master/currentSituation.master';
import { CurrentSituationEditUI } from '../edit/currentSituation.edit';
import { CurrentSituationDeleteUI } from '../delete/currentSituation.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { IndividualDevelopmentPlanEditUI } from '../../../PMS/IndividualDevelopmentPlan/edit/individualDevelopmentPlan.edit';
import { IndividualDevelopmentPlan } from '../../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';



@Component({
  selector: 'base-pms-currentSituation-index',
  templateUrl: './currentSituation.index.html',
  styleUrls: ['./currentSituation.index.css']
})
export class CurrentSituationIndexUI extends IndexView<CurrentSituation> implements AfterViewInit, IIndexView<CurrentSituation> {

  constructor(private currentSituationService: CurrentSituationService) {
    super(currentSituationService);
    this.filterInstance = CurrentSituation.SeekInstance();
    this.currentInstance = new CurrentSituation();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region IndividualDevelopmentPlan

  public individualDevelopmentPlan_Clicked(individualDevelopmentPlanEditUI: IndividualDevelopmentPlanEditUI) {
    individualDevelopmentPlanEditUI.CurrentSituation = this.currentInstance;
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

  public onAdd(currentSituationEditUI: CurrentSituationEditUI){
    currentSituationEditUI.ShowDialog(new CurrentSituation());
  }

  resetFilter() {
    this.filterInstance = CurrentSituation.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(currentSituation: CurrentSituation) {
    this.onRefresh();
    this.currentInstance = new CurrentSituation();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}