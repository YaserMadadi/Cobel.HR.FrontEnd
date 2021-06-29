import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { IndividualDevelopmentPlan } from '../individualDevelopmentPlan';
import { IndividualDevelopmentPlanService } from '../individualDevelopmentPlan.service';

import { DevelopmentPlanCompetency } from '../../DevelopmentPlanCompetency/developmentPlanCompetency';
import { DevelopmentPlanCompetencyMasterUI } from '../../DevelopmentPlanCompetency/master/developmentPlanCompetency.master';
import { DevelopmentPlanCompetencyEditUI } from '../../DevelopmentPlanCompetency/edit/developmentPlanCompetency.edit';
import { DevelopmentPlanCompetencyDeleteUI } from '../../DevelopmentPlanCompetency/delete/developmentPlanCompetency.delete';



@Component({
  selector: 'individualDevelopmentPlan-developmentPlanCompetency-detail',
  templateUrl: './individualDevelopmentPlan-developmentPlanCompetency.detail.html',
  styleUrls: ['./individualDevelopmentPlan-developmentPlanCompetency.detail.css'],
  providers: [IndividualDevelopmentPlanService]
}) 

@Injectable()
export class IndividualDevelopmentPlan_DevelopmentPlanCompetency_DetailUI extends DetailView<IndividualDevelopmentPlan> {

  constructor(private individualDevelopmentPlanService: IndividualDevelopmentPlanService) {
    super(individualDevelopmentPlanService);
  }

  public DevelopmentPlanCompetencyList : DevelopmentPlanCompetency[] = [];
  
  public currentDevelopmentPlanCompetency : DevelopmentPlanCompetency = new DevelopmentPlanCompetency();

  private individualDevelopmentPlan: IndividualDevelopmentPlan = new IndividualDevelopmentPlan();

  @Input()
  public set IndividualDevelopmentPlan(value: IndividualDevelopmentPlan) {
    this.individualDevelopmentPlan = value;
    this.onReload();
  }

  public get IndividualDevelopmentPlan(): IndividualDevelopmentPlan { return this.individualDevelopmentPlan }

  public onReload(){
    if (IndividualDevelopmentPlan.NotConfirm(this.individualDevelopmentPlan))
      return;
    this.individualDevelopmentPlanService
      .ServiceCollection
      .CollectionOfDevelopmentPlanCompetency(this.individualDevelopmentPlan)
      .then(developmentPlanCompetencyList => {
        this.DevelopmentPlanCompetencyList = developmentPlanCompetencyList;
        this.currentDevelopmentPlanCompetency = new DevelopmentPlanCompetency();
      });
  }

  public onSelect(i: number) {
    this.currentDevelopmentPlanCompetency = this.DevelopmentPlanCompetencyList[i];
    if (DevelopmentPlanCompetency.NotConfirm(this.currentDevelopmentPlanCompetency))
      this.currentDevelopmentPlanCompetency = new DevelopmentPlanCompetency();
  }

  public onDblClicked(masterUI: DevelopmentPlanCompetencyMasterUI) {
    if (DevelopmentPlanCompetency.NotConfirm(this.currentDevelopmentPlanCompetency))
      return;
    masterUI.ShowDialog(this.currentDevelopmentPlanCompetency);
  }

  public onAdd(editUI: DevelopmentPlanCompetencyEditUI) {
    editUI.IndividualDevelopmentPlan = this.individualDevelopmentPlan;
    editUI.ShowDialog(new DevelopmentPlanCompetency());
  }

  public onEdit(editUI: DevelopmentPlanCompetencyEditUI) {
    if (DevelopmentPlanCompetency.NotConfirm(this.currentDevelopmentPlanCompetency))
      return;
    editUI.ShowDialog(this.currentDevelopmentPlanCompetency);
  }

  public onDelete(deleteUI: DevelopmentPlanCompetencyDeleteUI) {
    if (DevelopmentPlanCompetency.NotConfirm(this.currentDevelopmentPlanCompetency))
      return;
    deleteUI.ShowDialog(this.currentDevelopmentPlanCompetency);
  }

  public onEditModal_Closed(developmentPlanCompetency: DevelopmentPlanCompetency) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}