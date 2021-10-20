import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { DevelopmentPlanCompetency } from '../developmentPlanCompetency';
import { DevelopmentPlanCompetencyService } from '../developmentPlanCompetency.service';
import { DevelopmentPlanCompetencyMasterUI } from '../master/developmentPlanCompetency.master';
import { DevelopmentPlanCompetencyEditUI } from '../edit/developmentPlanCompetency.edit';
import { DevelopmentPlanCompetencyDeleteUI } from '../delete/developmentPlanCompetency.delete';

import { IndividualDevelopmentPlan } from '../../IndividualDevelopmentPlan/individualDevelopmentPlan';
import { IndividualDevelopmentPlanEditUI } from '../../IndividualDevelopmentPlan/edit/individualDevelopmentPlan.edit';
import { CompetencyItem } from '../../CompetencyItem/competencyItem';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-developmentPlanCompetency-index',
  templateUrl: './developmentPlanCompetency.index.html',
  styleUrls: ['./developmentPlanCompetency.index.css']
})
export class DevelopmentPlanCompetencyIndexUI extends IndexView<DevelopmentPlanCompetency> implements AfterViewInit, IIndexView<DevelopmentPlanCompetency> {

  constructor(private developmentPlanCompetencyService: DevelopmentPlanCompetencyService) {
    super(developmentPlanCompetencyService);
    this.filterInstance = DevelopmentPlanCompetency.SeekInstance();
    this.currentInstance = new DevelopmentPlanCompetency();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(developmentPlanCompetencyEditUI: DevelopmentPlanCompetencyEditUI){
    developmentPlanCompetencyEditUI.ShowDialog(new DevelopmentPlanCompetency());
  }

  resetFilter() {
    this.filterInstance = DevelopmentPlanCompetency.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(developmentPlanCompetency: DevelopmentPlanCompetency) {
    this.onRefresh();
    this.currentInstance = new DevelopmentPlanCompetency();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}