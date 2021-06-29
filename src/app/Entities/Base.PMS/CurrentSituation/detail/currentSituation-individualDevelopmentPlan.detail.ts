import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { CurrentSituation } from '../currentSituation';
import { CurrentSituationService } from '../currentSituation.service';

import { IndividualDevelopmentPlan } from '../../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';
import { IndividualDevelopmentPlanMasterUI } from '../../../PMS/IndividualDevelopmentPlan/master/individualDevelopmentPlan.master';
import { IndividualDevelopmentPlanEditUI } from '../../../PMS/IndividualDevelopmentPlan/edit/individualDevelopmentPlan.edit';
import { IndividualDevelopmentPlanDeleteUI } from '../../../PMS/IndividualDevelopmentPlan/delete/individualDevelopmentPlan.delete';



@Component({
  selector: 'currentSituation-individualDevelopmentPlan-detail',
  templateUrl: './currentSituation-individualDevelopmentPlan.detail.html',
  styleUrls: ['./currentSituation-individualDevelopmentPlan.detail.css'],
  providers: [CurrentSituationService]
}) 

@Injectable()
export class CurrentSituation_IndividualDevelopmentPlan_DetailUI extends DetailView<CurrentSituation> {

  constructor(private currentSituationService: CurrentSituationService) {
    super(currentSituationService);
  }

  public IndividualDevelopmentPlanList : IndividualDevelopmentPlan[] = [];
  
  public currentIndividualDevelopmentPlan : IndividualDevelopmentPlan = new IndividualDevelopmentPlan();

  private currentSituation: CurrentSituation = new CurrentSituation();

  @Input()
  public set CurrentSituation(value: CurrentSituation) {
    this.currentSituation = value;
    this.onReload();
  }

  public get CurrentSituation(): CurrentSituation { return this.currentSituation }

  public onReload(){
    if (CurrentSituation.NotConfirm(this.currentSituation))
      return;
    this.currentSituationService
      .ServiceCollection
      .CollectionOfIndividualDevelopmentPlan(this.currentSituation)
      .then(individualDevelopmentPlanList => {
        this.IndividualDevelopmentPlanList = individualDevelopmentPlanList;
        this.currentIndividualDevelopmentPlan = new IndividualDevelopmentPlan();
      });
  }

  public onSelect(i: number) {
    this.currentIndividualDevelopmentPlan = this.IndividualDevelopmentPlanList[i];
    if (IndividualDevelopmentPlan.NotConfirm(this.currentIndividualDevelopmentPlan))
      this.currentIndividualDevelopmentPlan = new IndividualDevelopmentPlan();
  }

  public onDblClicked(masterUI: IndividualDevelopmentPlanMasterUI) {
    if (IndividualDevelopmentPlan.NotConfirm(this.currentIndividualDevelopmentPlan))
      return;
    masterUI.ShowDialog(this.currentIndividualDevelopmentPlan);
  }

  public onAdd(editUI: IndividualDevelopmentPlanEditUI) {
    editUI.CurrentSituation = this.currentSituation;
    editUI.ShowDialog(new IndividualDevelopmentPlan());
  }

  public onEdit(editUI: IndividualDevelopmentPlanEditUI) {
    if (IndividualDevelopmentPlan.NotConfirm(this.currentIndividualDevelopmentPlan))
      return;
    editUI.ShowDialog(this.currentIndividualDevelopmentPlan);
  }

  public onDelete(deleteUI: IndividualDevelopmentPlanDeleteUI) {
    if (IndividualDevelopmentPlan.NotConfirm(this.currentIndividualDevelopmentPlan))
      return;
    deleteUI.ShowDialog(this.currentIndividualDevelopmentPlan);
  }

  public onEditModal_Closed(individualDevelopmentPlan: IndividualDevelopmentPlan) {
    this.onReload();
  }

  public onDeleteModal_Closed(result:boolean) {
    this.onReload();
  }
}