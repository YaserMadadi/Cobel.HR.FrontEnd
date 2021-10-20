import { Component, Injectable, Input } from '@angular/core';

import { DetailView } from '../../../../../xcore/tools/ui/view-base/detail.view';
import { Info } from '../../../../../xcore/Info';

import { Vision } from '../vision';
import { VisionService } from '../vision.service';

import { IndividualDevelopmentPlan } from '../../IndividualDevelopmentPlan/individualDevelopmentPlan';
import { IndividualDevelopmentPlanMasterUI } from '../../IndividualDevelopmentPlan/master/individualDevelopmentPlan.master';
import { IndividualDevelopmentPlanEditUI } from '../../IndividualDevelopmentPlan/edit/individualDevelopmentPlan.edit';
import { IndividualDevelopmentPlanDeleteUI } from '../../IndividualDevelopmentPlan/delete/individualDevelopmentPlan.delete';



@Component({
  selector: 'vision-individualDevelopmentPlan-detail',
  templateUrl: './vision-individualDevelopmentPlan.detail.html',
  styleUrls: ['./vision-individualDevelopmentPlan.detail.css']
})
export class Vision_IndividualDevelopmentPlan_DetailUI extends DetailView<Vision> {

  constructor(private visionService: VisionService) {
    super(visionService);
  }

  public IndividualDevelopmentPlanList : IndividualDevelopmentPlan[] = [];
  
  public currentIndividualDevelopmentPlan : IndividualDevelopmentPlan = new IndividualDevelopmentPlan();

  private vision: Vision = new Vision();

  @Input()
  public set Vision(value: Vision) {
    this.vision = value;
    this.onReload();
  }

  public get Vision(): Vision { return this.vision }

  public onReload(){
    if (Vision.NotConfirm(this.vision))
      return;
    this.visionService
      .ServiceCollection
      .CollectionOfIndividualDevelopmentPlan(this.vision)
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
    editUI.Vision = this.vision;
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