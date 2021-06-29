import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { IndividualDevelopmentPlan } from '../individualDevelopmentPlan';
import { IndividualDevelopmentPlanService } from '../individualDevelopmentPlan.service';
import { IndividualDevelopmentPlanMasterUI } from '../master/individualDevelopmentPlan.master';
import { IndividualDevelopmentPlanEditUI } from '../edit/individualDevelopmentPlan.edit';
import { IndividualDevelopmentPlanDeleteUI } from '../delete/individualDevelopmentPlan.delete';

import { Vision } from '../../Vision/vision';
import { VisionEditUI } from '../../Vision/edit/vision.edit';
import { DevelopmentPlanPriority } from '../../../Base.PMS/DevelopmentPlanPriority/developmentPlanPriority';
import { Subject } from '../../../Base.PMS/Subject/subject';
import { CurrentSituation } from '../../../Base.PMS/CurrentSituation/currentSituation';
import { DesirableSituation } from '../../../Base.PMS/DesirableSituation/desirableSituation';





import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { DevelopmentPlanCompetencyEditUI } from '../../DevelopmentPlanCompetency/edit/developmentPlanCompetency.edit';
import { DevelopmentPlanCompetency } from '../../DevelopmentPlanCompetency/developmentPlanCompetency';



@Component({
  selector: 'pms-individualDevelopmentPlan-index',
  templateUrl: './individualDevelopmentPlan.index.html',
  styleUrls: ['./individualDevelopmentPlan.index.css']
})
export class IndividualDevelopmentPlanIndexUI extends IndexView<IndividualDevelopmentPlan> implements AfterViewInit, IIndexView<IndividualDevelopmentPlan> {

  constructor(private individualDevelopmentPlanService: IndividualDevelopmentPlanService) {
    super(individualDevelopmentPlanService);
    this.filterInstance = IndividualDevelopmentPlan.SeekInstance();
    this.currentInstance = new IndividualDevelopmentPlan();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region DevelopmentPlanCompetency

  public developmentPlanCompetency_Clicked(developmentPlanCompetencyEditUI: DevelopmentPlanCompetencyEditUI) {
    developmentPlanCompetencyEditUI.IndividualDevelopmentPlan = this.currentInstance;
    developmentPlanCompetencyEditUI.ShowDialog(new DevelopmentPlanCompetency());
  }
                    
  public developmentPlanCompetencyEditUI_Closed(developmentPlanCompetency: DevelopmentPlanCompetency) {
    if (!developmentPlanCompetency)
      return;
    this.onRefresh();
  }
  
  //#endregion DevelopmentPlanCompetency


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(individualDevelopmentPlanEditUI: IndividualDevelopmentPlanEditUI){
    individualDevelopmentPlanEditUI.ShowDialog(new IndividualDevelopmentPlan());
  }

  resetFilter() {
    this.filterInstance = IndividualDevelopmentPlan.SeekInstance();
    
    
  }

  public onEditModalClosed(individualDevelopmentPlan: IndividualDevelopmentPlan) {
    this.onRefresh();
    this.currentInstance = new IndividualDevelopmentPlan();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}