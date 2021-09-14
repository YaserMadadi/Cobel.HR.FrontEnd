import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { DevelopmentPlanPriority } from '../developmentPlanPriority';
import { DevelopmentPlanPriorityService } from '../developmentPlanPriority.service';

import { IndividualDevelopmentPlan } from '../../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';
import { IndividualDevelopmentPlanMasterUI } from '../../../PMS/IndividualDevelopmentPlan/master/individualDevelopmentPlan.master';
import { IndividualDevelopmentPlanEditUI } from '../../../PMS/IndividualDevelopmentPlan/edit/individualDevelopmentPlan.edit';
import { IndividualDevelopmentPlanDeleteUI } from '../../../PMS/IndividualDevelopmentPlan/delete/individualDevelopmentPlan.delete';



@Component({
  selector: 'priority-individualDevelopmentPlan-detail',
  templateUrl: './priority-individualDevelopmentPlan.detail.html',
  styleUrls: ['./priority-individualDevelopmentPlan.detail.css']
})
export class Priority_IndividualDevelopmentPlan_DetailUI extends DetailView<DevelopmentPlanPriority> {

  constructor(private developmentPlanPriorityService: DevelopmentPlanPriorityService) {
    super(developmentPlanPriorityService);
  }

  public IndividualDevelopmentPlanList : IndividualDevelopmentPlan[] = [];
  
  public currentIndividualDevelopmentPlan : IndividualDevelopmentPlan = new IndividualDevelopmentPlan();

  private priority: DevelopmentPlanPriority = new DevelopmentPlanPriority();

  @Input()
  public set Priority(value: DevelopmentPlanPriority) {
    this.priority = value;
    this.onReload();
  }

  public get Priority(): DevelopmentPlanPriority { return this.priority }

  public onReload(){
    if (DevelopmentPlanPriority.NotConfirm(this.priority))
      return;
    this.developmentPlanPriorityService
      .ServiceCollection
      .CollectionOfIndividualDevelopmentPlan_Priority(this.priority)
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
    editUI.Priority = this.priority;
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