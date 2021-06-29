import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { DesirableSituation } from '../desirableSituation';
import { DesirableSituationService } from '../desirableSituation.service';

import { IndividualDevelopmentPlan } from '../../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';
import { IndividualDevelopmentPlanMasterUI } from '../../../PMS/IndividualDevelopmentPlan/master/individualDevelopmentPlan.master';
import { IndividualDevelopmentPlanEditUI } from '../../../PMS/IndividualDevelopmentPlan/edit/individualDevelopmentPlan.edit';
import { IndividualDevelopmentPlanDeleteUI } from '../../../PMS/IndividualDevelopmentPlan/delete/individualDevelopmentPlan.delete';



@Component({
  selector: 'desirableSituation-individualDevelopmentPlan-detail',
  templateUrl: './desirableSituation-individualDevelopmentPlan.detail.html',
  styleUrls: ['./desirableSituation-individualDevelopmentPlan.detail.css'],
  providers: [DesirableSituationService]
}) 

@Injectable()
export class DesirableSituation_IndividualDevelopmentPlan_DetailUI extends DetailView<DesirableSituation> {

  constructor(private desirableSituationService: DesirableSituationService) {
    super(desirableSituationService);
  }

  public IndividualDevelopmentPlanList : IndividualDevelopmentPlan[] = [];
  
  public currentIndividualDevelopmentPlan : IndividualDevelopmentPlan = new IndividualDevelopmentPlan();

  private desirableSituation: DesirableSituation = new DesirableSituation();

  @Input()
  public set DesirableSituation(value: DesirableSituation) {
    this.desirableSituation = value;
    this.onReload();
  }

  public get DesirableSituation(): DesirableSituation { return this.desirableSituation }

  public onReload(){
    if (DesirableSituation.NotConfirm(this.desirableSituation))
      return;
    this.desirableSituationService
      .ServiceCollection
      .CollectionOfIndividualDevelopmentPlan(this.desirableSituation)
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
    editUI.DesirableSituation = this.desirableSituation;
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