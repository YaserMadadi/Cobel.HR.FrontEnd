import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CompetencyItem } from '../competencyItem';
import { CompetencyItemService } from '../competencyItem.service';
import { CompetencyItemMasterUI } from '../master/competencyItem.master';
import { CompetencyItemEditUI } from '../edit/competencyItem.edit';
import { CompetencyItemDeleteUI } from '../delete/competencyItem.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { BehavioralObjectiveEditUI } from '../../BehavioralObjective/edit/behavioralObjective.edit';
import { BehavioralObjective } from '../../BehavioralObjective/behavioralObjective';
import { AssessmentScoreEditUI } from '../../../LAD/AssessmentScore/edit/assessmentScore.edit';
import { AssessmentScore } from '../../../LAD/AssessmentScore/assessmentScore';
import { CompetencyItemKPIEditUI } from '../../CompetencyItemKPI/edit/competencyItemKPI.edit';
import { CompetencyItemKPI } from '../../CompetencyItemKPI/competencyItemKPI';
import { DevelopmentPlanCompetencyEditUI } from '../../DevelopmentPlanCompetency/edit/developmentPlanCompetency.edit';
import { DevelopmentPlanCompetency } from '../../DevelopmentPlanCompetency/developmentPlanCompetency';



@Component({
  selector: 'pms-competencyItem-index',
  templateUrl: './competencyItem.index.html',
  styleUrls: ['./competencyItem.index.css']
})
export class CompetencyItemIndexUI extends IndexView<CompetencyItem> implements AfterViewInit, IIndexView<CompetencyItem> {

  constructor(private competencyItemService: CompetencyItemService) {
    super(competencyItemService);
    this.filterInstance = CompetencyItem.SeekInstance();
    this.currentInstance = new CompetencyItem();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region BehavioralObjective

  public behavioralObjective_Clicked(behavioralObjectiveEditUI: BehavioralObjectiveEditUI) {
    behavioralObjectiveEditUI.CompetencyItem = this.currentInstance;
    behavioralObjectiveEditUI.ShowDialog(new BehavioralObjective());
  }
                    
  public behavioralObjectiveEditUI_Closed(behavioralObjective: BehavioralObjective) {
    if (!behavioralObjective)
      return;
    this.onRefresh();
  }
  
  //#endregion BehavioralObjective

  //#region AssessmentScore

  public assessmentScore_Clicked(assessmentScoreEditUI: AssessmentScoreEditUI) {
    assessmentScoreEditUI.CompetencyItem = this.currentInstance;
    assessmentScoreEditUI.ShowDialog(new AssessmentScore());
  }
                    
  public assessmentScoreEditUI_Closed(assessmentScore: AssessmentScore) {
    if (!assessmentScore)
      return;
    this.onRefresh();
  }
  
  //#endregion AssessmentScore

  //#region CompetencyItemKPI

  public competencyItemKPI_Clicked(competencyItemKPIEditUI: CompetencyItemKPIEditUI) {
    competencyItemKPIEditUI.CompetencyItem = this.currentInstance;
    competencyItemKPIEditUI.ShowDialog(new CompetencyItemKPI());
  }
                    
  public competencyItemKPIEditUI_Closed(competencyItemKPI: CompetencyItemKPI) {
    if (!competencyItemKPI)
      return;
    this.onRefresh();
  }
  
  //#endregion CompetencyItemKPI

  //#region DevelopmentPlanCompetency

  public developmentPlanCompetency_Clicked(developmentPlanCompetencyEditUI: DevelopmentPlanCompetencyEditUI) {
    developmentPlanCompetencyEditUI.CompetencyItem = this.currentInstance;
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

  public onAdd(competencyItemEditUI: CompetencyItemEditUI){
    competencyItemEditUI.ShowDialog(new CompetencyItem());
  }

  resetFilter() {
    this.filterInstance = CompetencyItem.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(competencyItem: CompetencyItem) {
    this.onRefresh();
    this.currentInstance = new CompetencyItem();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}